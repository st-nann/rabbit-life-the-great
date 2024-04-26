import DefaultLayout from "@/layouts/default"
import { HomeBanner } from "@/layouts/sections/home-banner"
import { HomeButton } from "@/layouts/sections/home-button"
import { Faq } from "@/layouts/sections/faq"

export default function IndexPage() {
	return (
		<DefaultLayout>
			<section className="flex flex-col items-center justify-center gap-10">
				<HomeBanner />
				<HomeButton />
				<Faq />
      </section>
		</DefaultLayout>
	)
}
