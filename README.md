<br><br>
<p align="center">
    <img src="https://raw.githubusercontent.com/master-style/package/document/images/logo-and-text.svg" alt="logo" width="142">
</p>
<p align="center">
<<<<<<< HEAD
    <b>normal.css</b>
</p>
<p align="center">Normalize browser's styles with less than 1KB css</p>
<p align="center">
<a href="https://circleci.com/gh/master-style/workflows/normal.css/tree/main">
<img src="https://img.shields.io/circleci/build/github/master-style/normal.css/main.svg?logo=circleci&logoColor=fff&label=CircleCI" alt="CI status" />
</a>&nbsp;
<a href="https://www.npmjs.com/@master/normal.css">
<img src="https://img.shields.io/npm/v/@master/normal.css.svg?logo=npm&logoColor=fff&label=NPM+package&color=limegreen" alt="Angular on npm" />
</a>&nbsp;
<a href="https://github.com/master-style/normal.css/blob/main/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/master-style/normal.css"></a>
</p>

###### CONTENTS
- [Feature](#feature)
=======
    <b>{{ PACKAGE_NAME }}</b>
</p>
<p align="center">{{ package.description }}</p>
<p align="center">
<a href="https://circleci.com/gh/{{ ORG_NAME }}/workflows/{{ PACKAGE_NAME }}/tree/main">
<img src="https://img.shields.io/circleci/build/github/{{ ORG_NAME }}/{{ PACKAGE_NAME }}/main.svg?logo=circleci&logoColor=fff&label=CircleCI" alt="CI status" />
</a>&nbsp;
<a href="https://www.npmjs.com/{{ package.name }}">
<img src="https://img.shields.io/npm/v/{{ package.name }}.svg?logo=npm&logoColor=fff&label=NPM+package&color=limegreen" alt="Angular on npm" />
</a>&nbsp;
<a href="https://github.com/{{ ORG_NAME }}/{{ PACKAGE_NAME }}/blob/main/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/{{ ORG_NAME }}/{{ PACKAGE_NAME }}"></a>
</p>

###### CONTENTS
>>>>>>> package/css
- [Install](#install)
  - [CDN](#cdn)
- [Usage](#usage)

<<<<<<< HEAD
# Feature
- Less than **< 1 KB**
- Geometric precision rendering for prettier text
- Antialiased font smoothing looks great
- Prettier default sans and mono font
- Remove body margin
- `line-height: 1.2`
- `box-sizing: border-box`
- `tab-size: 4`
- `-webkit-touch-callout: none`
- `-webkit-tap-highlight-color: transparent`
- `text-size-adjust: 100%`
- `font-weight: bolder`

# Install
```sh
npm install @master/normal.css
```
## CDN
- [jsdelivr](https://www.jsdelivr.com/package/npm/@master/normal.css)
- [unpkg](https://unpkg.com/@master/normal.css)

# Usage
```css
@import '@master/normal.css';
=======
# Install
```sh
npm install {{ package.name }}
```
## CDN
- [jsdelivr](https://www.jsdelivr.com/package/npm/{{ package.name }})
- [unpkg](https://unpkg.com/{{ package.name }})

# Usage
```css
@import '{{ package.name }}';
>>>>>>> package/css
```