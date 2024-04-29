import { Card, Image, Button } from "@nextui-org/react"

export const ProductCard = () => {
  return (
    <div className="flex flex-nowrap flex-col md:flex-row items-start sm:items-center justify-center max-w-screen-xl p-8">
      <div className="flex flex-col gap-4">
        {/* <p className="text-xl font-medium">ผลิตภัณฑ์ที่เหมาะกับคุณ</p> */}
        <div className="flex flex-wrap flex-row justify-center gap-4 p-8">
          <div className="flex flex-col items-start items-center drop-shadow-lg bg-white rounded-2xl max-w-xs">
            <div className="relative p-3 w-full">
              <a href="#">
                <Image
                  isZoomed
                  width={359}
                  height={202}
                  alt="Health Smile"
                  src="https://rblwebstorageprd.blob.core.windows.net/productfiles/product_image_small/health-smile.jpg"
                />
              </a>
              <div className="flex flex-col gap-1 absolute bottom-3 ml-2 mb-3 z-50">
                <p className="flex text-sm font-normal text-white bg-sky-400 px-5 py-1 rounded-full">ประกันสุขภาพ</p>
                <p className="flex text-sm font-normal text-white bg-amber-600 px-5 py-1 rounded-full">ประกันออนไลน์</p>
              </div>
            </div>
            <div className="min-h-32 px-3 pb-3 w-full">
              <p className="text-lg font-medium">
                Health Smile
              </p>
              <p className="text-base font-normal text-gray-500 line-clamp-3">
                Health Smile ประกันสุขภาพเหมาจ่ายสบายใจ ยิ้มได้เต็มที่
              </p>
            </div>
            <div className="w-full">
              <div className="border-t-1 mx-2">
                <ul className="p-4 list-disc list-inside">
                  <li className="text-sm font-normal">ระยะเวลาคุ้มครอง 1 ปี</li>
                  <li className="text-sm font-normal">ระยะเวลาชำระเบี้ยประกันภัย 1 ปี</li>
                  <li className="text-sm font-normal">อายุรับประกันภัย 6 - 75 ปี</li>
                  <li className="text-sm font-normal">ทุนประกันภัยขั้นต่ำ 500,000 บาท</li>
                </ul>
              </div>
            </div>
            <div className="w-full">
              <div className="border-t-1 mx-2 min-h-52">
                <ul className="p-4 flex flex-wrap flex-row gap-2">
                  <li className="text-sm font-normal bg-orange-50 text-primary p-2 rounded-lg">คุ้มครองโรคร้ายแรง</li>
                  <li className="text-sm font-normal bg-orange-50 text-primary p-2 rounded-lg">ลดหย่อนภาษีได้</li>
                  <li className="text-sm font-normal bg-orange-50 text-primary p-2 rounded-lg">ค่ารักษาพยาบาล</li>
                  <li className="text-sm font-normal bg-orange-50 text-primary p-2 rounded-lg">อายุเยอะก็ทำได้ (60+)</li>
                </ul>
              </div>
            </div>
            <div className="w-full">
              <div className="mx-3 mb-3 text-base font-normal bg-primary text-white rounded-full bottom-0">
                <Button className="text-base font-normal bg-primary text-white rounded-full text-center w-full">
                  อ่านรายละเอียด
                </Button>  
              </div>  
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}