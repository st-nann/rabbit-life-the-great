import { Divider, Listbox, ListboxItem } from "@nextui-org/react"

export const ProductDetailDescription = () => {
  return (
    <div className="w-full flex flex-wrap flex-row bg-white p-8 justify-center">
      <div className="flex flex-nowrap flex-col gap-4 md:flex-row items-start sm:items-start max-w-screen-xl">
        <div className="flex flex-col h-full width-description border-r-2">
          <div className="flex flex-col gap-4">
            <p className="title-size font-bold text-primary">High protect 3/3 คุ้มครองสูง 100%</p>
            <p className="text-lg font-medium text-gray-500">
              ใช้ชีวิตได้อย่างมั่นใจ ไร้ความกังวลใจ ด้วยการส่งมอบความรักให้ตัวเองและคนที่รัก เน้นคุ้มครองชีวิต
              <strong>คุ้มครองสูง 100% ทั้งกรณีเสียชีวิตและทุพพลภาพถาวรสิ้นเชิง</strong>
              รับเงินก้อนทันทีเมื่อครบกำหนดสัญญา ให้เลือกความคุ้มครองสุขภาพเพิ่มได้ เริ่มวางแผนอนาคตได้แล้วตั้งแต่วันนี้！
            </p>
          </div>
        </div>
        <Divider 
          className="bg-primary"
          orientation="vertical" 
        />
        <div>
          <p className="text-xl font-bold text-gray-700">
              ใช้ชีวิตได้อย่างมั่นใจ ไร้ความกังวลใจ ด้วยการส่งมอบความรักให้ตัวเองและคนที่รัก เน้นคุ้มครองชีวิต
              <strong>คุ้มครองสูง 100% ทั้งกรณีเสียชีวิตและทุพพลภาพถาวรสิ้นเชิง</strong>
              รับเงินก้อนทันทีเมื่อครบกำหนดสัญญา ให้เลือกความคุ้มครองสุขภาพเพิ่มได้ เริ่มวางแผนอนาคตได้แล้วตั้งแต่วันนี้！
          </p>
        </div>
        
      
      </div>
    </div>
  )
}