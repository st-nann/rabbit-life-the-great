import { Product } from "@/types/product"
import { addClassToFirstElementChild } from "@/utils/helper"
import { convertHtmlDisclaimer } from "@/utils/products"
import get from "lodash/get"
import { useEffect } from "react"

export const ProductRemark = ({ product }: { product: Product }) => {
/*
html_disclaimer check is ""  -> not display แปลงhtml กับ check ค่าว่าง
*/
  const htmlDisclaimer = get(product, "html_disclaimer", "")
  const htmlDisclaimerReplace = convertHtmlDisclaimer(htmlDisclaimer)

  useEffect(() => {
    addStyles()
  }, [])

  const addStyles = () => {
    addClassToFirstElementChild("list-custom", "list-disc")
  }

  return (
    <div className="flex flex-wrap flex-row p-8 max-w-screen-xl">
     <div id="list-custom" dangerouslySetInnerHTML={{ __html: htmlDisclaimerReplace }} />
    </div>
  )
} 