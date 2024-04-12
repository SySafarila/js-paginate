import { paginate } from "../src/index";

describe("Testing Paginate Function", () => {
  test("Generating pagination for 20 pages and 8 current page with 9 array length", () => {
    const result = paginate({
      current_page: 8,
      length: 9,
      pages: 20,
    });
    expect(result.length).toBe(9);
    expect(result[4]).toBe(8);
  });

  test("Generating pagination for 20 pages and 19 current page with 9 array length", () => {
    const result = paginate({
      current_page: 19,
      length: 9,
      pages: 20,
    });
    expect(result.length).toBe(9);
    expect(result[4]).toBe(16);
  });

  test("Generating pagination for 5 pages and 3 current page with 9 array length", () => {
    const result = paginate({
      current_page: 3,
      length: 9,
      pages: 5,
    });
    expect(result.length).toBe(5);
    expect(result[4]).toBe(5);
  });

  test("Generating pagination for 5 pages and 9 current page with 9 array length", () => {
    const result = paginate({
      current_page: 9,
      length: 9,
      pages: 5,
    });
    expect(result.length).toBe(0);
  });
});
