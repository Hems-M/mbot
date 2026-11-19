---
title: Flash the SD card
summary: "Copy the MBot Classic server image onto a microSD card."
needs: [microSD card, SD card reader, About 4 GB free on your laptop]
redirect_from:
  - /docs/setup/01-install-os/
---

## 1. Download the image

{% if site.data.mbot.images.classic_server != "" -%}
<div class="btn-row"><a class="btn btn-maize" href="{{ site.data.mbot.images.classic_server }}">{% include icon.html name="download" %} Download the MBot Classic server image</a></div>
{%- else -%}
> **Get the image link from course staff.** The MBot Classic server image (no desktop) is shared by your course. It is a large file that ends in `.img.gz`. You do not need to unzip it.
{: .tip}
{%- endif %}

The file is large and can take a while to download.

## 2. Flash it with Balena Etcher

{% include steps/etcher.md %}

**It worked if** Etcher shows "Flash Complete". Leave the card in your laptop for the next step.
