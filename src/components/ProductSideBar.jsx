import React, { useState } from 'react'
import categories from '../dummyData/categoriesData';
import brands from '../dummyData/brandsData';
import ArrowDownIcon from '../icons/ArrowDownIcon';
import { IoCheckmarkOutline } from "react-icons/io5";

const ProductSideBar = () => {

    const [isCategoriesDropdownOpen, setIsCategoriesDropdownOpen] = useState(true)
    const [isBrandDropdownOpen, setIsBrandDropdownOpen] = useState(true)
    const [isPriceDropdownOpen, setIsPriceDropdownOpen] = useState(true)

    return (
        <div className='w-full p-12 rounded-3xl bg-[#F4F4F4]'>

            {/* Categories */}
            <div>
                <div onClick={() => setIsCategoriesDropdownOpen(!isCategoriesDropdownOpen)} className='flex items-center gap-x-32.5 justify-between cursor-pointer'>
                    <h4 className='font-montserrat font-bold text-xl leading-7.5 text-secondary'>Categories</h4>
                    {isCategoriesDropdownOpen ?
                        <ArrowDownIcon rotate='-180deg' />
                        :
                        <ArrowDownIcon />
                    }
                </div>
                {isCategoriesDropdownOpen &&
                    <ul className='mt-5 pb-10 border-b border-[#C3C3C3]'>
                        {categories.map((item, index) => (
                            <li key={index} className='flex items-center gap-x-2 relative'>
                                <input className='appearance-none h-4 w-4.5 checked:bg-primary checked:border-none border border-secondary rounded-xs peer' type="checkbox" name={item} id={item} />
                                <IoCheckmarkOutline className='hidden peer-checked:block absolute top-1/2 left-2 -translate-1/2 text-[12px] text-white' />
                                <label htmlFor={item} className='peer-checked:font-bold w-full py-1.5 font-montserrat font-normal text-base leading-6 cursor-pointer duration-300'>{item}</label>

                            </li>
                        ))}
                    </ul>
                }
            </div>

            {/* Brands */}
            <div className='mt-10'>
                <div onClick={() => setIsBrandDropdownOpen(!isBrandDropdownOpen)} className='flex items-center gap-x-32.5 justify-between cursor-pointer'>
                    <h4 className='font-montserrat font-bold text-xl leading-7.5 text-secondary'>Brands</h4>
                    {isBrandDropdownOpen ?
                        <ArrowDownIcon rotate='-180deg' />
                        :
                        <ArrowDownIcon />
                    }
                </div>

                {isBrandDropdownOpen &&
                    <ul className='mt-5 pb-10 border-b border-[#C3C3C3]'>
                        {brands.map((item, index) => (
                            <li key={index} className='flex items-center relative'>
                                <input className='appearance-none h-4 w-4.5 checked:bg-primary checked:border-none border border-secondary rounded-xs peer' type="checkbox" name={item.brandName} id={item.brandName} />
                                <IoCheckmarkOutline className='hidden peer-checked:block absolute top-1/2 left-2 -translate-1/2 text-[12px] text-white' />
                                <label htmlFor={item.brandName} className='peer-checked:font-bold w-full flex items-center justify-between py-1.5 pl-2 font-montserrat font-normal text-base leading-6 cursor-pointer duration-300'>{item.brandName} <span className='font-normal'>( {item.productQuantity} )</span></label>

                            </li>
                        ))}
                        <span className='font-montserrat font-bold text-base leading-6 text-secondary border-b border-secondary inline-block mt-5 cursor-pointer'>More Brands</span>
                    </ul>
                }
            </div>

            {/* Price */}
            <div className='mt-10'>
                <div onClick={() => setIsPriceDropdownOpen(!isPriceDropdownOpen)} className='flex items-center gap-x-32.5 justify-between cursor-pointer'>
                    <h4 className='font-montserrat font-bold text-xl leading-7.5 text-secondary'>Price</h4>
                    {isPriceDropdownOpen ?
                        <ArrowDownIcon rotate='-180deg' />
                        :
                        <ArrowDownIcon />
                    }
                </div>

                {isPriceDropdownOpen &&
                    <>
                        <div className='flex justify-center gap-x-3 mt-6 '>
                            <div className='relative'>
                                <input className='font-montserrat font-normal text-base leading-6 text-secondary w-31 h-18.5 border border-[#929292] rounded-[10px] text-center !appearance-none' type="number" value={100} />
                                <span className='font-montserrat font-normal text-base leading-6 text-secondary absolute top-6.5 left-7.5'>$</span>
                            </div>
                            <div className='relative'>
                                <input className='font-montserrat font-normal text-base leading-6 text-secondary w-31 h-18.5 border border-[#929292] rounded-[10px] text-center !appearance-none' type="number" value={5000} />
                                <span className='font-montserrat font-normal text-base leading-6 text-secondary absolute top-6.5 left-7.5'>$</span>
                            </div>
                        </div>

                        <div className='h-4 mt-7.5'>
                            <div className='w-full h-0.5 bg-[#C3C3C3]'>
                                <div className='w-1/2 h-full mx-auto bg-primary relative before:size-4 before:rounded-full before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:bg-primary after:size-4 after:rounded-full after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:bg-primary'>
                                </div>
                            </div>
                        </div>
                    </>
                }

            </div>

        </div>
    )
}

export default ProductSideBar