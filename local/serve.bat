@echo off
REM Serve this folder at http://localhost:4000 and open it in the browser.
REM Double-click this file, or run: serve.bat [port]. Close the window to stop.
cd /d "%~dp0"
set PORT=%1
if "%PORT%"=="" set PORT=4000

where py >nul 2>nul && (set PY=py) || (set PY=python)
%PY% --version >nul 2>nul || (
  echo Python 3 is needed. Install it from https://www.python.org/downloads/ and try again.
  pause
  exit /b 1
)

echo MBot site: http://localhost:%PORT%/
echo Close this window to stop.
start "" http://localhost:%PORT%/
%PY% -m http.server %PORT% --bind 127.0.0.1
