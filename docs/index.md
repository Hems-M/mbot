---
title: Documentation
summary: "Everything you need to build, set up and use an MBot. Pick your robot, then follow the steps in order."
toc: false
redirect_from:
  - /docs/getting-started/
  - /docs/hardware/
  - /docs/concepts/
  - /docs/concepts/architecture/
  - /docs/concepts/lcm/
  - /docs/teaching/
  - /docs/teaching/course-image/
---

## Where are you now?

<ul class="path-list">
  <li><a href="#pick-your-robot"><span class="path-num">1</span><span><span class="path-title">My robot is not built yet</span><span class="path-text">Pick your robot below and open Hardware.</span></span>{% include icon.html name="arrow-right" %}</a></li>
  <li><a href="#pick-your-robot"><span class="path-num">2</span><span><span class="path-title">My robot is built, but the software is not set up</span><span class="path-text">Pick your robot below and open Software.</span></span>{% include icon.html name="arrow-right" %}</a></li>
  <li><a href="{{ '/docs/guides/drive/' | relative_url }}"><span class="path-num">3</span><span><span class="path-title">My robot is set up and ready</span><span class="path-text">Test drive it, then start programming with the guides.</span></span>{% include icon.html name="arrow-right" %}</a></li>
</ul>

> **Students:** your course staff may have already set up your robot, or may use a different image. Check your course website first. See [UM Courses]({{ site.baseurl }}/courses/).
{: .tip}

## Pick your robot

<div class="cards cards-2">
  <div class="card">
    <div class="card-img"><img src="{{ '/assets/images/mbot-no-bkg.png' | relative_url }}" alt="MBot Classic"></div>
    <span class="card-title">MBot Classic</span>
    <p class="card-text">Two wheels and a caster, Raspberry Pi 5. Software uses the <strong>server setup</strong>: no desktop on the robot.</p>
    <div class="btn-row">
      <a class="btn btn-ghost" href="{{ '/docs/classic/hardware/' | relative_url }}">Hardware</a>
      <a class="btn btn-blue" href="{{ '/docs/classic/software/' | relative_url }}">Software</a>
    </div>
  </div>
  <div class="card">
    <div class="card-img"><img src="{{ '/assets/images/mbot-omni-no-bkg.png' | relative_url }}" alt="MBot Omni"></div>
    <span class="card-title">MBot Omni</span>
    <p class="card-text">Three omni wheels, Raspberry Pi 4. Software uses the <strong>desktop setup</strong> with NoMachine.</p>
    <div class="btn-row">
      <a class="btn btn-ghost" href="{{ '/docs/omni/hardware/' | relative_url }}">Hardware</a>
      <a class="btn btn-blue" href="{{ '/docs/omni/software/' | relative_url }}">Software</a>
    </div>
  </div>
</div>

### The two software setups

{% include compare-table.html %}

## For every robot

<div class="cards">
  <a class="card" href="{{ '/docs/basics/' | relative_url }}">
    <span class="card-icon">{% include icon.html name="robot" %}</span>
    <span class="card-title">Robot basics</span>
    <p class="card-text">Login, turning the robot on and off, battery care.</p>
  </a>
  <a class="card" href="{{ '/docs/guides/' | relative_url }}">
    <span class="card-icon">{% include icon.html name="book" %}</span>
    <span class="card-title">Guides</span>
    <p class="card-text">Find the IP, connect, flash firmware, program and map.</p>
  </a>
  <a class="card" href="{{ '/docs/guides/software-features/' | relative_url }}">
    <span class="card-icon">{% include icon.html name="list" %}</span>
    <span class="card-title">What is on the robot</span>
    <p class="card-text">Each tool, what it does and when to use it.</p>
  </a>
  <a class="card" href="{{ '/docs/help/' | relative_url }}">
    <span class="card-icon">{% include icon.html name="help" %}</span>
    <span class="card-title">Help</span>
    <p class="card-text">Common problems and how to fix them.</p>
  </a>
</div>

> **Found a mistake?** [Report it on GitHub]({{ site.issues_url }}) or email [{{ site.help_email }}](mailto:{{ site.help_email }}).
