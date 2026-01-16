import { useState } from 'react'
import brands from '../../dummyData/brandsData';
import { IoCheckmarkOutline } from "react-icons/io5";
import useIsDesktop from '../../hooks/useIsDesktop';

const ProductSidebarBrands = () => {
    const [isLessBrandBtn, setIsLessBrandBtn] = useState(false)
    const isDesktop = useIsDesktop()
    const slicedBrands = isDesktop ? (isLessBrandBtn ? brands : brands.slice(0, 7)) : brands

    return (
        <ul className='max-sm:w-screen max-sm:absolute max-sm:top-60 max-sm:left-1/2 max-sm:-translate-x-1/2 max-sm:z-10 max-sm:bg-[#F4F4F4] max-sm:p-5 max-sm:flex max-sm:flex-wrap max-sm:gap-x-5 mt-5 lg:pb-10 lg:border-b border-[#C3C3C3]'>
            {slicedBrands.map((item, index) => (
                <li key={index} className='flex items-center relative'>
                    <input className='appearance-none h-4 w-4.5 checked:bg-primary checked:border-none border border-secondary rounded-xs peer cursor-pointer' type="checkbox" name={item.brandName} id={item.brandName} />
                    <label htmlFor={item.brandName} className='hidden peer-checked:block absolute top-1/2 left-[8.5px]  -translate-1/2 text-[12px] text-white cursor-pointer'>
                        <IoCheckmarkOutline />
                    </label>
                    <label htmlFor={item.brandName} className='peer-checked:font-bold w-full flex items-center justify-between py-1.5 pl-1 lg:pl-2 font-montserrat font-normal text-base leading-6 cursor-pointer duration-300'>{item.brandName} <span className='font-normal'>( {item.productQuantity} )</span></label>

                </li>
            ))}
            
            <span onClick={() => setIsLessBrandBtn(!isLessBrandBtn)} className='max-lg:hidden font-montserrat font-bold text-base leading-6 text-secondary border-b border-secondary inline-block mt-5 cursor-pointer'>{isLessBrandBtn ? 'Less Brands' : 'More Brands'}</span>
        </ul>
    )
}

export default ProductSidebarBrands