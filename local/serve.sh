#!/bin/bash
# Serve this folder on http://localhost and open it in the browser.
# Usage: bash serve.sh [port]   (default 4000). Stop with Ctrl+C.
cd "$(dirname "$0")"
if command -v python3 >/dev/null 2>&1; then
  exec python3 serve.py "$@"
elif command -v python >/dev/null 2>&1; then
  exec python serve.py "$@"
else
  echo "Python 3 is needed. Install it from https://www.python.org/downloads/ and try again."
  exit 1
fi
