---
title: Flash the SD card
summary: "Copy the MBot Omni image onto a microSD card."
needs: [microSD card, SD card reader, About 4 GB free on your laptop]
---

## 1. Download the image

<div class="btn-row">
  <a class="btn btn-maize" href="{{ site.data.mbot.images.full_omni }}">{% include icon.html name="download" %} MBot Omni full image</a>
  <a class="btn btn-ghost" href="{{ site.data.mbot.images.base }}">{% include icon.html name="download" %} MBot base image</a>
</div>

| Image | What is on it | Use it when |
|---|---|---|
| **Omni full image** | Everything: MBot code, web app, mapping. | You want to drive and program right away. **Most people want this one.** |
| **Base image** | The system only, no MBot code. | You want to install the MBot code yourself. See [Build a new image]({{ site.baseurl }}/docs/guides/new-image/). |

> **Students:** check with course staff which image to use. Older images are in the [image folder]({{ site.data.mbot.images.all_images }}).
{: .tip}

## 2. Flash it with Balena Etcher

{% include steps/etcher.md %}

**It worked if** Etcher shows "Flash Complete". Leave the card in your laptop for the next step.
