import { Navbar } from "@/components/navbar"
import { Head } from "@/layouts/head"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "@/redux/api/rabbit-life"
import { RootState, AppDispatch } from '@/redux/store'
import { useEffect } from "react"
import { Footer } from "@/components/footer"

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
			<main className="container mx-auto max-w-7xl flex-grow">
				{children}
			</main>
      <Footer />
		</div>
	)
}
