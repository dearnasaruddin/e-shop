import React, { useEffect, useRef, useState } from 'react'
import Container from '../commonLayouts/Container'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import CartIcon from '../../icons/CartIcon';
import { HiBars3 } from 'react-icons/hi2';
import { enableNavSideBar } from '../../slices/navSideBarSlice';

const MiddleBar = () => {
  const dispatch = useDispatch()
  const [activeSearch, setActiveSearch] = useState(false)
  const searchRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setActiveSearch(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  const handleSearch = () => {
    setActiveSearch(true)
  }

  const handleNavSideBar = () => {
    dispatch(enableNavSideBar())
  }

  return (
    <div>
      <Container>
        <div className="flex justify-between items-center py-2 md:py-6 font-montserrat font-normal text-sm leading-5 text-secondary">
          {/* ======= Logo ======= */}
          <div>
            <Link to={'/'}><img src="/logo.svg" alt="logo.svg" /></Link>
          </div>

          <div className='flex items-center gap-x-4 md:gap-x-12 '>
            {/* ======= Bar ======= */}
            <span onClick={handleNavSideBar} className='inline-block sm:hidden cursor-pointer'>
              <HiBars3 className='text-[34px]' />
            </span>

            {/* ======= Input ======= */}
            <div className={`${activeSearch && 'w-full sm:w-auto absolute sm:static top-20 md:top-0 left-1/2 md:left-0  -translate-x-1/2 sm:translate-0 z-10 px-2.5 sm:px-0 bg-white sm:bg-transparent'}`}>
              <div ref={searchRef} className={`${activeSearch ? 'w-full sm:w-auto' : 'relative'}`}>
                <input className={`sm:w-full md:w-83 border border-[#979797] py-3 md:py-4.5 pl-4 pr-10 md:px-6 rounded-[10px] ${activeSearch ? 'inline-block w-full' : 'hidden'} sm:block`} placeholder='Search Products ...' type="text" name="" id="" />
                <IoSearchOutline onClick={handleSearch} className={`${activeSearch ? 'absolute -translate-y-1/2 right-6 sm:right-0 pb-1 sm:pb-0' : 'right-0'} sm:absolute top-1/2 sm:-translate-1/2 md:right-3.5 text-3xl sm:text-2xl md:text-lg mt-0.5 sm:mt-0 cursor-pointer`} />
              </div>
            </div>

            <div className='flex items-center gap-x-3 sm:gap-x-6 md:gap-x-22.5'>
              {/* ======= Cart ======= */}
              <Link to={'/cart'} className='flex items-center gap-x-3 md:gap-x-5 relative after:absolute sm:after:w-[1px] sm:after:h-8 after:top-1/2 after:-right-3 md:after:-right-11 after:-translate-y-1/2 after:translate-x-1/2 after:bg-[#979797] cursor-pointer'>
                <div>
                  <CartIcon />
                </div>
                <div className='hidden sm:block'>
                  <p className='text-base leading-6'>Cart</p>
                  <span className='font-bold text-base leading-6'>$ 150,00</span>
                </div>
              </Link>

              {/* ======= User ======= */}
              <div className='flex items-center gap-x-3 md:gap-x-5.5 cursor-pointer'>
                <div>
                  <AiOutlineUser className='text-[34px]' />
                </div>
                <div className='hidden sm:block'>
                  <p className='text-base leading-6'>User</p>
                  <span className='font-bold text-base leading-6'>Account</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </Container>
    </div>
  )
}

export default MiddleBar