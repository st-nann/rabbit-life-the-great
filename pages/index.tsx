import DefaultLayout from "@/layouts/default"
import { HomeBanner } from "@/layouts/sections/home-banner"
import { HomeButton } from "@/layouts/sections/home-button"
import { Faq } from "@/layouts/sections/faq"
import { ProductLists } from "@/layouts/sections/product-lists"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { Product, Faqs } from "@/types/product"
import { ContactUsForm } from "@/layouts/sections/contact-us-form"

export default function IndexPage() {
	const title = "ผลิตภัณฑ์ที่เหมาะกับคุณ"
	const suggestions = useSelector((state: RootState) => state.rabbitLifeSlice.suggestions) as Product[]
  const faqs = useSelector((state: RootState) => state.rabbitLifeSlice.faqs) as Faqs[]

	return (
		<DefaultLayout>
			<section className="flex flex-col items-center justify-center gap-10">
				<HomeBanner />
				<HomeButton />
				<ProductLists title={title} lists={suggestions} />
				<Faq faqs={faqs} />
				<ContactUsForm />
      </section>
		</DefaultLayout>
	)
}
