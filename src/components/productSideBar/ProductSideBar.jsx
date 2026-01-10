import React, { useState } from 'react'
import ArrowDownIcon from '../../icons/ArrowDownIcon';
import ProductSidebarPriceRange from './ProductSidebarPriceRange';
import ProductSidebarBrands from './ProductSidebarBrands';
import ProductSidebarCategories from './ProductSidebarCategories';

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
                    <ProductSidebarCategories />
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
                    <ProductSidebarBrands />
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
                    <ProductSidebarPriceRange />
                }

            </div>

        </div>
    )
}

export default ProductSideBar