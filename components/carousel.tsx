import { Button } from '@nextui-org/react'
import { useState } from 'react'
import { Image } from "@nextui-org/react"
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'

const Carousel = ({ lists }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === lists.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? lists.length - 1 : prevIndex - 1
    )
  }

  // const goToImage = (index) => {
  //   setCurrentImageIndex(index)
  // }

  return (
    <div className="relative bg-white p-8 rounded-lg">
      <div className="overflow-hidden relative rounded-lg pb-4">
        <Image
          className="w-full h-auto"
          src={lists[currentImageIndex].image}
          alt={`Slide ${currentImageIndex + 1}`}
        />
      </div>
      <div className="flex flex-row flex-wrap content-center content-stretch">
        <div className="bottom-0 xs:w-full sm:flex-1 items-center px-2">
          <p className="text-black xs:text-xl sm:text-2xl font-medium">{lists[currentImageIndex].title}</p>
          <p className="text-black font-light">{lists[currentImageIndex].description}</p>
        </div>
        <div className="bottom-0 right-0 flex xs:w-full justify-end items-center ps-2 py-2">
          <Button
            className="bg-gray-100 text-black mr-1 rounded-full"
            endContent={<IoIosArrowBack />}
            onClick={prevImage}
            isIconOnly
          />
          <Button
            className="bg-gray-100 text-black ml-2 rounded-full"
            endContent={<IoIosArrowForward />}
            onClick={nextImage}
            isIconOnly
          />
        </div>
      </div>
      {/* <div className="bottom-0 left-0 w-full flex justify-center space-x-2 p-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-4 w-4 rounded-full ${
              index === currentImageIndex ? 'bg-gray-700' : 'bg-gray-400'
            }`}
            onClick={() => goToImage(index)}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Carousel
