import { Button } from "@nextui-org/react"


export const ProductDetailBanner = () => {
  const handleGotoDetail = (url: string) => {
    window.location.href = url
  }
  
  return (
    <div className="w-full flex flex-wrap flex-col-reverse mds:flex-row items-center justify-center gap-10 p-8 max-w-screen-xl">
      <div className="flex flex-col md:flex-nowrap md:w-auto h-full">
        <div className="py-4 h-full">
          <div className="flex">
            <p className="flex text-sm font-normal text-white px-5 py-1 rounded-full bg-primary">ประกันคุ้มครองชีวิต</p>
          </div>
          <div>
            <p className="text-black text-3xl font-medium py-2">High Protect 3/3</p>
            <div className="flex flex-col">
              <span className="text-gray-600 font-light">"ปกป้อง" อนาคตของคนที่คุณรัก</span> 
              <span className="text-gray-600 font-light">"ด้วยแผนประกันชีวิตคุ้มครองสูง High Protect 3/3</span>
            </div>
          </div> 
        </div>
        <div className="flex flex-col gap-3">
          <Button
            className="text-base font-normal bg-primary text-white rounded-full text-center w-full"
            onClick={ () => handleGotoDetail(item.url) }
            fullWidth
            >
            สนใจผลิตภัณฑ์นี้ คลิกเลย!
          </Button> 
          <Button
          className="w-full"
          onClick={ () => handleGotoDetail(item.url) }
          variant="bordered"
          color="primary"
          radius="full"
          fullWidth
          >
            <div className="w-3.5">
              <img src="https://www.rabbitlife.co.th/images/home/icon-download.png"></img>
            </div>
          ดาวน์โหลดโบรชัวร์
          </Button> 
        </div>
      </div>
      <div className="flex flex-col flex-wrap bg-white p-2 rounded-lg shadow-xl md:max-w-3xl">
        <img
          className="w-full h-auto"
          src="https://rblwebstorageprd.blob.core.windows.net/productfiles/product_image_large/high-protect-3-3.jpg"
          alt="banner-detail-product"
        />
      </div>
    </div>
  )
}