#!/bin/bash
# Serve this folder at http://localhost:4000 and open it in the browser.
# Usage: bash serve.sh [port]     (default port 4000). Stop with Ctrl+C.
set -e
cd "$(dirname "$0")"
PORT="${1:-4000}"

if command -v python3 >/dev/null 2>&1; then
  PY=python3
elif command -v python >/dev/null 2>&1; then
  PY=python
else
  echo "Python 3 is needed. Install it from https://www.python.org/downloads/ and try again."
  exit 1
fi

URL="http://localhost:${PORT}/"
echo "MBot site: ${URL}"
echo "Press Ctrl+C to stop."

# Open the browser a moment after the server starts.
( sleep 1
  if command -v open >/dev/null 2>&1; then open "$URL"
  elif command -v xdg-open >/dev/null 2>&1; then xdg-open "$URL" >/dev/null 2>&1
  fi ) &

exec "$PY" -m http.server "$PORT" --bind 127.0.0.1
