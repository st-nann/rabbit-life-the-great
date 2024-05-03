import find from "lodash/find"
import DefaultLayout from "@/layouts/default"
import { useSelector } from "react-redux"
import { useRouter } from "next/router"
import { RootState } from "@/redux/store"
import { get } from "lodash"
import { Faqs, Product } from "@/types/product"
import { ProductDetailBanner } from "@/layouts/sections/product-detail-banner"
import { ProductDetailDescription } from "@/layouts/sections/product-detail-description"
import { ProductRemark } from "@/layouts/sections/product-remark"
import { ProductBenefitCondition } from "@/layouts/sections/product-benefit-condition"
import { ProductLists } from "@/layouts/sections/product-lists"
import { Faq } from "@/layouts/sections/faq"

export default function ProductDetailPage() {
  const data = useSelector((state: RootState) => state.rabbitLifeSlice.data)
  const router = useRouter()
  const { query } = router
  const slug: string = get(query, "slug", "") as string
  const products: Product[] = get(data, "products", [])
  const product = find(products, (item: Product) => item.slug === slug) as Product
  const title = "ผลิตภัณฑ์ที่คุณอาจสนใจ"
  const productRelated = get(product, "product_related", []) as Product[]
  const faqs = get(product, "faqs", []) as Faqs[]
  
	return (
		<DefaultLayout>
			{ product &&
        <section className="flex flex-col items-center justify-center gap-10">
          <ProductDetailBanner product={product} />
          <ProductDetailDescription product={product} />
          { faqs.length > 0 && <Faq faqs={faqs} /> }
          <ProductRemark product={product} />
          <ProductBenefitCondition product={product} />
          <ProductLists title={title} lists={productRelated} />
        </section>
      }
		</DefaultLayout>
	)
}