import { Category, Product, Tag } from "@/types/product";
import { covertAttributeFmtToHtml, filterCategory, getTagColor } from "@/utils/products";
import { Card, Image, Button, CardBody, CardFooter } from "@nextui-org/react"


export const ProductCard = ({ item }: { item: Product }) => {
  const handleGotoDetail = (url: string) => {
    window.location.href = url
  }
  return (
    <Card
      className="flex flex-col drop-shadow-lg bg-white rounded-2xl text-start justify-strength"
      onPress={() => handleGotoDetail(item.url)}
      isPressable
      fullWidth
    >
      <CardBody className="overflow-visible p-3">
        <div className="relative">
          <Image
            isZoomed
            alt={item.product_name_en}
            src={item.image_name_small}
            className="w-full"
          />
          
          <div className="flex flex-col gap-1 absolute bottom-3 ml-2 z-50">
            {(item.categories as any).map((categoryItem: Category, categoryIndex: number) => {
              return(
                filterCategory().includes(categoryItem.slug) &&
                  <p
                    key={`product-category-${categoryIndex}`}
                    className={`flex text-sm font-normal text-white px-5 py-1 rounded-full ${getTagColor(categoryItem.slug)}`}
                  >
                    { categoryItem.pcategory_name }
                  </p>
              )
            })}              
          </div>
        </div>
        <div className="py-3 min-h-32 max-h-32">
          <p 
            className="text-lg font-medium">
            {item.product_name_en}
          </p>
          <p 
            className="text-base font-normal text-gray-500 line-clamp-3 max-w-screen-xs"
            dangerouslySetInnerHTML={{__html: item.html_header_description }}
          ></p>
        </div>
        <div className="border-t-1 min-h-48 max-h-48  md:min-h-32 md:max-h-32">
          <ul className="p-4 list-disc list-inside">
            {covertAttributeFmtToHtml(item.attributes_fmt).map((attr: string) => {
              return (
                <li key={`product-attr-${attr}`} className="text-sm font-normal">{attr}</li>
              )
            })}
          </ul>
        </div>
        <div className="border-t-1 min-h-60 max-h-60 md:min-h-32 md:max-h-32">
          <ul className="p-4 flex flex-wrap flex-row gap-2">
            {(item.tags).map((tag: Tag, tagIndex: number) => {
              return (
                <li key={`product-tag-${tagIndex}`} className="text-sm font-normal bg-orange-50 text-primary p-2 rounded-lg">{tag.tag_name_th}</li>
              )
            })}
          </ul>
        </div>
      </CardBody>
      <CardFooter className="text-small justify-between">
        <Button
          className="text-base font-normal bg-primary text-white rounded-full text-center w-full"
          onClick={ () => handleGotoDetail(item.url) }
          fullWidth
        >
          อ่านรายละเอียด
        </Button>  
      </CardFooter>
    </Card>
  )
}