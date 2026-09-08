"""Serve only the generated dist folder, including Vercel-style clean URLs."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit, urlunsplit
import functools

ROOT = Path(__file__).resolve().parent.parent / 'dist'
class Handler(SimpleHTTPRequestHandler):
    def clean_path(self):
        parts = urlsplit(self.path)
        current = Path(self.translate_path(parts.path))
        if not current.exists() and current.with_suffix('.html').is_file():
            self.path = urlunsplit(('', '', parts.path + '.html', parts.query, ''))
    def do_GET(self):
        self.clean_path()
        super().do_GET()
    def do_HEAD(self):
        self.clean_path()
        super().do_HEAD()

if __name__ == '__main__':
    if not ROOT.exists():
        raise SystemExit('Run npm run build first')
    print('Preview: http://127.0.0.1:8771', flush=True)
    ThreadingHTTPServer(('127.0.0.1', 8771), functools.partial(Handler, directory=str(ROOT))).serve_forever()
