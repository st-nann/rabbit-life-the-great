import Carousel from "@/components/carousel"
import { banner } from "@/config/home"

export const HomeBanner = () => {
  return (
    <div className="flex flex-nowrap flex-row items-center">
      <div className="w-2/4">
        <Carousel lists={banner} />
      </div>
      <div className="w-2/4 p-8">
        <div>
          <span className="text-4xl font-bold">ให้</span>
          <span className="text-4xl font-bold text-primary"> แรบบิท ไลฟ์</span>
        </div>
        <p className="text-4xl font-bold">ช่วยดูแลคุณ</p>
        <p className="text-xl font-bold text-gray-700 mt-6">
          มองหาแบบผลิตภัณฑ์ที่ใช่ แบบประกันที่ให้ความคุ้มครอง 
          <br/>ครบตอบโจทย์ทั้งคุณและครอบครัวได้ที่นี่
        </p>
      </div>
    </div>
  )
}