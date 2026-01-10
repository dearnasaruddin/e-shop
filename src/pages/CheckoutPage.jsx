import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/commonLayouts/Container'
import CheckoutInformation from '../components/checkout/CheckoutInformation'
import CheckoutShipping from '../components/checkout/CheckoutShipping'
import OrderSummary from '../components/checkout/OrderSummary'
import CheckoutPayment from '../components/checkout/CheckoutPayment'

const CheckoutPage = () => {

  let [activeOption, setActiveOption] = useState('information')

  return (
    <div>
      <Container>
        {/* ====== Path ====== */}
        <ul className='flex gap-x-9.5 font-montserrat font-normal text-base leading-6 mb-12 mt-16'>
          <li><Link className='relative after:absolute after:top-1/2 after:-right-4.5 after:-translate-y-1/2 after:w-[1px] after:h-4.5 after:bg-secondary' to={'/'}>Home</Link></li>
          <li><Link className='relative after:absolute after:top-1/2 after:-right-4.5 after:-translate-y-1/2 after:w-[1px] after:h-4.5 after:bg-secondary' to={'/cart'}>Cart</Link></li>
          <li><Link className='font-bold' to={'/checkout'}>Checkout</Link></li>
        </ul>
        <div className='mb-20'>
          <h1 className=' font-poppins font-bold text-[56px] leading-17 text-secondary text-center mb-9'>Checkout</h1>

          {/* ========== Checkout page Options ========== */}
          <div className='flex gap-x-16 items-center justify-center'>
            <div className='flex items-center gap-x-4'>
              {activeOption == 'information' &&
                <div className='size-12.5 flex justify-center items-center rounded-full bg-primary font-montserrat font-bold text-base leading-6 text-white'>01</div>
              }
              <h5 onClick={() => setActiveOption('information')} className={`font-poppins font-semibold text-2xl leading-7.5  mb-0.5 ${activeOption == 'information' ? 'relative after:absolute after:-bottom-2 after:left-0 after:h-1 after:w-full after:bg-primary text-secondary' : 'text-[#CBCBCB]'} cursor-pointer`}>Information</h5>
            </div>
            <div className='flex items-center gap-x-4'>
              {activeOption == 'shipping' &&
                <div className='size-12.5 flex justify-center items-center rounded-full bg-primary font-montserrat font-bold text-base leading-6 text-white'>02</div>
              }
              <h5 onClick={() => setActiveOption('shipping')} className={`font-poppins font-semibold text-2xl leading-7.5  mb-0.5 ${activeOption == 'shipping' ? 'relative after:absolute after:-bottom-2 after:left-0 after:h-1 after:w-full after:bg-primary text-secondary' : 'text-[#CBCBCB]'} cursor-pointer`}>Shipping</h5>
            </div>
            <div className='flex items-center gap-x-4'>
              {activeOption == 'payment' &&
                <div className='size-12.5 flex justify-center items-center rounded-full bg-primary font-montserrat font-bold text-base leading-6 text-white'>03</div>
              }
              <h5 onClick={() => setActiveOption('payment')} className={`font-poppins font-semibold text-2xl leading-7.5  mb-0.5 ${activeOption == 'payment' ? 'relative after:absolute after:-bottom-2 after:left-0 after:h-1 after:w-full after:bg-primary text-secondary' : 'text-[#CBCBCB]'} cursor-pointer`}>Payment</h5>
            </div>
          </div>
        </div>

        <div className='mb-20'>
          <div className='flex justify-between gap-x-14'>
            <div>
              {activeOption == 'information' &&
                <CheckoutInformation />
              }
              {activeOption == 'shipping' &&
                <CheckoutShipping />
              }
              {activeOption == 'payment' &&
                <CheckoutPayment />
              }
            </div>

            {/* ========== Information input Boxes ========== */}
            <OrderSummary />

          </div>
        </div>
      </Container>
    </div>
  )
}

export default CheckoutPage