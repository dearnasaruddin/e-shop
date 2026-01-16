import React, { useState } from 'react'
import ArrowDownIcon from '../../icons/ArrowDownIcon';
import ProductSidebarPriceRange from './ProductSidebarPriceRange';
import ProductSidebarBrands from './ProductSidebarBrands';
import ProductSidebarCategories from './ProductSidebarCategories';
import useIsDesktop from '../../hooks/useIsDesktop';

const ProductSideBar = () => {
    const isDesktop = useIsDesktop()
    const [isCategoriesDropdownOpen, setIsCategoriesDropdownOpen] = useState(isDesktop)
    const [isBrandDropdownOpen, setIsBrandDropdownOpen] = useState(isDesktop)
    const [isPriceDropdownOpen, setIsPriceDropdownOpen] = useState(isDesktop)

    const handleSidebarDropdown = (v) => {
        if (!isDesktop) {
            if (v == 'category') {
                setIsCategoriesDropdownOpen((prev)=>!prev)
                setIsBrandDropdownOpen(false)
                setIsPriceDropdownOpen(false)
            } else if (v == 'brand') {
                setIsCategoriesDropdownOpen(false)
                setIsBrandDropdownOpen((prev)=>!prev)
                setIsPriceDropdownOpen(false)
            } else {
                setIsCategoriesDropdownOpen(false)
                setIsBrandDropdownOpen(false)
                setIsPriceDropdownOpen((prev)=>!prev)
            }
        }else{
            if(v == 'category') setIsCategoriesDropdownOpen((prev)=> !prev)
            if(v == 'brand') setIsBrandDropdownOpen((prev)=> !prev)
            if(v == 'price') setIsPriceDropdownOpen((prev)=> !prev)
        }
    }

    return (
        <div className='w-full max-lg:flex max-lg:gap-6 lg:p-12 lg:rounded-3xl lg:bg-[#F4F4F4]'>

            {/* Categories */}
            <div>
                <div onClick={()=>handleSidebarDropdown('category')} className='flex items-center lg:gap-x-32.5 justify-between cursor-pointer'>
                    <h4 className='font-montserrat font-semibold lg:font-bold text-sm lg:text-xl leading-7.5 text-secondary'>Categories</h4>
                    {isCategoriesDropdownOpen ?
                        <ArrowDownIcon rotate='-180deg' />
                        :
                        <ArrowDownIcon />
                    }
                </div>
                {isCategoriesDropdownOpen &&
                    <ProductSidebarCategories />
                }
            </div>

            {/* Brands */}
            <div className='lg:mt-10'>
                <div onClick={()=>handleSidebarDropdown('brand')} className='flex items-center lg:gap-x-32.5 justify-between cursor-pointer'>
                    <h4 className='font-montserrat font-semibold lg:font-bold text-sm lg:text-xl leading-7.5 text-secondary'>Brands</h4>
                    {isBrandDropdownOpen ?
                        <ArrowDownIcon rotate='-180deg' />
                        :
                        <ArrowDownIcon />
                    }
                </div>

                {isBrandDropdownOpen &&
                    <ProductSidebarBrands />
                }
            </div>

            {/* Price */}
            <div className='lg:mt-10'>
                <div onClick={()=>handleSidebarDropdown('price')} className='flex items-center lg:gap-x-32.5 justify-between cursor-pointer'>
                    <h4 className='font-montserrat font-semibold lg:font-bold text-sm lg:text-xl leading-7.5 text-secondary'>Price</h4>
                    {isPriceDropdownOpen ?
                        <ArrowDownIcon rotate='-180deg' />
                        :
                        <ArrowDownIcon />
                    }
                </div>

                {isPriceDropdownOpen &&
                    <ProductSidebarPriceRange />
                }

            </div>

        </div>
    )
}

export default ProductSideBar