import { Product } from "@/types/product"
import { addClassToFirstElementChild } from "@/utils/helper"
import { convertHtml } from "@/utils/products"
import get from "lodash/get"
import { useEffect } from "react"

export const ProductBenefitCondition = ({ product }: { product: Product }) => {
  const htmlBenefit = get(product, "html_benefit_text", "")
  const htmlBenefitReplace = convertHtml(htmlBenefit)
  const htmlCondition = get(product, "html_condition", "")
  const htmlConditionReplace = convertHtml(htmlCondition)

  useEffect(() => {
    addStyles()
  }, [])

  const addStyles = () => {
    addClassToFirstElementChild("list-custom", "list-disc")
  }
  
  return (
    <div className="flex flex-wrap flex-row p-8 max-w-screen-xl w-full">
      { htmlBenefit !== "" && 
        <div className="flex flex-col gap-4">
          <div className="text-3xl font-medium text-primary">ผลประโยชน์และความคุ้มครอง</div>
          <div id="list-custom" dangerouslySetInnerHTML={{ __html: htmlBenefitReplace }} />
        </div>
      }
      { htmlCondition !== "" && 
        <div className="flex flex-col gap-4">
          <div className="text-3xl font-medium text-primary">เงื่อนไขประกัน</div>
          <div id="list-custom" dangerouslySetInnerHTML={{ __html: htmlConditionReplace }} />
        </div>
      }
    </div>
  )
} 



