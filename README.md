# js-paginate

A pagination generator for JavaScript with Median

# Usage

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
// [ 1, 2, 3, 4, 5 ];
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
