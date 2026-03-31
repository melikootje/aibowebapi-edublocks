# EduBlocks Python Mode Extension: Aibo Web API

This extension is built for **EduBlocks Python mode**.

It adds custom blocks and helper methods for:

- Core HTTP calls
- Actions API
- Settings API
- Events API

## Files

- `config.json` points EduBlocks to `aibo_web_api.py`
- `toolbox.xml` defines the Aibo category in the Python toolbox
- `definitions.ts` defines custom blocks
- `generators.ts` maps blocks to Python code
- `aibo_web_api.py` contains the API client helper (standard library only)

## Example generated Python

```python
from aibo_web_api import AiboWebApi

aibo = AiboWebApi('http://127.0.0.1:8080', 'your_api_key')

# Actions API
response = aibo.actions_list()
response = aibo.actions_trigger('sit_down', {})
response = aibo.say('Hello buddy')

# Settings API
response = aibo.settings_get_all()
response = aibo.settings_get('volume')
response = aibo.settings_set('volume', 8)
response = aibo.settings_update({'eye_brightness': 50})

# Events API
response = aibo.events_list()
response = aibo.events_since('cursor_123')
```

## Notes

- Default endpoint roots are:
  - Actions: `/api/actions`
  - Settings: `/api/settings`
  - Events: `/api/events`
- Change endpoint roots in `AiboWebApi.__init__` if your bridge uses different paths.
- Responses are normalized dictionaries:
  - Success: `{"status": 200, "ok": True, "data": {...}}`
  - Failure: `{"status": <code>, "ok": False, "error": ...}`
