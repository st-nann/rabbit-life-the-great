import DefaultLayout from "@/layouts/default"
import { HomeBanner } from "@/layouts/sections/home-banner"
import { HomeButton } from "@/layouts/sections/home-button"
import { Faq } from "@/layouts/sections/faq"
import { ProductLists } from "@/layouts/sections/product-lists"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { Product } from "@/types/product"

export default function IndexPage() {
	const title = "ผลิตภัณฑ์ที่เหมาะกับคุณ"
	const suggestions = useSelector((state: RootState) => state.rabbitLifeSlice.suggestions) as Product[]
	return (
		<DefaultLayout>
			<section className="flex flex-col items-center justify-center gap-10">
				<HomeBanner />
				<HomeButton />
				<ProductLists title={title} lists={suggestions} />
				<Faq />
      </section>
		</DefaultLayout>
	)
}
