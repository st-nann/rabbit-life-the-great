import isUndefined from "lodash/isUndefined"
import get from "lodash/get"
import numeral from "numeral"

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

export function convertCurrency(amount: number) {
  return numeral(amount).format("$0,0.00")
}