@echo off
REM Serve this folder on http://localhost and open it in the browser.
REM Double-click this file, or run: serve.bat [port]. Close the window to stop.
cd /d "%~dp0"
where py >nul 2>nul && (py serve.py %*) || (python serve.py %*)
if errorlevel 1 (
  echo.
  echo If Python is missing, install it from https://www.python.org/downloads/
  pause
)
