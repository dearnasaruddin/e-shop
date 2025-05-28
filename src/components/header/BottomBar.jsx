import React from 'react'
import Container from '../commonLayouts/Container'
import { Link } from 'react-router-dom'
import { FaBars, FaChevronDown } from "react-icons/fa6";

const BottomBar = () => {
  return (
    <div className='bg-primary'>
      <Container>
        <div className="flex items-center justify-between py-6 font-montserrat font-bold text-base leading-6 text-white">
          <ul className='flex items-center gap-x-20'>
            <li><Link to={'#'} className='flex items-center gap-x-4'> <FaBars className='text-xl' /> <span>All Categories</span></Link></li>
            <li><Link to={'/product-list'} className='flex items-center gap-x-2'><span>Products</span><FaChevronDown /></Link></li>
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