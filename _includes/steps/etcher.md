1. **Download Balena Etcher** from [etcher.balena.io](https://etcher.balena.io/) and install it. It copies the image onto the SD card.
2. **Put the microSD card in your laptop.** Use the SD slot or a USB card reader.
3. **Open Etcher.** Choose **Flash from file** and pick the image you downloaded. Choose your SD card as the target.
4. **Click Flash.** This can take up to 30 minutes. Wait until Etcher says it is done.
{: .steps}

{% include gallery.html dir="/assets/images/setup/" files="flash_sd.png" captions="Balena Etcher: pick the image, pick the SD card, then Flash" size="one" %}

> **Card adapter?** Check that the small switch on the side is not set to **Lock**. A locked card cannot be written.
{: .tip}

> **Windows:** after flashing you may see many File Explorer windows and error messages. You can close them. If Windows asks to **format** the card, click **Cancel**. Formatting erases the image.
{: .warn}

> **Flash failed?** Try again once. If it still fails, try another SD card.
{: .tip}
