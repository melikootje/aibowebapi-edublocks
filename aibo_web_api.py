"""Python helper for EduBlocks Aibo Web API extension.

This module intentionally stays runtime-agnostic for EduBlocks Python mode.
It uses only Python standard library HTTP clients.
"""

import json
from typing import Any, Dict, Optional
from urllib import request, error


class AiboWebApi:
    def __init__(self, base_url: str, api_key: str = '', timeout: int = 10, verify_ssl: bool = True):
        self.base_url = base_url.rstrip('/')
        self.api_key = api_key
        self.timeout = timeout
        self.verify_ssl = verify_ssl

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

    def get(self, path: str) -> Dict[str, Any]:
        return self._request('GET', path)

    def post(self, path: str, payload: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
        return self._request('POST', path, payload)

    def put(self, path: str, payload: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
        return self._request('PUT', path, payload)

    def delete(self, path: str) -> Dict[str, Any]:
        return self._request('DELETE', path)

    # Convenience wrappers for commonly used action patterns.
    def say(self, text: str) -> Dict[str, Any]:
        return self.post('/api/actions/say', {'text': text})

    def perform_action(self, action: str) -> Dict[str, Any]:
        return self.post('/api/actions/' + action, {})
