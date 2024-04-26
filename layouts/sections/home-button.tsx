import { menu } from "@/config/menu"
import { Menu, MenuGroup } from "@/types/menu"
import { Button, Link } from "@nextui-org/react"
import filter from "lodash/filter"

export const HomeButton = () => {
  const productMenu = filter(menu, (item: Menu) => item.id === 1)
  return (
    <div className="flex flex-wrap flex-row justify-center p-10 bg-slate-100 w-full">
      <div className="flex flex-nowrap flex-col md:flex-row items-start sm:items-center gap-4 max-w-screen-xl">
        <div className="w-1/4">
          <p className="text-xl font-medium">ผลิตภัณฑ์ทั้งหมด</p>
        </div>
        <div className="w-auto">
          <div className="flex flex-wrap flex-row gap-4">
            { productMenu.map((item: Menu, index: number) => {
              return (item.groups as any).map((groupItem: MenuGroup, groupIndex: number) => {
                return (
                  <Button
                    key={`product-btn-${groupIndex}`}
                    className={`w-1/4 text-white ${groupItem.color}`}
                    variant="flat"
                    fullWidth
                  > 
                    <Link href={groupItem.url} className="text-white">
                      <div className="icon-btn">
                        <img src={groupItem.icon} />
                      </div>
                      {groupItem.text}
                    </Link>
                  </Button> 
                )
              })
            })}
          </div>
        </div>
      </div>
    </div>
  )
}