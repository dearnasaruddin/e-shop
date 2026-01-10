import React from 'react'
import { Link } from 'react-router-dom'
import { SlLocationPin } from "react-icons/sl";
import { LiaPhoneSolid } from "react-icons/lia";

const TopLeftBar = () => {
    return (
        <div className='flex justify-between md:justify-start items-center sm:gap-x-6 font-montserrat font-normal text-xs xxs:text-sm leading-5 text-secondary'>
            <Link className='flex items-center gap-x-2' to={'https://maps.app.goo.gl/TxgJd2s37fA7iUBV7'} target='_blank'><SlLocationPin className='text-lg hidden sm:block' />123 Main Street, Anytown USA</Link>
            <span className='h-4 md:h-8 w-[1px] bg-[#CBCBCB] inline-block xs:max-md:hidden'></span>
            <Link className='flex items-center gap-x-2' to={'tel:+1 (555) 123-4567'}><LiaPhoneSolid className='text-lg hidden sm:block' />+1 (555) 123-4567</Link>
        </div>
    )
}

export default TopLeftBar