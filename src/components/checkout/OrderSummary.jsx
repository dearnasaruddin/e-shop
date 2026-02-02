import React from 'react'
import MoreInfoIcon from '../../icons/MoreInfoIcon'
import Button from '../Button'


const OrderSummary = () => {
    const orderSummaryData = [
        {
            productName: '2019 Smart Laptop 256 GB 13 inch Pro Chip Core 1 TB HD SSD',
            quantity: 1,
            price: 1659.00,
        },
        {
            productName: 'Mobile Watch A Series GPS 7/144 45 mm Red Rubber Band',
            quantity: 1,
            price: 999.00,
        },
        {
            productName: 'LP78245 Smart TV OLED 43 Inch 4K HD Dynamic Color USB HQ',
            quantity: 2,
            price: 4598.00,
        },
        {
            productName: 'Console Game Stick HD Wireless Bluetooth Connect',
            quantity: 2,
            price: 218.00,
        },
        {
            productName: 'Mini Tablet Pro 16 inch HD Pencil 128 GB System RAM 28',
            quantity: 1,
            price: 259.00,
        }
    ]

    return (
        <div className='sm:max-md:max-w-68 md:max-lg:max-w-80 lg:max-xl:max-w-100 p-5 2xl:p-10 bg-[#F4F4F4] rounded-xl lg:rounded-3xl'>
            <h4 className='font-poppins font-semibold text-2xl leading-7.5 text-secondary mb-7'>Order Summary</h4>
            <ul className='font-montserrat font-bold text-base sm:max-md:text-sm lg:text-xl  lg:leading-7.5 text-secondary'>
                {orderSummaryData.map((item, index) => (
                    <li key={index} className='flex lg:py-5 xl:pr-11 border-b border-[#C3C3C3] max-xl:flex-wrap max-xl:gap-y-4 max-xl:justify-between'>
                        <p className='max-xl:w-full xl:w-78 xl:pr-15.5 font-normal'>{item.productName}</p>
                        <span className='xl:w-18'><span className='xl:hidden font-normal'>Quantity: </span>{item.quantity}</span>
                        <p><span className='sm:hidden font-normal'>Price: </span>${new Intl.NumberFormat('en-US').format(item.price)}.00</p>
                    </li>
                ))}
            </ul>
            <div className='flex max-xl:justify-between xl:gap-x-63.5 xl:pr-11 font-montserrat font-normal text-base lg:text-xl leading-7.5 text-secondary mt-5 mb-6 lg:mb-12'>
                <div className='relative'>
                    <p>Shipping Fee</p>
                    <span className='absolute -top-0.5 -right-6 cursor-pointer'><MoreInfoIcon /></span>
                </div>
                <p className='font-bold'>$10.00</p>
            </div>
            <div className='py-3 lg:py-5 px-4 lg:px-6 rounded-[10px] bg-white'>
                <div className='flex max-xl:justify-between xl:gap-x-80 font-montserrat font-bold lg:text-xl leading-7.5 text-secondary mb-3 lg:mb-6'>
                    <h6 className='mt-0.5'>Total</h6>
                    <p>${
                        new Intl.NumberFormat('en-US').format((orderSummaryData.reduce((total, item) => {
                            return total + item.price
                        }, 0)) + 10)
                    }</p>
                </div>
                <Button content='Order Now' className='w-full py-2.5 lg:py-6'/>
            </div>
        </div>
    )
}

export default OrderSummary