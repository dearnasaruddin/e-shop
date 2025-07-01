import React from 'react'
import categories from '../dummyData/categoriesData';
import { IoCheckmarkOutline } from "react-icons/io5";

const ProductSidebarCategories = () => {
    return (
        <ul className='mt-5 pb-10 border-b border-[#C3C3C3]'>
            {categories.map((item, index) => (
                <li key={index} className='flex items-center relative'>
                    <input className='appearance-none h-4 w-4.5 checked:bg-primary checked:border-none border border-secondary rounded-xs peer cursor-pointer' type="checkbox" name={item} id={item} />
                    <label htmlFor={item} className='hidden peer-checked:block absolute top-1/2 left-[8.5px] -translate-1/2 text-[12px] text-white cursor-pointer'>
                        <IoCheckmarkOutline />
                    </label>
                    <label htmlFor={item} className='pl-2 peer-checked:font-bold w-full py-1.5 font-montserrat font-normal text-base leading-6 cursor-pointer duration-300'>{item}</label>

                </li>
            ))}
        </ul>
    )
}

export default ProductSidebarCategories