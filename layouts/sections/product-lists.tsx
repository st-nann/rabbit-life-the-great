import { Product } from "@/types/product"
import { ProductCard } from "@/components/product-card"

export const ProductLists = ({ title, lists }: { title: string, lists: Product[] | void }) => {
  return (
    <div className="flex flex-wrap flex-row justify-center p-10 w-full">
      <div className="flex flex-wrap flex-row gap-4 max-w-screen-xl">
        <div className="w-full">
          <p className="text-3xl font-medium text-primary">{title}</p>
        </div>
        <div className="w-full">
          <div className="flex flex-row flex-wrap gap-4">
            {(lists as Product[]).map((item: Product) => {
              return (
                <ProductCard item={item} />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}