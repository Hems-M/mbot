# MBot website (simplified)

Source for the MBot documentation site: step by step guides to build, set up and program the MBot Classic and MBot Omni.

It is a plain [Jekyll](https://jekyllrb.com/) site that builds with the `github-pages` gem (Jekyll 3.10). There is no remote theme: all layouts, styles and scripts are in this repository.

## Site map

```
Home (index.html)
├── Documentation (docs/index.md)
│   ├── Robot basics (docs/basics.md)
│   ├── MBot Classic (docs/classic/)
│   │   ├── Hardware  (docs/classic/hardware/)  5 steps
│   │   └── Software  (docs/classic/software/)  7 steps, server setup (no desktop)
│   ├── MBot Omni (docs/omni/)
│   │   ├── Hardware  (docs/omni/hardware/)     6 steps
│   │   └── Software  (docs/omni/software/)     7 steps, desktop setup with NoMachine
│   ├── Guides (docs/guides/)
│   └── Help (docs/help/)
└── UM Courses (courses.md)
```

Old page addresses (for example `/docs/setup/01-install-os/`) redirect to the new pages through `redirect_from` in each page's front matter.

## Where to change things

| To change | Edit |
|---|---|
| Sidebar, step order, prev / next buttons | `_data/nav.yml` |
| Firmware version, image links, login, hotspot details | `_data/mbot.yml` |
| "What is on the robot" tables, services, setup comparison | `_data/features.yml` |
| Steps shared by Classic and Omni (flashing, config file, VS Code, calibration, test drive) | `_includes/steps/` |
| Colors and layout (light and dark theme) | `assets/css/site.css` |
| Theme switch, search, copy buttons, image viewer, firmware picker | `assets/js/site.js` |
| Page templates | `_layouts/` |

The MBot Classic server image link is empty in `_data/mbot.yml` (`images.classic_server`). While it is empty, the "Flash the SD card" page tells students to ask course staff. Add the link there when the image is released.

## Writing a page

Pages are Markdown with front matter:

```yaml
---
title: Join Wi-Fi
summary: "One line shown under the title."
needs: [Your uniqname and UM password]   # optional chips under the title
redirect_from:                           # optional old addresses
  - /docs/old/page/
---
```

Helpers you can use in a page:

| Write | Result |
|---|---|
| `> text` then `{: .tip}` on the next line | Maize tip box. Also `.warn`, `.danger`, or no class for a blue note. |
| An ordered list followed by `{: .steps}` | Numbered step circles |
| A list followed by `{: .checklist}` | Check marks |
| A table followed by `{: .parts}` | Parts table (count column centered) |
| `{% include gallery.html dir="/assets/images/x/" files="a.jpg,b.jpg" captions="A|B" %}` | Image row. Click to enlarge. `size="md"` or `size="one"` for bigger images. |
| `{% include firmware-picker.html robot="classic" %}` | Firmware picker |
| `{% include features-table.html robot="classic" %}` | "What is on the robot" table |

To add a page to the sidebar or a step group, add it to `_data/nav.yml`.

## Run it on your computer

Needs Ruby 3.x and Bundler.

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>.

## Publish

`.github/workflows/jekyll.yml` builds the site and deploys it to GitHub Pages on every push to `main`. `CNAME` sets the domain.
