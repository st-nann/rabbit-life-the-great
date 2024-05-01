import { Category, Product } from "@/types/product"
import { getTagColor } from "@/utils/products"
import { Button, Chip, Image } from "@nextui-org/react"


export const ProductDetailBanner = ({ product }: { product: Product }) => {
  const handleGotoCalculate = () => {
    const calculateSection = document.getElementById("calculate-section");
    if (calculateSection) {
      calculateSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleGotoDetail = (url: string) => {
    window.open(url)
  }
  
  return (
    <div className="w-full flex flex-row flex-wrap items-center justify-center gap-10 p-8 max-w-screen-xl flex-col-reverse-custom">
      <div className="w-full-custom h-full">
        <div className="flex flex-col flex-wrap w-auto sm:flex-nowrap md:flex-nowrap gap-3">
          <div className="flex">
            {(product.categories as Category[]).map((category: Category) => {
              return (
                <Chip className={`text-white ${getTagColor(category.slug)}`}> {category.pcategory_name} </Chip>
              )
            })}
          </div>
          <p className="text-black text-3xl font-medium py-2">{product.product_name_en}</p>
          <div className="flex flex-col">
            <span
              className="text-gray-600 font-light"
              dangerouslySetInnerHTML={{__html: product.html_header_description }}
            />
          </div>
          <Button
            className="text-base font-normal bg-primary text-white rounded-full text-center w-full"
            onClick={ () => handleGotoCalculate() }
            fullWidth
            >
            {product.call_to_action_button}
          </Button> 
          <Button
            className="w-full"
            onClick={ () => handleGotoDetail(product.download_file_name) }
            variant="bordered"
            color="primary"
            radius="full"
            fullWidth
            >
              <div className="w-3.5">
                <img src="https://www.rabbitlife.co.th/images/home/icon-download.png" />
              </div>
            {product.download_brochure_button}
          </Button> 
        </div>
      </div>
      <div className="p-2 rounded-lg shadow-xl md:max-w-3xl">
        <div className="flex flex-col flex-nowrap w-auto sm:flex-nowrap sm:w-auto md:flex-nowrap md:w-auto">
          <Image
            className="w-full h-auto"
            src={product.image_name_large}
            alt="banner-detail-product"
          />
        </div>
      </div>
    </div>
  )
}