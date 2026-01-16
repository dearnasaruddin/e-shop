import React, { useState } from 'react'
import OrderSummary from './OrderSummary'
import { Link } from 'react-router-dom'

const CheckoutShipping = () => {
    const [selectedShipingOption, setSelectedShipingOption] = useState("standard");

    return (
        <>
            <div>
                <h3 className='font-poppins font-semibold text-2xl lg:text-4xl lg:leading-11.5 text-secondary mb-10'>Shipping Method</h3>
                <div className='lg:w-216 font-poppins font-normal text-xl'>
                    <div className='flex gap-8 flex-wrap'>
                        <div onClick={()=>setSelectedShipingOption('standard')} className={`py-4 lg:py-6 px-6 lg:px-8 ${selectedShipingOption == 'standard' ? 'bg-orange-100 border-primary' : 'border-[#c3c3c3]'} text-secondary  border rounded-xl cursor-pointer`}>
                            <h4 className='font-semibold text-xl lg:text-3xl'>Standard Shipping</h4>
                            {/* <p className='my-2'>Within 3-5 days</p> */}
                            <p className='sm:max-w-84 font-montserrat max-sm:text-base my-4 sm:my-6'>Reliable and affordable delivery for your order. Perfect for non-urgent items, arriving safely within 3 - 5 days.</p>
                            <p className='text-xl lg:text-3xl'>$10.00</p>
                        </div>
                        <div onClick={()=>setSelectedShipingOption('express')} className={`py-4 lg:py-6 px-6 lg:px-8 ${selectedShipingOption == 'express' ? 'bg-orange-100 border-primary' : 'border-[#c3c3c3]'} text-secondary border rounded-xl cursor-pointer`}>
                            <h4 className='font-semibold text-xl lg:text-3xl'>Express Shipping</h4>
                            {/* <p className='my-2'>Within 1-2 days</p> */}
                            <p className='sm:max-w-84 font-montserrat max-sm:text-base my-4 sm:my-6'>Fastest delivery for urgent needs. Get your order quickly and securely within 1 - 2 days, with priority handling.</p>
                            <p className='text-xl lg:text-3xl'>$25.00</p>
                        </div>
                    </div>


                    <h3 className='font-poppins font-semibold text-xl lg:text-2xl leading-11.5 text-secondary mt-12'>Delivery Address</h3>
                    <div className="text-base lg:text-lg max-sm:space-y-1 max-sm:mt-4">
                        <p className='max-lg:font-semibold'>
                            Amelia Robert Watson
                        </p>
                        <p className='font-montserrat'>
                            Home Address, Auxiliary St. 12345, Anywhere State
                        </p>
                        <p className='font-montserrat'>
                            Samarinda, Kalimantan Timur, Indonesia, 555555
                        </p>
                        <p className='font-montserrat mb-2'>
                            +123 456 7890
                        </p>
                        <Link className='text-primary font-semibold' to={'#'}> Change</Link>
                    </div>
                    <div className='mt-12'>
                        <label htmlFor="delivery-notes">Delivery Instructions (optional)</label> <br />
                        <textarea className='w-full lg:w-140 lg:min-h-50 rounded-xl max-lg:text-base lg:rounded-2xl border p-6 border-[#c3c3c3] mt-5' id="delivery-notes" placeholder="Enter any specific delivery instructions..."></textarea>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CheckoutShipping