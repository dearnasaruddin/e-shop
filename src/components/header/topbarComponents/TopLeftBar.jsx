import React from 'react'
import { Link } from 'react-router-dom'
import { SlLocationPin } from "react-icons/sl";
import { LiaPhoneSolid } from "react-icons/lia";

const TopLeftBar = () => {
    return (
        <div className='flex items-center gap-x-12.5 font-montserrat font-normal text-sm leading-5 text-secondary relative after:absolute after:h-8 after:w-[1px] after:left-[62%] after:top-1/2 after:-translate-y-1/2 after:bg-[#CBCBCB]'>
            <Link className='flex items-center gap-x-2' to={'https://maps.app.goo.gl/TxgJd2s37fA7iUBV7'} target='_blank'><SlLocationPin className='text-lg' />123 Main Street, Anytown USA</Link>
            <Link className='flex items-center gap-x-2' to={'tel:+1 (555) 123-4567'}><LiaPhoneSolid className='text-lg' />+1 (555) 123-4567</Link>
        </div>
    )
}

export default TopLeftBar