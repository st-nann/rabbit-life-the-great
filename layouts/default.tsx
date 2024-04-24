import { Navbar } from "@/components/navbar"
import { Link } from "@nextui-org/link"
import { Head } from "@/layouts/head"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "@/redux/api/rabbit-life"
import { RootState, AppDispatch } from '@/redux/store'
import { useEffect } from "react"
import { AppProps } from "next/app"

export default function DefaultLayout({
	children,
}: {
	children: React.ReactNode
}) {
  const dispatch = useDispatch<AppDispatch>()
//   const data = useSelector((state: RootState) => state.rabbitLifeSlice)
//   const suggestions = useSelector((state: RootState) => state.rabbitLifeSlice.suggestions)

  const fetchProductLists = () => {
    dispatch(fetchProducts({}))
  }

  useEffect(() => {
    fetchProductLists()
  }, [])

	return (
		<div className="relative flex flex-col h-screen">
			<Head />
			<Navbar />
			<main className="container mx-auto max-w-7xl px-6 flex-grow">
				{children}
			</main>
			<footer className="w-full flex items-center justify-center py-3">
				<Link
					isExternal
					className="flex items-center gap-1 text-current"
					href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
					title="nextui.org homepage"
				>
					<span className="text-default-600">Powered by</span>
					<p className="text-primary">NextUI</p>
				</Link>
			</footer>
		</div>
	);
}
