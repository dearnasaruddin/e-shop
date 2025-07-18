import React, { useEffect, useRef, useState } from 'react'
import Container from '../commonLayouts/Container'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import CategoriesSideBar from '../CategoriesSideBar';
import { useDispatch, useSelector } from 'react-redux';
import { enableSideBar } from '../../slices/categoriesSideBarSlice';
import ArrowDownIcon from '../../icons/ArrowDownIcon';
import { IoCloseOutline } from 'react-icons/io5';
import { disableNavSideBar } from '../../slices/navSideBarSlice';
import categories from '../../dummyData/categoriesData';

const BottomBar = () => {

  const dispatch = useDispatch()
  const selector = useSelector((state) => state.handleNavSideBar.value)
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false)
  const [isCategoriesDropdownOpen, setIsCtegoriesDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  const handleProductDropdown = () => {
    setIsProductDropdownOpen(!isProductDropdownOpen)
  }

  const handleCategoriesSideBar = () => {
    dispatch(enableSideBar())
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsProductDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  return (
    <>
      <div className='bg-primary hidden sm:block'>
        <CategoriesSideBar />
        <Container>
          <div className="flex items-center justify-between py-6 font-montserrat font-bold text-base leading-6 text-white">
            <ul className='flex items-center gap-x-20'>
              <li onClick={handleCategoriesSideBar} className='flex items-center gap-x-4 cursor-pointer'> <FaBars className='text-xl' /> <span>All Categories</span></li>
              <li onClick={handleProductDropdown} ref={dropdownRef} className='flex items-center gap-x-2 cursor-pointer relative'>
                {/* <span>Products</span><FaChevronDown /> */}
                <span>Products</span><ArrowDownIcon color='#ffffff' />
                {/* ======== Product Dropdown ======== */}

                {isProductDropdownOpen &&
                  <ul className='absolute top-10.5 -left-4 z-10 shadow-xl bg-white font-montserrat font-normal whitespace-nowrap text-base text-secondary rounded-lg border border-[#CBCBCB] py-1'>
                    <li className='hover:bg-gray-200'>
                      <Link className='py-2 px-4 block' to={'/product-list'}>All Products</Link>
                    </li>
                    <li className=' hover:bg-gray-200'>
                      <Link className='py-2 px-4 block' to={'#'}>Featured Products</Link>
                    </li>
                    <li className=' hover:bg-gray-200'>
                      <Link className='py-2 px-4 block' to={'#'}>New Products</Link>
                    </li>
                    <li className=' hover:bg-gray-200'>
                      <Link className='py-2 px-4 block' to={'#'}>Spring Sale</Link>
                    </li>
                    <li className=' hover:bg-gray-200'>
                      <Link className='py-2 px-4 block' to={'#'}>Best Seller</Link>
                    </li>
                  </ul>
                }

              </li>
              <li><Link to={'/blog'}>Blog</Link></li>
              <li><Link to={'/contact'}>Contact</Link></li>
            </ul>
            <ul className='flex items-center gap-x-20'>
              <li><Link to={'#'}>LIMITED SALE 👋🏻</Link></li>
              <li><Link to={'#'}>Best Seller</Link></li>
              <li><Link to={'#'}>New Arrival</Link></li>
            </ul>
          </div>
        </Container>
      </div>



      <div className={`bg-white h-screen w-full fixed top-0 z-10 pl-6 pt-10 pr-14 sm:hidden ${selector ? 'left-0' : '-left-full'} duration-200`}>
        <IoCloseOutline onClick={() => dispatch(disableNavSideBar())} className='absolute top-5 right-6 text-3xl cursor-pointer' />
        <div className="font-montserrat font-bold text-base leading-6 text-secondary">
          <ul className=''>
            <li onClick={() => setIsCtegoriesDropdownOpen(!isCategoriesDropdownOpen)} className='flex items-center gap-x-2 cursor-pointer relative hover:bg-gray-200 py-2 px-4'> <span>All Categories</span><ArrowDownIcon /></li>

            {/* ======== Categories Dropdown ======== */}
            {isCategoriesDropdownOpen &&
              <ul className='pl-4'>
                {categories.map((item, index) => (
                  <li key={index}><Link className='font-montserrat font-normal text-base text-secondary hover:bg-gray-200 duration-300 block py-2 px-4' >{item}</Link></li>
                ))}
              </ul>
            }
            <li onClick={handleProductDropdown} ref={dropdownRef} className='flex items-center gap-x-2 cursor-pointer relative hover:bg-gray-200 py-2 px-4'>
              <span>Products</span><ArrowDownIcon />
            </li>

            {/* ======== Product Dropdown ======== */}
            {isProductDropdownOpen &&
              <ul className='font-montserrat font-normal whitespace-nowrap text-base text-secondary pl-4'>
                <li className='hover:bg-gray-200'>
                  <Link className='py-2 px-4 block' to={'/product-list'}>All Products</Link>
                </li>
                <li className=' hover:bg-gray-200'>
                  <Link className='py-2 px-4 block' to={'#'}>Featured Products</Link>
                </li>
                <li className=' hover:bg-gray-200'>
                  <Link className='py-2 px-4 block' to={'#'}>New Products</Link>
                </li>
                <li className=' hover:bg-gray-200'>
                  <Link className='py-2 px-4 block' to={'#'}>Spring Sale</Link>
                </li>
                <li className=' hover:bg-gray-200'>
                  <Link className='py-2 px-4 block' to={'#'}>Best Seller</Link>
                </li>
              </ul>
            }
            <li><Link to={'/blog'} className='block hover:bg-gray-200 py-2 px-4'>Blog</Link></li>
            <li><Link to={'/contact'} className='block hover:bg-gray-200 py-2 px-4'>Contact</Link></li>
          </ul>
          <ul className=''>
            <li><Link to={'#'} className='block hover:bg-gray-200 py-2 px-4'>LIMITED SALE 👋🏻</Link></li>
            <li><Link to={'#'} className='block hover:bg-gray-200 py-2 px-4'>Best Seller</Link></li>
            <li><Link to={'#'} className='block hover:bg-gray-200 py-2 px-4'>New Arrival</Link></li>
          </ul>
        </div>
      </div>

    </>
  )
}

export default BottomBar