import { Category, Product } from "@/types/product"
import { menu } from "@/config/menu"
import { Menu, MenuGroup } from "@/types/menu"
import filter from "lodash/filter"
import get from "lodash/get"
import { includes } from "lodash"

export function getProductByCategory(lists: Product[], category: string): Product[] {
  let newLists: Product[] | [] = []
  if (lists.length > 0 && category !== "") {
    newLists = filter(lists, (item: Product) => {
      const categories = get(item, "categories", [])
      let isReturn = false
      if (categories.length > 0) {
        const foundCatItem = filter(categories, (catItem: Category) => catItem.slug === category)
        isReturn = foundCatItem.length > 0
      }
      return isReturn
    })
  }
  return newLists
}

export function getTagColor(category: string) {
  let color = "grey-500"
  menu.forEach((item: Menu) => {
    (item.groups)?.forEach((groupItem: MenuGroup) => {
      if (includes(groupItem.url, category)) {
        color = groupItem.color
      }
    })
  })
  return color
}

export function filterCategory() {
  const categoriesEnv = process.env.NEXT_PUBLIC_PRODUCT_CATEGORY as string
  const categories: string[] = categoriesEnv.split(",")
  return categories
}

export function covertAttributeFmtToHtml(attrFmt: string) {
  const replaceSpace = attrFmt.replaceAll("|", " ")
  const attr = replaceSpace.split("\\n")
  return attr
}

export function covertAttributeFmtToHtmlKeyValue(attrFmt: string) {
  const attrSplit = attrFmt.split("\\n")
  const attr = attrSplit.map(item => {
    const keyValueSplit = item.split("|")
    return {
      key: get(keyValueSplit, "0", ""),
      value: get(keyValueSplit, "1", "")
    }
  })
  return attr
}

export function convertHtml(html: string) {
  return html.replaceAll("\\n", "")
}