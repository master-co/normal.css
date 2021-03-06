<br><br>
<p align="center">
    <img src="https://raw.githubusercontent.com/master-co/package/document/images/logo-and-text.svg" alt="logo" width="142">
</p>
<p align="center">
    <b><!-- name -->normal.css<!----></b>
</p>
<p align="center"><!-- package.description -->Normalize browser's styles with less than 1KB<!----></p>
<p align="center">
<!-- badges.map((badge) => `<a href="${badge.href}"><img src="${badge.src}" alt="${badge.alt}"></a>`).join('&nbsp;')--><a href="https://circleci.com/gh/master-co/workflows/normal.css/tree/main"><img src="https://img.shields.io/circleci/build/github/master-co/normal.css/main.svg?logo=circleci&logoColor=fff&label=CircleCI" alt="CI status"></a>&nbsp;<a href="https://www.npmjs.com/@master/normal.css"><img src="https://img.shields.io/npm/v/@master/normal.css.svg?logo=npm&logoColor=fff&label=NPM&color=limegreen" alt="npm"></a>&nbsp;<a href="https://github.com/master-co/normal.css/blob/main/LICENSE"><img src="https://img.shields.io/github/license/master-co/normal.css" alt="license"></a><!---->
</p>

###### CONTENTS
- [Usage](#usage)

# Feature
- Less than **< 1 KB**
- Geometric precision rendering for prettier text
- Antialiased font smoothing looks great
- Prettier default `sans` and `mono` font
- Set most tags to `margin: 0` and `padding: 0`
- Providing `:root` variable: `--font-mono`, `--font-sans`, `--font-serif`
- Globaly `box-sizing: border-box`
- Globaly `border: 0`
- Set controls `color: inherit`
- Set `a, button, [role=button], [type=button]` property `cursor: pointer`
- `line-height: 1.2`
- `tab-size: 4`
- `-webkit-touch-callout: none`
- `-webkit-tap-highlight-color: transparent`
- `text-size-adjust: 100%`
- `font-weight: bolder`
- Set `img, svg, video, canvas, audio, iframe, embed, object` to `display: block`
- ... [check source code](https://github.com/master-co/normal.css/blob/main/src/index.scss)

# Install
```sh
npm install @master/normal.css
```
## CDN
<!-- cdns.map((cdn) => `\n- [${cdn.name}](${cdn.href})`).join('') -->
- [jsdelivr](https://www.jsdelivr.com/package/npm/@master/normal.css)
- [unpkg](https://unpkg.com/@master/normal.css)<!---->

# Usage
```css
@import '@master/normal.css';
```