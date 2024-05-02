import { Product } from "@/types/product"

export const ProductRemark = ({ product }: { product: Product }) => {
/*
html_disclaimer check is ""  -> not display แปลงhtml กับ check ค่าว่าง
*/
  return (
    <div className="p-8 width-description max-w-screen-xl">
      <ul className="list-inside list-style">
        <li className="text-sm font-normal text-gray-500"
        dangerouslySetInnerHTML={{__html: product.html_disclaimer}}
        >
        </li>
      </ul>
    </div>
  )
} 