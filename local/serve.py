"""Serve this offline copy of the MBot site on localhost and open it.

Usage:  python3 serve.py [port]      (default 4000)

- If the port is busy (for example another copy is still running), the next
  free port is used, so you never see an old copy by mistake.
- Pages are sent with "do not cache", so the browser always shows the files
  in this folder, not a copy it saved from another version.
- Stop with Ctrl+C.
"""
import functools
import http.server
import os
import sys
import threading
import webbrowser

HERE = os.path.dirname(os.path.abspath(__file__))
start = int(sys.argv[1]) if len(sys.argv) > 1 else 4000


class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, max-age=0")
        super().end_headers()

    def log_message(self, *args):
        pass  # keep the terminal quiet


handler = functools.partial(NoCacheHandler, directory=HERE)
server = None
for port in range(start, start + 50):
    try:
        server = http.server.ThreadingHTTPServer(("127.0.0.1", port), handler)
        break
    except OSError:
        continue
if server is None:
    print(f"No free port between {start} and {start + 49}. Close other copies and try again.")
    sys.exit(1)

version = ""
vf = os.path.join(HERE, "VERSION.txt")
if os.path.exists(vf):
    version = open(vf, encoding="utf-8").read().strip()

url = f"http://localhost:{port}/"
print("MBot site, offline copy")
print(f"  Folder:  {HERE}")
if version:
    for line in version.splitlines():
        print(f"  {line}")
if port != start:
    print(f"  Port {start} was busy (another copy may still be running), so this copy uses {port}.")
print(f"  Open:    {url}")
print("Press Ctrl+C to stop.")

threading.Timer(0.8, lambda: webbrowser.open(url)).start()
try:
    server.serve_forever()
except KeyboardInterrupt:
    print("\nStopped.")
