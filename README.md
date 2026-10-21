# MBot Website Files

Source for [https://mbot.robotics.umich.edu/](https://mbot.robotics.umich.edu/).

## View the site on your computer (no install except Python 3)

1. Open this repository's **Releases** page. Each branch has its own release:
   - `main`: "MBot site (offline copy)", file **mbot-site-main.zip**
   - `redesign/<name>`: "MBot site, redesign/<name> branch (offline copy)", file **mbot-site-redesign-<name>.zip**
2. Unzip it. The folder has the same name as the zip, and `VERSION.txt` inside says which branch and commit it is.
3. Start the local server:
   - **Mac / Linux:** open Terminal in that folder and run `bash serve.sh`
   - **Windows:** double-click `serve.bat`
4. The browser opens the site. The terminal prints the address and the version. Stop it with Ctrl+C.

Viewing several versions? Each copy picks its own free port (4000, 4001, ...) and tells the browser not to cache, so copies never get mixed up.

The zips are rebuilt automatically every time a branch changes (see `.github/workflows/jekyll.yml`).

Do not open `index.html` directly from the folder: links start with `/` and only work through the local server.

## Edit and preview from source

You need Ruby 3.2 (on a Mac: `brew install ruby`) or Docker.

**With Ruby:**
```bash
bundle install
bundle exec jekyll serve
```

**With Docker (nothing else to install):**
```bash
docker run --rm -it -p 4000:4000 -v "$PWD":/site -w /site ruby:3.2 \
  bash -c "bundle install && bundle exec jekyll serve --host 0.0.0.0"
```

Then open http://localhost:4000/. Pages reload when you save a file.
