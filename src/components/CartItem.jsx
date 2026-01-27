import React, { useState } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import TrashIcon from '../icons/TrashIcon'
import ShareIcon from '../icons/ShareIcon'

const CartItem = ({ catagory, title, discount = false }) => {

  let [totalPrice, setTotalPrice] = useState(1659.00)

  let [quantity, setQuantity] = useState(1)
  const handleQuantity = (type) => {
    if (type == 'plus') {
      quantity++
      setQuantity(quantity)
      setTotalPrice(totalPrice + 1659.00)
    } else {
      if (quantity > 1) {
        quantity--
        setQuantity(quantity)
        setTotalPrice(totalPrice - 1659.00)
      }
    }
  }

  return (
    <div className='w-full flex 2xl:gap-x-15.5 items-center max-sm:py-2 max-sm:pr-3 xl:pl-9 lg:pt-6 2xl:pr-53 xl:pb-14 rounded-[10px] border border-[#CBCBCB] lg:border-transparent hover:border-[#CBCBCB] relative overflow-hidden group mb-3 lg:mb-6'>

      <div className='lg:w-36 xl:w-59 xl:h-53.5 '>
        <img src="./images/productImage.webp" alt="Product Image" />
      </div>

        {/* ========== Product ========== */}
      <div className='lg:flex xl:max-2xl:grow lg:max-xl:justify-between lg:max-xl:w-full lg:max-xl:mr-4 items-center'>
        <div className='xl:max-2xl:grow-2 2xl:mr-24.5'>
          <p className='font-montserrat font-normal text-sm uppercase leading-5 tracking-[5px] lg:mb-4'>LAPTOP</p>
          <Link to={'/product-details'} className='lg:max-xl:max-w-50 xl:max-w-64 2xl:w-78.5 inline-block font-poppins font-medium lg:font-semibold text-base lg:text-xl lg:leading-7.5 group-hover:text-primary group-hover:underline duration-300' >2019 Smart Laptop 256 GB 13 inch Pro Chip Core 1 TB HD SSD</Link>
          <p className='lg:mt-2 xl:mt-11.5 font-montserrat font-normal text-base text-secondary leading-6'><span className='mr-1 lg:mr-2 font-bold'>Variant:</span>Space Gray</p>
        </div>

        {/* ========== Price ========== */}
        <div className='xl:max-2xl:grow-1'>
          <p className='font-poppins font-normal lg:font-semibold text-secondary text-base lg:text-xl lg:leading-7.5'><span className='sm:hidden font-semibold'>Per Unit: </span>$1,659.00</p>
        </div>

        {/* ========== QTY ========== */}
        <div className='xl:max-2xl:grow-1 flex gap-4 items-center 2xl:ml-34 2xl:mr-31'>
          <button onClick={() => handleQuantity('minus')} className='text-base cursor-pointer'><FiMinus /></button>
          <h5 className='size-8 lg:size-10 flex justify-center items-center font-montserrat font-medium lg:font-bold text-base lg:leading-6 text-secondary rounded-full bg-[#F4F4F4]'>{quantity}</h5>
          <button onClick={() => handleQuantity('plus')} className='text-base cursor-pointer'><FiPlus /></button>
        </div>

        {/* ========== Total ========== */}
        <div className='xl:max-2xl:grow-1'>
          <p className='font-poppins font-normal lg:font-semibold text-secondary text-base lg:text-xl leading-7.5'><span className='sm:hidden font-semibold'>Total: </span>${totalPrice.toFixed(2)}</p>
        </div>
      </div>

      {/* ==================== Share & Trash ==================== */}
      <ul className='flex lg:flex-col max-lg:gap-2 lg:gap-y-9.5 justify-center absolute bottom-0 lg:top-1/2 right-4 lg:-right-20 duration-300 group-hover:right-12 -translate-y-1/2'>
        <li className='size-8 max-lg:p-1.5 lg:size-16 group/icon flex justify-center items-center rounded-full border border-primary  hover:bg-primary cursor-pointer'><TrashIcon className='fill-primary group-hover/icon:fill-white' /></li>
        <li className='size-8 max-lg:p-1.5 lg:size-16 group/icon flex justify-center items-center rounded-full border border-primary hover:bg-primary cursor-pointer'><ShareIcon className='fill-primary group-hover/icon:fill-white' /></li>
      </ul>

    </div>
  )
}

export default CartItem