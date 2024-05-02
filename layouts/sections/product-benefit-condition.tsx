import { Product } from "@/types/product"

export const ProductBenefitCondition = ({ product }: { product: Product }) => {
/*
html_benefit_text check is "" not display    หัวข้อ  -> เงืื่ิอนไขประกัน ผลปยและค.คุ้มครอง fix code
html_condition check is "" not display 
*/
  return (
    <div className="p-8 width-description max-w-screen-xl">
      { product.html_benefit_text !== "" &&
        <p className="text-3xl font-medium text-primary">ผลประโยชน์และความคุ้มครอง</p>
      }
      <ul>
        <li className="text-lg font-normal text-gray-500"
        dangerouslySetInnerHTML={{__html: product.html_benefit_text}}
        >
        </li>
      </ul>

     
      { product.html_benefit_text !== "" &&
        <p className="text-3xl font-medium text-primary">เงื่อนไขประกัน</p>
      }
      <ul>
        <li className="text-lg font-normal text-gray-500"
        dangerouslySetInnerHTML={{__html: product.html_condition}}
        >
        </li>
      </ul>
    </div>
  )
} 



