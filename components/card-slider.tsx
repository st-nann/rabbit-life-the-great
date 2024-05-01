import { useEffect, useState } from "react"
import { Button } from "@nextui-org/react"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { Product } from "@/types/product"
import { ProductCard } from "@/components/product-card"
import { calculateItemPerPageSlide } from "@/utils/helper"
import isUndefined from "lodash/isUndefined"

const CardSlider = ({ lists }: { lists: Product[] }) => {
  const [itemPerPage, setItemPerPage] = useState(3)
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [startIndex, setStartIndex] = useState(0)
  const [endIndex, setEndIndex] = useState(0)
  const [currentCards, setCurrentCards] = useState([] as Product[])

  useEffect(() => {
    window.addEventListener("resize", getItemPerPage)
  }, [])

  const getItemPerPage = () => {
    const count = calculateItemPerPageSlide()
    setItemPerPage(count)
  }

  useEffect(() => {
    if (lists.length > 0) {
      getInitialDate()
    }
  }, [lists])

  useEffect(() => {
    if (lists.length > 0) {
      getInitialDate()
    }
  }, [itemPerPage])

  const getInitialDate = () => {
    setTotalPagesValue()
    setStartIndexValue()
    setEndIndexValue()
    setCurrentCardsValue()
  }

  const setTotalPagesValue = () => {
    setTotalPages(Math.ceil((lists.length / itemPerPage)))
  }

  useEffect(() => {
    if (lists.length > 0) {
      setStartIndexValue()
    }
  }, [currentPage, itemPerPage])

  const setStartIndexValue = () => {
    setStartIndex(currentPage * itemPerPage)
  }

  useEffect(() => {
    if (lists.length > 0) {
      setEndIndexValue()
    }
  }, [startIndex, itemPerPage])

  const setEndIndexValue = () => {
    setEndIndex(startIndex + itemPerPage)
  }

  useEffect(() => {
    if (lists.length > 0) {
      setCurrentCardsValue()
    }
  }, [startIndex, endIndex, itemPerPage])

  const setCurrentCardsValue = () => {
    setCurrentCards(lists.slice(startIndex, endIndex))
  }

  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage === totalPages - 1 ? 0 : prevPage + 1))
  }

  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage === 0 ? totalPages - 1 : prevPage - 1))
  }

  return (
    <div className="relative">
      <div className="flex flex-nowrap flex-row justify-between mb-4 items-center gap-4">
        <div className="flex-initial w-14">
          <Button
            className="bg-gray-100 text-black mr-1 rounded-full"
            endContent={<IoIosArrowBack />}
            onClick={prevPage}
            isIconOnly
          />
        </div>
        <div className="flex-initial w-auto">
          <div className="flex flex-wrap flex-row gap-2 justify-center">
            {(currentCards as Product[]).map((card, index) => (
              <ProductCard key={`product-card-${index}`} item={card} />
            ))}
          </div>
        </div>
        <div className="flex-initial w-14">
          <Button
            className="bg-gray-100 text-black ml-2 rounded-full"
            endContent={<IoIosArrowForward />}
            onClick={nextPage}
            isIconOnly
          />
        </div>
      </div>
    </div>
  );
};

export default CardSlider
