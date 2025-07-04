import React from 'react'
import Container from '../commonLayouts/Container'
import { Link } from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import CartIcon from '../../icons/CartIcon';

const MiddleBar = () => {
  return (
    <Container>
      <div className="flex justify-between items-center py-6 font-montserrat font-normal text-sm leading-5 text-secondary">
        <div>
          <Link to={'/'}><img src="/logo.svg" alt="logo.svg" /></Link>
        </div>
        <div className='flex items-center gap-x-12'>
          <div className='relative'>
            <input className='w-83 border border-[#979797] py-4.5 px-6 rounded-[10px]' placeholder='Search Products ...' type="text" name="" id="" />
            <IoSearchOutline className='absolute top-1/2 -translate-1/2 right-3.5 text-lg' />
          </div>
          <div className='flex items-center gap-x-22.5'>
            <Link to={'/cart'} className='flex items-center gap-x-5 relative after:absolute after:w-[1px] after:h-8 after:top-1/2 after:-right-11 after:-translate-y-1/2 after:translate-x-1/2 after:bg-[#979797] cursor-pointer'>
              <div>
                <CartIcon />
              </div>
              <div>
                <p className='text-base leading-6'>Cart</p>
                <span className='font-bold text-base leading-6'>$ 150,00</span>
              </div>
            </Link>
            <div className='flex items-center gap-x-5.5 cursor-pointer'>
              <div>
                <AiOutlineUser className='text-[34px]' />
              </div>
              <div>
                <p className='text-base leading-6'>User</p>
                <span className='font-bold text-base leading-6'>Account</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default MiddleBar