import { Button } from "@nextui-org/react"
import { IoIosCheckmarkCircleOutline } from "react-icons/io"

export const SuccessForm = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="flex flex-wrap flex-row justify-center content-center bg-slate-100 p-8 w-full gap-10 max-w-screen-xl rounded-xl">
      <div className="w-auto text-center">
        <IoIosCheckmarkCircleOutline className="text-emerald-500 text-7xl w-full"/>
        <p className="text-bold text-2xl my-3">ส่งข้อมูลเรียบร้อยแล้ว</p>
        <p className="text-gray-500 text-sm">ขอบคุณสำหรับข้อมูล</p>
        <p className="text-gray-500 text-sm">บริษัทจะติดต่อคุณกลับโดยเร็วที่สุด</p>
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