import { Product } from "@/types/product"

export const ProductBenefitCondition = ({ product }: { product: Product }) => {
/*
html_benefit_text check is "" not display    หัวข้อ  -> เงืื่ิอนไขประกัน ผลปยและค.คุ้มครอง fix code
html_condition check is "" not display 
*/
  return (
    <div>
      <p className="text-3xl font-medium text-primary">ผลประโยชน์และความคุ้มครอง</p>
      <p className="text-lg font-normal text-gray-500">ผลประโยชน์และความคุ้มครอง</p>
    </div>
  )
} 