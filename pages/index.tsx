import DefaultLayout from "@/layouts/default"
import { HomeBanner } from "@/layouts/sections/home-banner"
import { HomeButton } from "@/layouts/sections/home-button"

export default function IndexPage() {
	return (
		<DefaultLayout>
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<HomeBanner />
				<HomeButton />
      </section>
		</DefaultLayout>
	)
}
