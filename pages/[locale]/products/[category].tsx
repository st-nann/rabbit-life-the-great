import DefaultLayout from "@/layouts/default"
import { ProductLists } from "@/layouts/sections/product-lists"
import { useRouter } from "next/router"
import get from "lodash/get"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { getProductByCategory } from "@/utils/products"
import { Product } from "@/types/product"
import { menu } from "@/config/menu"
import filter from "lodash/filter"
import { Menu } from "@/types/menu"
import find from "lodash/find"
import { MenuGroup } from "@/types/menu"
import includes from "lodash/includes"

export default function ProductListsPage() {
  const data = useSelector((state: RootState) => state.rabbitLifeSlice.data)
  const router = useRouter()
  const { query } = router
  const category: string = get(query, "category", "") as string
  const products: Product[] = get(data, "products", [])
  const productsByType = getProductByCategory(products, category)
  const menuLists = filter(menu, (item: Menu) => item.id === 1)
  const groups = get(menuLists, "0.groups", [])
  const groupItem = find(groups, (item: MenuGroup) => includes(item.url, category))
  const title = get(groupItem, "text", "")
  
	return (
		<DefaultLayout>
			<section className="flex flex-col items-center justify-center gap-10">
        <ProductLists title={title} lists={productsByType} />
      </section>
		</DefaultLayout>
	)
}
