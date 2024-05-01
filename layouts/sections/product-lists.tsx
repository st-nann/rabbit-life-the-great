import { Product } from "@/types/product"
import { ProductCard } from "@/components/product-card"
import CardSlider from "@/components/card-slider"

export const ProductLists = ({ title, lists }: { title: string, lists: Product[] }) => {
  return (
    <div className="flex flex-wrap flex-row justify-center p-10 w-full">
      <div className="flex flex-wrap flex-row gap-4 max-w-screen-xl">
        <div className="w-full">
          <p className="text-3xl font-medium text-primary">{title}</p>
        </div>
        <div className="w-full">
          <CardSlider lists={lists} />
        </div>
      </div>
    </div>
  )
}