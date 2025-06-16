import React, { useState } from 'react'
import { IoStarSharp } from "react-icons/io5";
import { LuHeart } from "react-icons/lu";
import { GoShareAndroid } from "react-icons/go";
import AddToCartIcon from '../../icons/AddToCartIcon';

const ProductLayout = ({ catagory, title, rating, totalRating, price, discount, originalPrice, productImage }) => {

  const [ratingValue, setRatingValue] = useState(new Array(+rating).fill(rating))

  return (
    <div className='px-6 pt-6 pb-11 border rounded-[10px] border-transparent hover:border-[#CBCBCB] duration-300 group'>
      <div className='relative'>
        {discount && <span className='absolute -top-2 -right-2 font-montserrat font-bold text-base leading-6 py-2 px-5 rounded-[5px] text-white bg-primary'>{discount}%</span>}
        <img className='w-full' src={productImage ? productImage : 'productImage.webp'} alt={productImage ? productImage : 'productImage.webp'} />
        <ul className='flex gap-x-4.5 scale-0 group-hover:scale-100 duration-300 absolute left-1/2 -translate-x-1/2 bottom-1.5'>
          <li className='size-12.5 bg-white border border-primary rounded-full flex justify-center items-center text-xl text-primary hover:bg-primary hover:text-white duration-300 cursor-pointer iconParent'><AddToCartIcon color='#FF624C' /></li>
          <li className='size-12.5 bg-white border border-primary rounded-full flex justify-center items-center text-xl text-primary hover:bg-primary hover:text-white duration-300 cursor-pointer'><LuHeart /></li>
          <li className='size-12.5 bg-white border border-primary rounded-full flex justify-center items-center text-xl text-primary hover:bg-primary hover:text-white duration-300 cursor-pointer'><GoShareAndroid /></li>
        </ul>
      </div>
      <div className='text-secondary pt-10'>
        <p className='font-montserrat font-normal text-sm uppercase leading-5 tracking-[5px]'>{catagory}</p>
        <h3 className='font-poppins font-semibold text-xl leading-7.5 mt-4 mb-1 group-hover:text-primary group-hover:underline duration-300'>{title}</h3>
        <div className='flex items-center gap-x-2'>
          <div className="flex items-center text-base text-[#FED550]">
            {ratingValue.map((item, index) => (
              <IoStarSharp key={index} />
            ))}
          </div>
          <span className='font-montserrat font-normal text-base leading-6'>( {totalRating} )</span>
        </div>
        <div className='mt-5 flex gap-x-2'>
          <p className={`font-poppins font-semibold ${discount ? 'text-primary' : 'text-secondary'} text-2xl leading-7.5`}>${price}</p>
          {originalPrice && <span className='self-end font-montserrat font-normal text-base leading-6 text-[#979797] line-through'>${originalPrice}</span>}
        </div>
      </div>
    </div>
  )
}

export default ProductLayout