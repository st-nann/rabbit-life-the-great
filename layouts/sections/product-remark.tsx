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
<<<<<<< HEAD
    <div className="p-8 width-description max-w-screen-xl">
      <ul className="list-inside list-style">
        <li className="text-sm font-normal text-gray-500"
        dangerouslySetInnerHTML={{__html: product.html_disclaimer}}
        >
        </li>
      </ul>
=======
    <div className="flex flex-wrap flex-row p-8 max-w-screen-xl">
     <div dangerouslySetInnerHTML={{ __html: htmlDisclaimerReplace }} />
>>>>>>> 51e50779a94bdd9efdf40817483fd5d34c754158
    </div>
  )
} 