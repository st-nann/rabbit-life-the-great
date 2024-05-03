import { Product } from "@/types/product"
import { addClassToFirstElementChild } from "@/utils/helper"
import { convertHtml } from "@/utils/products"
import get from "lodash/get"
import { useEffect } from "react"

export const ProductRemark = ({ product }: { product: Product }) => {
  const htmlDisclaimer = get(product, "html_disclaimer", "")
  const htmlDisclaimerReplace = convertHtml(htmlDisclaimer)

  useEffect(() => {
    addStyles()
  }, [])

  const addStyles = () => {
    addClassToFirstElementChild("list-custom", "list-disc")
  }

  return (
    <div className="flex flex-wrap flex-row p-8 max-w-screen-xl w-full text-sm text-gray-500">
     <div id="list-custom" dangerouslySetInnerHTML={{ __html: htmlDisclaimerReplace }} />
    </div>
  )
} 