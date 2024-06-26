import { paginate } from "../src/index";

describe("Testing Paginate Function", () => {
  test("Generating pagination for 20 pages and 8 current page with default array length", () => {
    const result = paginate({
      current_page: 8,
      pages: 20,
    });
    expect(result.length).toBe(9);
    expect(result[4]).toBe(8);
  });

  test("Generating pagination for 20 pages and 8 current page with 9 array length", () => {
    const result = paginate({
      current_page: 8,
      length: 9,
      pages: 20,
    });
    expect(result.length).toBe(9);
    expect(result[4]).toBe(8);
  });

  test("Generating pagination for 20 pages and 12 current page with 5 array length", () => {
    const result = paginate({
      current_page: 12, // current page or active page
      length: 5, // array length
      pages: 20, // total pages
    });
    expect(result.length).toBe(5);
    expect(result[2]).toBe(12);
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

  test("Throw error when current_page is larger than pages or total pages", () => {
    expect(() => {
      paginate({
        current_page: 9,
        length: 9,
        pages: 5,
      });
    }).toThrow();
  });

  test("Throw error when length is less then one", () => {
    expect(() => {
      paginate({
        current_page: 9,
        length: 0,
        pages: 5,
      });
    }).toThrow();
  });
});
