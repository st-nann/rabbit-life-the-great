import { Product } from "@/types/product"
import { ProductCard } from "@/components/product-card"

export const ProductLists = ({ title, lists }: { title: string, lists: Product[] | void }) => {
  return (
    <div className="flex flex-wrap flex-row justify-center p-10 w-full">
      <div className="flex flex-wrap flex-col md:flex-row items-start sm:items-center gap-4 max-w-screen-xl">
        <div className="w-full">
          <p className="text-3xl font-medium text-primary">{title}</p>
        </div>
        <div className="w-full flex flex-row flex-wrap justify-between">
          {(lists as Product[]).map((item: Product) => {
            return (
              <div className="column-33 mb-10">
                <ProductCard item={item} />
              </div>
            )
          })}
        </div>
       </div>
    </div>
  )
}