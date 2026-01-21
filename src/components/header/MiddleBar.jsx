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

  // useEffect(() => {
  //   const handleScroll = (e) => {
  //     console.log(e)
  //   }

  //   document.addEventListener('scroll', handleScroll)

  //   return () => {
  //     document.removeEventListener('scroll', handleScroll)
  //   }
  // })

  const handleSearch = () => {
    setActiveSearch(true)
  }

  const handleNavSideBar = () => {
    dispatch(enableNavSideBar())
  }

  return (
    <div className='max-sm:sticky sm:static max-sm:top-0 max-sm:left-0 max-sm:bg-secondary sm:bg-white shadow-lg max-sm:z-20'>
      <Container>
        <div className="flex justify-between items-center py-3.5 sm:py-2 md:py-6 font-montserrat font-normal text-sm leading-5 max-sm:text-white sm:text-secondary">
          {/* ======= Logo ======= */}
          <div>
            <Link to={'/'} className='max-sm:hidden' ><img src="/logo.svg" alt="logo.svg" /></Link>
            <Link to={'/'} className='sm:hidden' ><img src="/whiteLogo.svg" alt="whiteLogo.svg" /></Link>
          </div>

          <div className='flex items-center gap-x-4 md:gap-x-12'>
            {/* ======= Bar ======= */}
            <span onClick={handleNavSideBar} className='inline-block sm:hidden cursor-pointer'>
              <HiBars3 className='text-[34px]' />
            </span>

            {/* ======= Input ======= */}
            <div className={`${activeSearch && 'w-full sm:w-auto absolute top-0 left-1/2 md:left-0  -translate-x-1/2 sm:translate-0 z-10 px-2.5 sm:px-0 max-sm:py-2 bg-white sm:bg-transparent'}`}>

              <div ref={searchRef} className={`${activeSearch ? 'w-full sm:w-auto' : 'relative'}`}>

                <input className={`sm:max-w-56 md:w-83 border border-[#979797] py-3 sm:max-md:py-2.5 md:py-4.5 max-md:pl-4 max-md:pr-10 md:px-6 rounded-lg md:rounded-[10px] ${activeSearch ? 'inline-block w-full max-sm:shadow-2xl max-sm:text-secondary' : 'max-sm:hidden'} sm:block`} placeholder='Search Products ...' type="text" />

                <IoSearchOutline onClick={handleSearch} className={`${activeSearch ? 'absolute -translate-y-1/2 right-6 sm:right-0 pb-1 sm:pb-0' : 'right-0'} sm:hidden sm:absolute top-1/2 sm:-translate-1/2 md:right-3.5 text-3xl sm:text-2xl md:text-lg mt-0.5 sm:mt-0 cursor-pointer`} />

                <IoSearchOutline className={`right-0 max-sm:hidden sm:absolute top-1/2 sm:-translate-1/2 md:right-3.5 text-3xl sm:text-2xl md:text-lg mt-0.5 sm:mt-0 cursor-pointer`} />
              </div>

            </div>

            <div className='flex items-center gap-x-4 md:gap-x-6 lg:gap-x-22.5'>
              {/* ======= Cart ======= */}
              <Link to={'/cart'} className='flex items-center gap-x-3 md:gap-x-5 relative after:absolute sm:after:w-[1px] sm:after:h-8 after:top-1/2 after:-right-2.5 md:after:-right-11 after:-translate-y-1/2 after:translate-x-1/2 after:bg-[#979797] cursor-pointer'>
                <div className='max-sm:hidden'>
                  <CartIcon />
                </div>
                <div className='sm:hidden'>
                  <CartIcon shapeColor='white' />
                </div>
                <div className='hidden sm:block'>
                  <p className='text-sm md:text-base md:leading-6'>Cart</p>
                  <span className='font-bold text-sm md:text-base md:leading-6'>$ 150,00</span>
                </div>
              </Link>

              {/* ======= User ======= */}
              <div className='flex items-center gap-x-3 sm:gap-x-2 md:gap-x-5.5 cursor-pointer'>
                <div>
                  <AiOutlineUser className='text-[34px] sm:max-md:text-3xl' />
                </div>
                <div className='hidden sm:block'>
                  <p className='text-sm md:text-base md:leading-6'>User</p>
                  <span className='font-bold text-sm md:text-base md:leading-6'>Account</span>
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