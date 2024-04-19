import { PaginateProps } from "./types";

export function paginate({
  pages,
  current_page,
  length = 9,
}: PaginateProps): number[] {
  // handle if current page is larger than total page
  if (current_page > pages) {
    throw new Error(`"current_page" must be greater than "pages".`);
  }

  // handle if length is 0
  if (length == 0) {
    throw new Error(`"length" must be greater than zero.`);
  }

  let center = Math.floor(length / 2);
  let n = [];

  // handle left
  let start_left = current_page;
  while (n.length <= center && start_left > 0) {
    n.push(start_left);
    start_left--;
  }

  // handle right
  let start_right = current_page;
  while (n.length < length && start_right < pages) {
    start_right++;
    n.push(start_right);
  }

  // handle final left
  let final_left = length - n.length;
  while (
    n.length < length &&
    final_left > 0 &&
    start_left + 1 - final_left > 0
  ) {
    n.push(start_left + 1 - final_left);
    final_left--;
  }

  // sorting
  n.sort((a, b) => {
    return a - b;
  });

  return n;
}
