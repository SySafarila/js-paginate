# js-paginate

A pagination generator for JavaScript with Median

![NPM License](https://img.shields.io/npm/l/%40sysafarila%2Fjs-paginate?style=flat-square)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/sysafarila/js-paginate/.github%2Fworkflows%2Ftest.yml?style=flat-square&label=github%20test)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/sysafarila/js-paginate/.github%2Fworkflows%2Fnpm-publish.yml?style=flat-square&label=publish%20package)
![NPM Downloads](https://img.shields.io/npm/dy/%40sysafarila%2Fjs-paginate?style=flat-square)
![NPM Version](https://img.shields.io/npm/v/%40sysafarila%2Fjs-paginate?style=flat-square)
![GitHub Release](https://img.shields.io/github/v/release/sysafarila/js-paginate?style=flat-square)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/%40sysafarila%2Fjs-paginate?style=flat-square)
![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/%40sysafarila%2Fjs-paginate?style=flat-square)

# Usage

### CDN

- jsDelivr https://www.jsdelivr.com/package/npm/@sysafarila/js-paginate

```html
<script src="https://cdn.jsdelivr.net/npm/@sysafarila/js-paginate@0.0.9/dist/index.min.js"></script>
<script>
  const result = paginate({
    current_page: 12, // current page or active page
    length: 9, // array length
    pages: 20, // total pages
  });

  console.log(result);
  // result
  // [8, 9, 10, 11, 12, 13, 14, 15, 16];
</script>
```

```html
<script type="module">
  import { paginate } from "https://cdn.jsdelivr.net/npm/@sysafarila/js-paginate@0.0.9/+esm";

  const result = paginate({
    current_page: 12, // current page or active page
    length: 9, // array length
    pages: 20, // total pages
  });

  console.log(result);
  // result
  // [8, 9, 10, 11, 12, 13, 14, 15, 16];
</script>
```

### ES Module

```js
import { paginate } from "@sysafarila/js-paginate";
```

### CommonJs

```js
const { paginate } = require("@sysafarila/js-paginate");
```

### Example

```js
const result = paginate({
  current_page: 12, // current page or active page
  length: 9, // array length
  pages: 20, // total pages
});

console.log(result);
// result
// [8, 9, 10, 11, 12, 13, 14, 15, 16];
```

```js
const result = paginate({
  current_page: 6, // current page or active page
  length: 9, // array length
  pages: 20, // total pages
});

console.log(result);
// result
// [2, 3, 4, 5, 6, 7, 8, 9, 10];
```

```js
const result = paginate({
  current_page: 2, // current page or active page
  length: 9, // array length
  pages: 5, // total pages
});

console.log(result);
// result
// [1, 2, 3, 4, 5];
```

```js
const result = paginate({
  current_page: 12, // current page or active page
  length: 5, // array length
  pages: 20, // total pages
});

console.log(result);
// result
// [10, 11, 12, 13, 14];
```
