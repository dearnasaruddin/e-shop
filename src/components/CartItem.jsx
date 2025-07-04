import React, { useState } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import TrashIcon from '../icons/TrashIcon'
import ShareIcon from '../icons/ShareIcon'

const CartItem = ({ catagory, title, discount = false }) => {

  let [totalPrice,setTotalPrice] = useState(1659.00)

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
    <div className='w-full flex gap-x-15.5 items-center pl-9 pt-6 pr-53 pb-14 rounded-[10px] border border-transparent hover:border-[#CBCBCB] relative overflow-hidden group mb-6'>

      <div className='w-59 h-53.5 bg-[#D9D9D9]'>
        <img src="#" alt="" />
      </div>

      <div className='flex items-center'>
        <div className='mr-24.5'>
          <p className='font-montserrat font-normal text-sm uppercase leading-5 tracking-[5px] mb-4'>LAPTOP</p>
          <Link to={'#'} className='w-78.5 inline-block font-poppins font-semibold text-xl leading-7.5 group-hover:text-primary group-hover:underline duration-300' >2019 Smart Laptop 256 GB 13 inch Pro Chip Core 1 TB HD SSD</Link>
          <p className='mt-11.5 font-montserrat font-normal text-base text-secondary leading-6'><span className='mr-2 font-bold'>Variant:</span>Space Gray</p>
        </div>

        <div>
          <p className='font-poppins font-semibold text-secondary text-xl leading-7.5'>$1,659.00</p>
        </div>

        <div className='flex gap-x-4 items-center ml-34 mr-31'>
          <button onClick={() => handleQuantity('minus')} className='text-base cursor-pointer'><FiMinus /></button>
          <h5 className='size-10 flex justify-center items-center font-montserrat font-bold text-base leading-6 text-secondary rounded-full bg-[#F4F4F4]'>{quantity}</h5>
          <button onClick={() => handleQuantity('plus')} className='text-base cursor-pointer'><FiPlus /></button>
        </div>

        <div>
          <p className='font-poppins font-semibold text-secondary text-xl leading-7.5'>${totalPrice.toFixed(2)}</p>
        </div>
      </div>

      <ul className='flex flex-col gap-y-9.5 justify-center absolute top-1/2 -right-20 duration-300 group-hover:right-12 -translate-y-1/2'>
        <li className='size-16 group/icon flex justify-center items-center rounded-full border border-primary  hover:bg-primary cursor-pointer'><TrashIcon className='fill-primary group-hover/icon:fill-white' /></li>
        <li className='size-16 group/icon flex justify-center items-center rounded-full border border-primary hover:bg-primary cursor-pointer'><ShareIcon className='fill-primary group-hover/icon:fill-white' /></li>
      </ul>

    </div>
  )
}

export default CartItem