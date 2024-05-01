import { Faqs } from "@/types/product"
import { Accordion, AccordionItem } from "@nextui-org/react"

export const Faq = ({ faqs }: { faqs: Faqs[] }) => {
  return (
    <div className="flex flex-nowrap flex-col items-center">
      <div>
        <p className="text-xl font-medium">คำถามที่พบบ่อย</p>
      </div>
      <div className="px-5">
        {
          faqs.length > 0
            ? faqs.map((item: Faqs) => {
                return (
                  <Accordion key={`faq-${item.faq_id}`} >
                    <AccordionItem
                      key={`faq-item-${item.faq_id}`} 
                      aria-label={`faq-${item.faq_id}`} 
                      title={item.faq_question}
                      isCompact
                      className="text-sm font-regular w-full"
                    >
                      <div className="accordion-description" dangerouslySetInnerHTML={{__html: item.faq_answer}} />
                    </AccordionItem>
                  </Accordion>
                )
              })
            : <></>
          }
      </div>
    </div>
  )
}