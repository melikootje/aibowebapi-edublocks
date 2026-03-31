# EduBlocks Python Mode Extension: Aibo Web API

This extension is built for **EduBlocks Python mode**.

It adds custom blocks that generate plain Python code for calling Aibo web endpoints via a bundled `AiboWebApi` helper.

## Files

- `config.json` points EduBlocks to `aibo_web_api.py`
- `toolbox.xml` defines the Aibo category in the Python toolbox
- `definitions.ts` defines the custom blocks
- `generators.ts` maps blocks to Python code
- `aibo_web_api.py` contains the HTTP client helper (standard library only)

## Example generated Python

```python
from aibo_web_api import AiboWebApi

aibo = AiboWebApi('http://127.0.0.1:8080', 'your_api_key')
response = aibo.get('/api/status')
print(response.get('data'))

aibo.say('Hello buddy')
aibo.perform_action('sit_down')
```

## Notes

- Change endpoint paths to match your Aibo bridge/service.
- The helper returns normalized dictionaries:
  - Success: `{"status": 200, "ok": True, "data": {...}}`
  - Failure: `{"status": <code>, "ok": False, "error": ...}`
