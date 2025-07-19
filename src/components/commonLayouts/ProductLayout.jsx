import React, { useEffect, useState } from 'react'
import { IoStarSharp } from "react-icons/io5";
import { LuHeart } from "react-icons/lu";
import { GoShareAndroid } from "react-icons/go";
import AddToCartIcon from '../../icons/AddToCartIcon';
import { Link } from 'react-router-dom';

const ProductLayout = ({ catagory = 'watch', title = 'Orange Watch 12 High Quality Health Sensor...', rating = 4, totalRating = 20, price = '44.99', discount = 50, originalPrice = '89.99', productImage, newProduct = false, springSale = false, featuredProducts = false, availableQuantity = false, listView = false }) => {

  const [ratingValue, setRatingValue] = useState(new Array(+rating).fill(rating))
  const [hovertoShowQuantity, setHovertoShowQuantity] = useState(false)
  const [dynamicWidth, setDynamicWidth] = useState(93)

  const handleHoverStart = () => {
    if (availableQuantity) {
      setHovertoShowQuantity(availableQuantity)
    }
  }
  const handleHoverEnd = () => {
    if (hovertoShowQuantity) {
      setHovertoShowQuantity(false)
    }
  }

  useEffect(() => {

    if (0 < availableQuantity && availableQuantity <= 93) {
      setDynamicWidth(availableQuantity)
    } else if (availableQuantity > 93) {
      setDynamicWidth(93)
    }

  }, [availableQuantity])

  return (
    <div onMouseEnter={handleHoverStart} onMouseLeave={handleHoverEnd} className={` ${springSale ? 'p-3 md:!p-10 bg-[#EAEAEA] hover:bg-white' : 'border border-[#CBCBCB] md:border-transparent hover:border-[#CBCBCB]'} rounded-[10px]  duration-300 group cursor-pointer ${listView ? 'flex gap-12 px-12 py-5' : 'px-2 md:px-5.5 md:pt-6 pb-2 md:pb-11'} relative`}>

      {/* =========== Image & Discount part =========== */}
      <div className='relative'>
        {discount && <span className={`absolute ${springSale ? 'size-10 md:size-25 flex justify-center items-center font-poppins font-semibold text-sm md:text-2xl md:leading-7.5 rounded-full top-0 right-0' : 'top-2 md:-top-2 right-0 md:-right-2 font-montserrat font-semibold md:font-bold text-sm md:text-base leading-6 py-1 md:py-2 px-3 md:px-5 rounded-[5px]'} text-white bg-primary`}>{discount}%</span>}
        <img className='w-full' src={productImage ? productImage : 'images/productImage.webp'} alt={productImage ? productImage : 'productImage.webp'} />

      </div>


      {/* =========== details part =========== */}
      <div className={`text-secondary ${!listView && 'md:pt-10'}`} >
        <p className='font-montserrat font-normal text-xs md:text-sm uppercase leading-5 tracking-[2px] md:tracking-[5px] md:mb-4'>{catagory}</p>

        <Link to={'#'} className={`font-poppins font-medium md:font-semibold text-base md:text-xl md:leading-7.5 line-clamp-2 md:line-clamp-none group-hover:text-primary group-hover:underline duration-300 ${newProduct && 'md:w-59'}`}>{title}</Link>

        {/* ===== Product Short Description for list view ===== */}
        {listView &&
          <p className='font-montserrat max-w-150 mt-1 leading-6'>consectetur adipisicing elit. Selaborum maiores repellendus aliquam sit modi vel voluptatum inventore ea excepturi magnam dicta!</p>
        }

        {/* ==== Rating ==== */}
        <div className='flex items-center gap-x-2 md:mt-1'>
          <div className="flex items-center text-base text-[#FED550]">
            {ratingValue.map((item, index) => (
              springSale ? <IoStarSharp key={index} className='text-white group-hover:text-[#FED550] duration-300' /> : <IoStarSharp key={index} className='text-[#FED550]' />
            ))}
          </div>
          <span className='font-montserrat font-normal text-sm md:text-base leading-6'>( {totalRating} )</span>
        </div>

        {/* ==== Price ==== */}
        <div className='md:mt-5 flex gap-x-2'>
          <p className={`font-poppins font-semibold ${discount ? 'text-primary' : 'text-secondary'} text-xl md:text-2xl md:leading-7.5`}>${price}</p>
          {originalPrice && <span className='self-end font-montserrat font-normal text-sm md:text-base mb-0.5 md:leading-6 text-[#979797] line-through'>${originalPrice}</span>}
        </div>

        {/* ======= Stock part of Spring Sale ======= */}
        {springSale &&
          <div className='w-full bg-[#E0E0E0] rounded-xl md:rounded-3xl overflow-hidden mt-2 md:mt-8 relative'>
            <div style={{ width: dynamicWidth + '%' }} className='h-full bg-primary group-hover:bg-secondary rounded-xl md:rounded-3xl absolute duration-300'></div>
            <h4 className='font-montserrat font-semibold md:font-bold text-xs md:text-base text-center md:leading-6 text-white py-0.5 md:py-1 bg-transparent relative'>{hovertoShowQuantity ? hovertoShowQuantity + ' AVAILABLE' : 'LIMITED STOCK!'}</h4>
          </div>
        }
      </div>

      {/* ========= Cart, wishlist & Share Buttons ========= */}
      {!springSale &&
        <ul className={`flex gap-4.5 max-md:hidden  ${listView ? 'flex-col justify-center ml-auto' : 'group-hover:scale-100 absolute top-45.5 left-1/2 -translate-x-1/2 scale-0'} duration-300`}>
          <li className='size-12.5 bg-white border border-primary rounded-full flex justify-center items-center text-xl text-primary hover:bg-primary hover:text-white duration-300 cursor-pointer iconParent'><AddToCartIcon color='#FF624C' /></li>
          <li className='size-12.5 bg-white border border-primary rounded-full flex justify-center items-center text-xl text-primary hover:bg-primary hover:text-white duration-300 cursor-pointer'><LuHeart /></li>
          <li className='size-12.5 bg-white border border-primary rounded-full flex justify-center items-center text-xl text-primary hover:bg-primary hover:text-white duration-300 cursor-pointer'><GoShareAndroid /></li>
        </ul>
      }
    </div>
  )
}

export default ProductLayout