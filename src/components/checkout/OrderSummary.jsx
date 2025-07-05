import React from 'react'
import MoreInfoIcon from '../../icons/MoreInfoIcon'
import Button from '../Button'


const OrderSummary = () => {
    return (
        <div className='p-10 bg-[#F4F4F4] rounded-3xl'>
            <h4 className='font-poppins font-semibold text-2xl leading-7.5 text-secondary mb-7'>Order Summary</h4>
            <ul className='font-montserrat font-bold text-xl leading-7.5 text-secondary'>
                <li className='flex py-5 pr-11 border-b border-[#C3C3C3]'>
                    <p className='w-78 pr-15.5 font-normal'>2019 Smart Laptop 256 GB 13 inch Pro Chip Core 1 TB HD SSD</p>
                    <span className='w-18'>1</span>
                    <p>$1,659.00</p>
                </li>
                <li className='flex py-5 pr-11 border-b border-[#C3C3C3]'>
                    <p className='w-78 pr-15.5 font-normal'>Mobile Watch A Series GPS 7/144 45 mm Red Rubber Band</p>
                    <span className='w-18'>1</span>
                    <p>$999.00</p>
                </li>
                <li className='flex py-5 pr-11 border-b border-[#C3C3C3]'>
                    <p className='w-78 pr-15.5 font-normal'>LP78245 Smart TV OLED 43 Inch 4K HD Dynamic Color USB HQ</p>
                    <span className='w-18'>2</span>
                    <p>$4,598.00</p>
                </li>
                <li className='flex py-5 pr-11 border-b border-[#C3C3C3]'>
                    <p className='w-78 pr-15.5 font-normal'>Console Game Stick HD Wireless Bluetooth Connect</p>
                    <span className='w-18'>2</span>
                    <p>$218.00</p>
                </li>
                <li className='flex py-5 pr-11 border-b border-[#C3C3C3]'>
                    <p className='w-78 pr-15.5 font-normal'>Mini Tablet Pro 16 inch HD Pencil 128 GB System RAM 28</p>
                    <span className='w-18'>1</span>
                    <p>$259.00</p>
                </li>
            </ul>
            <div className='flex gap-x-63.5 pr-11 font-montserrat font-normal text-xl leading-7.5 text-secondary mt-5 mb-12'>
                <div className='relative'>
                    <p>Shipping Fee</p>
                    <span className='absolute -top-0.5 -right-6 cursor-pointer'><MoreInfoIcon /></span>
                </div>
                <p className='font-bold'>$10.00</p>
            </div>
            <div className='py-5 px-6 rounded-[10px] bg-white'>
                <div className='flex gap-x-80 font-montserrat font-bold text-xl leading-7.5 text-secondary mb-6'>
                    <h6 className='mt-0.5'>Total</h6>
                    <p>$4,999.00</p>
                </div>
                <Button content='Order Now' paddingY='24' width={'100%'}/>
            </div>
        </div>
    )
}

export default OrderSummary