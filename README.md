# JS-Paginate

An agnostic pagination package for JavaScript.

![NPM License](https://img.shields.io/npm/l/%40sysafarila%2Fjs-paginate?style=flat-square)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/sysafarila/js-paginate/.github%2Fworkflows%2Ftest.yml?style=flat-square&label=github%20test)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/sysafarila/js-paginate/.github%2Fworkflows%2Fnpm-publish.yml?style=flat-square&label=publish%20package)
![NPM Downloads](https://img.shields.io/npm/dy/%40sysafarila%2Fjs-paginate?style=flat-square)
![NPM Version](https://img.shields.io/npm/v/%40sysafarila%2Fjs-paginate?style=flat-square)
![GitHub Release](https://img.shields.io/github/v/release/sysafarila/js-paginate?style=flat-square)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/%40sysafarila%2Fjs-paginate?style=flat-square)
![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/%40sysafarila%2Fjs-paginate?style=flat-square)

# Usage

### Parameter Detail

| Parameter    | Description                          | Required |
| ------------ | ------------------------------------ | :------: |
| current_page | Current page or active page          |   YES    |
| pages        | Total pages (Received from Back-end) |   YES    |
| length       | Limit generated array length         |   YES    |

### CDN

jsDelivr https://www.jsdelivr.com/package/npm/@sysafarila/js-paginate

```html
<script src="https://cdn.jsdelivr.net/npm/@sysafarila/js-paginate@0.0.9/dist/index.min.js"></script>
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
  import { paginate } from "https://cdn.jsdelivr.net/npm/@sysafarila/js-paginate@0.0.9/+esm";

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
