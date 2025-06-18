import React, { useEffect, useRef, useState } from 'react'
import Container from '../commonLayouts/Container'
import { Link } from 'react-router-dom'
import { FaBars, FaChevronDown } from "react-icons/fa6";
import CategoriesSideBar from '../CategoriesSideBar';
import { useDispatch } from 'react-redux';
import { enableSideBar } from '../../slices/categoriesSideBarSlice';
import ArrowDownIcon from '../../icons/ArrowDownIcon';

const BottomBar = () => {


  const dispatch = useDispatch()
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false)

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
    <div className='bg-primary'>
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
                <ul className='absolute top-10.5 -left-4 shadow-xl bg-white font-montserrat font-normal whitespace-nowrap text-base text-secondary rounded-lg border border-[#CBCBCB] py-1'>
                  <li className='py-2 px-4 hover:bg-gray-200'>
                    <Link to={'#'}>All Products</Link>
                  </li>
                  <li className='py-2 px-4 hover:bg-gray-200'>
                    <Link to={'#'}>Featured Products</Link>
                  </li>
                  <li className='py-2 px-4 hover:bg-gray-200'>
                    <Link to={'#'}>New Products</Link>
                  </li>
                  <li className='py-2 px-4 hover:bg-gray-200'>
                    <Link to={'#'}>Spring Sale</Link>
                  </li>
                  <li className='py-2 px-4 hover:bg-gray-200'>
                    <Link to={'#'}>Best Seller</Link>
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
  )
}

export default BottomBar