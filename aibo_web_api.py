"""Python helper for EduBlocks Aibo Web API extension.

This module is runtime-agnostic for EduBlocks Python mode and uses the
Python standard library for HTTP calls.
"""

import json
from typing import Any, Dict, Optional
from urllib import error, parse, request


class AiboWebApi:
    def __init__(self, base_url: str, api_key: str = '', timeout: int = 10, verify_ssl: bool = True):
        self.base_url = base_url.rstrip('/')
        self.api_key = api_key
        self.timeout = timeout
        self.verify_ssl = verify_ssl

        # Endpoint roots for common Aibo-style bridge APIs.
        self.actions_api = '/api/actions'
        self.settings_api = '/api/settings'
        self.events_api = '/api/events'

    def _make_url(self, path: str) -> str:
        if not path.startswith('/'):
            path = '/' + path
        return self.base_url + path

    def _request(
        self,
        method: str,
        path: str,
        payload: Optional[Dict[str, Any]] = None,
    ) -> Dict[str, Any]:
        url = self._make_url(path)
        headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
        if self.api_key:
            headers['Authorization'] = f'Bearer {self.api_key}'

        data = None
        if payload is not None:
            data = json.dumps(payload).encode('utf-8')

        req = request.Request(url=url, data=data, headers=headers, method=method.upper())

        context = None
        if not self.verify_ssl:
            import ssl
            context = ssl._create_unverified_context()  # noqa: SLF001

        try:
            with request.urlopen(req, timeout=self.timeout, context=context) as response:
                body = response.read().decode('utf-8').strip()
                if not body:
                    return {'status': response.status, 'ok': True, 'data': None}
                parsed = json.loads(body)
                return {'status': response.status, 'ok': 200 <= response.status < 300, 'data': parsed}
        except error.HTTPError as exc:
            body = exc.read().decode('utf-8').strip()
            details: Any = body
            try:
                details = json.loads(body) if body else None
            except json.JSONDecodeError:
                pass
            return {'status': exc.code, 'ok': False, 'error': details}
        except error.URLError as exc:
            return {'status': 0, 'ok': False, 'error': str(exc.reason)}

    def get(self, path: str, params: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
        if params:
            query = parse.urlencode(params)
            separator = '&' if '?' in path else '?'
            path = f'{path}{separator}{query}'
        return self._request('GET', path)

    def post(self, path: str, payload: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
        return self._request('POST', path, payload)

    def put(self, path: str, payload: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
        return self._request('PUT', path, payload)

    def patch(self, path: str, payload: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
        return self._request('PATCH', path, payload)

    def delete(self, path: str) -> Dict[str, Any]:
        return self._request('DELETE', path)

    # Actions API
    def actions_list(self) -> Dict[str, Any]:
        return self.get(self.actions_api)

    def actions_get(self, action: str) -> Dict[str, Any]:
        return self.get(f'{self.actions_api}/{action}')

    def actions_trigger(self, action: str, payload: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
        return self.post(f'{self.actions_api}/{action}', payload or {})

    def say(self, text: str) -> Dict[str, Any]:
        return self.actions_trigger('say', {'text': text})

    # Settings API
    def settings_get_all(self) -> Dict[str, Any]:
        return self.get(self.settings_api)

    def settings_get(self, key: str) -> Dict[str, Any]:
        return self.get(f'{self.settings_api}/{key}')

    def settings_set(self, key: str, value: Any) -> Dict[str, Any]:
        return self.put(f'{self.settings_api}/{key}', {'value': value})

    def settings_update(self, values: Dict[str, Any]) -> Dict[str, Any]:
        return self.patch(self.settings_api, values)

    # Events API
    def events_list(self) -> Dict[str, Any]:
        return self.get(self.events_api)

    def events_since(self, since: str) -> Dict[str, Any]:
        return self.get(self.events_api, {'since': since})
