import { Link } from "@nextui-org/link"
import { Image } from "@nextui-org/react"
import { FaFacebookSquare } from "react-icons/fa"
import { FaLine } from "react-icons/fa"
import { menu } from "@/config/menu"
import { Menu, MenuGroup } from "@/types/menu"
import filter from "lodash/filter"
import React from "react"

export const Footer = () => {
  const productMenu = filter(menu, (item: Menu) => item.id === 1)
  const aboutUsMenu = filter(menu, (item: Menu) => item.id === 2)
  return (
    <footer 
      id="footer" 
      className="w-full flex flex-wrap flex-col md:flex-row justify-around bg-slate-100 p-16 md:px-0" 
    >
      <div className="mb-10 md:mb-0">
        <div>
          <Image
            width={200}
            alt="NextUI hero Image"
            src="/rabbitlife-logo.png"
          />
        </div>
        <div className="py-2">
          <p className="text-primary">บริษัท แรบบิท ประกันชีวิต จำกัด (มหาชน)</p>
          <p className="text-sm">เลขที่ 175 อาคารสาธรซิตี้ ทาวเวอร์</p>
          <p className="text-sm">ชั้น 1/1 และ 2/1 ถนนสาทรใต้ แขวงทุ่งมหาเมฆ</p>
          <p className="text-sm">เขตสาทร กรุงเทพมหานคร 10120</p>
        </div>
        <div className="py-2">
        <div className="text-sm">
            <span>หมายเลขโทรศัพท์ : </span>
            <a className="text-primary" href="tel:+026483600">02-648-3600</a>
          </div>
          <div className="text-sm">
            <span>หมายเลขโทรสาร : </span>
            <a className="text-primary" href="tel:+026483555">02-648-3555</a>
          </div>
          <div className="text-sm">
            <span>Email : </span>
            <a className="text-primary" href="mailto:cs@rabbitlife.co.th">cs@rabbitlife.co.th</a>
          </div>
          <div className="text-sm">
            <span>อุบัติเหตุฉุกเฉิน 24 ชั่วโมง : </span>
            <a className="text-primary" href="tel:+024947005">02-494-7005</a>
          </div>
        </div>
        <div className="py-2">
            <p className="text-primary">เวลาทำการ</p>
            <p className="text-sm">วันจันทร์ – วันศุกร์ เวลา 8.00 น. – 17.00 น.</p>
            <p className="text-sm">(เว้นวันหยุดราชการและวันหยุดประจำปี)</p>
        </div>
        <div className="flex flex-wrap flex-row gap-2">
          <a href="https://www.facebook.com/RabbitLifeInsurance" target="_blank">
            <FaFacebookSquare size={36} color="#FB5E3F" />
          </a>
          <a href="https://lin.ee/vNHYbDF" target="_blank">
            <FaLine size={36} color="#FB5E3F" />
          </a>
        </div>
      </div>
      <div className="mb-10 md:mb-0">
        { productMenu.map((item: Menu, index: number) => {
            return (
              <React.Fragment key={`footer-fragment-${item.text}-${index}`}>
                <p className="text-gray-700 font-medium">{item.text}</p>
                { (item.groups as any).map((groupItem: MenuGroup, groupIndex: number) => {
                    return (
                      <div key={`footer-menu-link-${groupItem.text}-${groupIndex}`}>
                        <Link
                          href={groupItem.url}
                          color="foreground"
                          className="font-regular cursor-pointer text-gray-600 py-1.5"
                        >
                          {groupItem.text}
                        </Link>
                      </div>
                    ) 
                })}
              </React.Fragment>
            )
        } )}
      </div>
      <div className="mb-10 md:mb-0">
        { (aboutUsMenu as any).map((item: Menu, index: number) => {
          return (
            <div key={`footer-menu-link-${item.text}-${index}`}>
              <Link
                href={item.url}
                color="foreground"
                className="font-medium cursor-pointer text-gray-700 py-1.5"
              >
                {item.text}
              </Link>
            </div>
          ) 
        })}
      </div>
    </footer>
  )
}