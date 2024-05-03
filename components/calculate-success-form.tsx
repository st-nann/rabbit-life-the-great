import { convertCurrency } from "@/utils/helper"
import { Button } from "@nextui-org/react"
import { GiMoneyStack } from "react-icons/gi"

export const CalculateSuccessForm = ({ onClick, amount }: { onClick: () => void, amount: number }) => {
  return (
    <div className="flex flex-wrap flex-row justify-center content-center bg-slate-100 p-8 w-full gap-10 max-w-screen-xl rounded-xl">
      <div className="w-auto text-center">
        <GiMoneyStack className="text-emerald-500 text-7xl w-full" />
        <p className="text-gray-600 text-lg">คำนวณเบี้ยประกันตามความคุ้มครอง</p>
        <p className="text-bold text-3xl my-3">{ convertCurrency(amount) }</p>
        <p className="text-gray-500 text-sm">เบี้ยประกันข้างต้นเป็นการคำนวณโดยประมาณ</p>
        <p className="text-gray-500 text-sm">กรุณาฝากข้อมูล สำหรับให้พนักงานติดต่อ เพื่อคำนวณเบี้ยประกันฯที่แน่นอน</p>
        <Button
          className="my-5 px-16"
          color="primary"
          size="sm"
          radius="full"
          onClick={onClick}
        >
          ตกลง
        </Button>
      </div>
    </div>
  )
}
