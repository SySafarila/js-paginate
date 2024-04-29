# JS-Paginate

An agnostic pagination package for JavaScript.

<p style="text-align: center;"><img src="https://img.shields.io/npm/l/%40sysafarila%2Fjs-paginate?style=flat-square" alt="NPM License">
<img src="https://img.shields.io/github/actions/workflow/status/sysafarila/js-paginate/.github%2Fworkflows%2Ftest.yml?style=flat-square&amp;label=github%20test" alt="GitHub Actions Workflow Status">
<img src="https://img.shields.io/github/actions/workflow/status/sysafarila/js-paginate/.github%2Fworkflows%2Fnpm-publish.yml?style=flat-square&amp;label=auto%20publish" alt="GitHub Actions Workflow Status">
<img src="https://img.shields.io/npm/dy/%40sysafarila%2Fjs-paginate?style=flat-square" alt="NPM Downloads">
<img src="https://img.shields.io/npm/v/%40sysafarila%2Fjs-paginate?style=flat-square&amp;label=npm%20version" alt="NPM Version">
<img src="https://img.shields.io/github/v/release/sysafarila/js-paginate?style=flat-square" alt="GitHub Release">
<img src="https://img.shields.io/bundlephobia/minzip/%40sysafarila%2Fjs-paginate?style=flat-square" alt="npm bundle size">
<img src="https://img.shields.io/npm/unpacked-size/%40sysafarila%2Fjs-paginate?style=flat-square" alt="NPM Unpacked Size"></p>

# Installation

Run this command below on your terminal

```
npm i @sysafarila/js-paginate
```

# Usage

| Parameter    | Description                          |           Required            |
| ------------ | ------------------------------------ | :---------------------------: |
| current_page | Current page or active page          |              YES              |
| pages        | Total pages (Received from Back-end) |              YES              |
| length       | Limit generated array length         | YES, Optional since `v0.0.12` |

### CDN

jsDelivr https://www.jsdelivr.com/package/npm/@sysafarila/js-paginate

```html
<script src="https://cdn.jsdelivr.net/npm/@sysafarila/js-paginate@0.0.12/dist/index.min.js"></script>
<script>
  const result = paginate({
    current_page: 12,
    length: 9,
    pages: 20,
  });

  console.log(result);
</script>
```

or

```html
<script type="module">
  import { paginate } from "https://cdn.jsdelivr.net/npm/@sysafarila/js-paginate@0.0.12/+esm";

  const result = paginate({
    current_page: 12,
    length: 9,
    pages: 20,
  });

  console.log(result);
</script>
```

### ES Module

```js
import { paginate } from "@sysafarila/js-paginate";

const result = paginate({
  current_page: 12,
  length: 9,
  pages: 20,
});

console.log(result);
```

### CommonJs

```js
const { paginate } = require("@sysafarila/js-paginate");

const result = paginate({
  current_page: 12,
  length: 9,
  pages: 20,
});

console.log(result);
```

### Result

Return value of `paginate` function:

```js
[8, 9, 10, 11, 12, 13, 14, 15, 16];
```

Next, you have to `loop` this generated array to build your own UI.
