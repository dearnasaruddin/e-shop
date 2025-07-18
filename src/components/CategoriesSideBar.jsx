import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { disableSideBar } from '../slices/categoriesSideBarSlice';
import categories from '../dummyData/categoriesData';

const CategoriesSideBar = () => {

    const categoriesRef = useRef(null)
    const dispatch = useDispatch()
    const selector = useSelector((state) => state.handleCategoriesSideBar.value)

    const handleCategoriesSideBar = () => {
        dispatch(disableSideBar())
    }


    useEffect(() => {

        const handleClickOutside = (e) => {
            if (categoriesRef.current && !categoriesRef.current.contains(e.target)) {
                dispatch(disableSideBar())
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    })

    return (
        <div ref={categoriesRef} className={`fixed w-1/4 h-screen bg-gray-100 z-10 ${selector ? 'left-0' : '-left-full'} top-0 shadow-2xl p-10 duration-300`}>
            <div><IoCloseOutline onClick={handleCategoriesSideBar} className='text-3xl ml-auto text-secondary hover:text-red-500 duration-300 cursor-pointer' /></div>
            <h3 className='font-poppins font-semibold text-2xl'>All Categories</h3>
            <ul className='mt-6 text-lg capitalize'>
                {categories.map((item, index) => (
                    <li key={index}><Link className='font-montserrat text-secondary hover:text-primary duration-300 block py-2' >{item}</Link></li>
                ))}
            </ul>
        </div>
    )
}

export default CategoriesSideBar