import { Product } from "@/types/product"
import { convertHtmlDisclaimer } from "@/utils/products"
import get from "lodash/get"

export const ProductRemark = ({ product }: { product: Product }) => {
/*
html_disclaimer check is ""  -> not display แปลงhtml กับ check ค่าว่าง
*/
  const htmlDisclaimer = get(product, "html_disclaimer", "")
  const htmlDisclaimerReplace = convertHtmlDisclaimer(htmlDisclaimer)

  return (
    <div className="flex flex-wrap flex-row p-8 max-w-screen-xl">
     <div dangerouslySetInnerHTML={{ __html: htmlDisclaimerReplace }} />
    </div>
  )
} 