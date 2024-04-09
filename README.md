# js-paginate

A pagination generator for JavaScript with Median

# Usage

#### Module:
```js
import { paginate } from "@sysafarila/js-paginate";

const result = paginate({
  current_page: 12,
  display: 9,
  pages: 20,
});

console.log(result);
// result
// [8, 9, 10, 11, 12, 13, 14, 15, 16];
```

#### CommonJs:
```js
const { paginate } = require("@sysafarila/js-paginate");

const res = paginate({
  current_page: 12,
  display: 9,
  pages: 20,
});

console.log(result);
// result
// [8, 9, 10, 11, 12, 13, 14, 15, 16];
```