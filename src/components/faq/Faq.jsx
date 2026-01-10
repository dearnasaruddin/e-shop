import React, { useState } from 'react'
import Container from '../commonLayouts/Container'
import AccordionItem from './AccordionItem'
import Button from '../Button'

const Faq = () => {

  let [openAccordion, setOpenAccordion] = useState(3)

  const accordionData = [
    {
      title: 'What payment methods do you accept?',
      content: 'We accept a wide range of payment methods for your convenience, including major credit cards such as Visa, MasterCard, American Express, and Discover. We also support payments through PayPal, Apple Pay, Google Pay, and secure bank transfers. All transactions are encrypted and processed through trusted payment gateways to ensure your safety.'
    },
    {
      title: 'How long does the product shipping take?',
      content: 'Shipping times may vary depending on your location and the shipping method you choose at checkout. Typically, orders are processed within 1-2 business days and delivered within 5-7 business days for standard shipping. For expedited options, you may receive your order even sooner. You’ll receive a confirmation email once your item ships.'
    },
    {
      title: 'Do you offer international shipping?',
      content: 'Yes, we proudly offer international shipping to most countries around the world. Shipping costs and delivery times may vary by destination and will be calculated during checkout. Please note that international orders may be subject to customs fees or import duties, which are the responsibility of the recipient.'
    },
    {
      title: 'Can I track my order?',
      content: 'Absolutely! Once your order has been shipped, we\'ll send you a tracking number and a link to our carrier\'s website where you can track your package in real-time. You can also check the status of your order by logging into your account and viewing your order history.'
    }
  ]

  return (
    <div className='bg-[#F4F4F4] pt-8 md:pt-16 pb-12 md:pb-17.5'>
      <Container>
        <div className='flex md:gap-x-28 gap-y-12 md:gap-y-0 max-md:flex-col-reverse'>


          <div className='md:w-231.5 flex flex-col gap-y-4 md:gap-y-6'>
            {accordionData.map((item, index) => (
              <AccordionItem key={index} title={item.title} content={item.content} onToggle={() => setOpenAccordion(openAccordion === index ? null : index)} isOpen={openAccordion === index} />
            ))}
          </div>

          <div className='grow flex flex-col justify-between'>
            <div className='ml-auto hidden md:block'>
              <img src="images/dotsShape.png" alt="dotsShape.png" />
            </div>

            <div >
              <h2 className='md:max-w-76.5 font-poppins font-semibold text-3xl md:text-4xl leading-11.5 text-secondary'>Frequently Asked Questions</h2>
              <p className='max-w-68 md:max-w-98 font-montserrat font-normal text-base md:text-xl leading-7 md:leading-7.5 text-secondary mt-3 md:mt-6 mb-6 md:mb-16'>Questions that get asked the most by our clients. Get any burning questions?</p>
              <Button content='Ask A Question' />
            </div>
          </div>

        </div>
      </Container>
    </div>
  )
}

export default Faq