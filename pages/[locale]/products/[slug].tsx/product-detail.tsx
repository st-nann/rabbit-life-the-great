import find from "lodash/find"
import DefaultLayout from "@/layouts/default"
import { useSelector } from "react-redux"
import { useRouter } from "next/router"
import { RootState } from "@/redux/store"
import { get } from "lodash"
import { Product } from "@/types/product"
import { ProductDetailBanner } from "@/layouts/sections/product-detail-banner"
import { ProductDetailDescription } from "@/layouts/sections/product-detail-description"
import { ProductLists } from "@/layouts/sections/product-lists"

export default function ProductDetailPage() {
  const data = useSelector((state: RootState) => state.rabbitLifeSlice.data)
  const router = useRouter()
  const { query } = router
  const slug: string = get(query, "slug", "") as string
  const products: Product[] = get(data, "products", [])
  const product = find(products, (item: Product) => item.slug === slug)
  const title = "ผลิตภัณฑ์ที่คุณอาจสนใจ"
  const productRelated = get(product, "product_related", []) as Product[]
  console.log('product:', product);
  
	return (
		<DefaultLayout>
			<section className="flex flex-col items-center justify-center">
        <ProductDetailBanner />
        <ProductDetailDescription />
        <ProductLists title={title} lists={productRelated} />
      </section>
		</DefaultLayout>
	)
}