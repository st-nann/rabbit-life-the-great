import isUndefined from "lodash/isUndefined"
import get from "lodash/get"

export function calculateItemPerPageSlide() {
  if (!isUndefined(window)) {
    const breakpoints = get(window, "screen.width", 1024) as number
    if (breakpoints > 619 && breakpoints < 1024) {
      return 2
    } else if (breakpoints < 620) {
      return 1
    }
  }
  return 3
}