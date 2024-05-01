import { Product, Tag } from "@/types/product"
import { covertAttributeFmtToHtmlKeyValue } from "@/utils/products"
import { Divider, Image } from "@nextui-org/react"
import get from "lodash/get"

export const ProductDetailDescription = ({ product }: { product: Product }) => {
  const attributeFmt = get(product, "attributes_fmt", "")
  const attributeFmtArr = covertAttributeFmtToHtmlKeyValue(attributeFmt)
  
  return (
    <div className="w-full flex flex-nowrap flex-row p-8 justify-center max-w-screen-xl gap-4 flex-col-custom">
      <div className="w-auto">
        <p 
          className="title-size font-bold text-primary"
          dangerouslySetInnerHTML={{__html: product.html_body_title}}
        >
        </p>
        <p 
          className="text-lg font-medium text-gray-500"
          dangerouslySetInnerHTML={{__html: product.html_body_description}}
        >
        </p>
        <ul className="flex flex-wrap flex-row gap-2 py-4">
          {(product.tags as Tag[]).map((tag: Tag) => {
            return (
              <li className="text-sm font-normal bg-orange-50 text-primary p-2 rounded-lg">{tag.tag_name_th}</li>
            )
          })}
        </ul>
        <div className="flex flex-row flex-wrap gap-10">
          {attributeFmtArr.map((item: { [key: string]: string }) => {
            return (
              <div>
                <p className="text-gray-500">{item.key}</p>
                <p className="font-bold text-black">{item.value}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div>
        <Divider 
          className="bg-primary display-custom"
          orientation="vertical" 
        />
      </div>
      <div className="width-description">
        <div className="flex flex-col flex-wrap gap-10">
          <div className="flex flex-row gap-4">
            <Image
              width={60}
              src="/icons/icon-cash.png"
              alt="icon-cash"
            />
            <div>
              <p className="text-primary text-3xl">{product.benefit_1_header}</p>
              <p className="font-bold text-black text-lg font-medium text-gray-500">{product.benefit_1_body_html}</p>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <Image
              width={60}
              src="/icons/icon-agreement.png"
              alt="icon-agreement"
            />
            <div>
              <p className="text-primary text-3xl">{product.benefit_2_header}</p>
              <p className="font-bold text-black text-lg font-medium text-gray-500">{product.benefit_2_body_html}</p>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <Image
              width={60}
              src="/icons/icon-less-pay.png"
              alt="icon-less-pay"
            />
            <div>
              <p className="text-primary text-3xl">{product.benefit_3_header}</p>
              <p className="font-bold text-black text-lg font-medium text-gray-500">{product.benefit_3_body_html}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}