# MBot Website Files

Source for [https://mbot.robotics.umich.edu/](https://mbot.robotics.umich.edu/).

## View the site on your computer (no install except Python 3)

1. Open this repository's **Releases** page and download **mbot-site.zip** from "MBot site (offline copy)".
2. Unzip it.
3. Start the local server:
   - **Mac / Linux:** open Terminal in the `mbot-site` folder and run `bash serve.sh`
   - **Windows:** double-click `serve.bat`
4. The site opens at http://localhost:4000/. Stop it with Ctrl+C.

The zip is rebuilt automatically every time `main` changes (see `.github/workflows/jekyll.yml`).

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
