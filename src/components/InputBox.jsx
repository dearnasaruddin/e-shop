import React, { useState } from 'react'
import { FaStarOfLife } from 'react-icons/fa6'

const InputBox = ({ label = 'Name', placeholder = 'Enter your', type = 'text', required = false, textArea = false, value, handleInputValue }) => {


    return (
        <>
            <label className='font-montserrat font-bold lg:text-xl leading-7.5 text-secondary mb-1 lg:mb-3 inline-block' htmlFor={label}>{label}{required && <span className='text-primary'> *</span>}</label> <br />
            {textArea ?
                <textarea id={label} className='w-full min-h-26 lg:min-h-48 py-2 lg:py-6 px-4 lg:px-8 font-montserrat font-normal text-base lg:text-xl leading-7.5 text-[#646464] border border-[#CBCBCB] rounded-lg lg:rounded-[10px]' type="text" placeholder={placeholder} />
                :
                <input required onChange={(e) => handleInputValue(e.target.value)} value={value} id={label} className='w-full py-2 lg:py-6 px-4 lg:px-8 font-montserrat font-normal text-base lg:text-xl leading-7.5 placeholder:text-[#646464] text-black border border-[#CBCBCB] rounded-lg lg:rounded-[10px]' type={type} placeholder={placeholder} />
            }
        </ >
    )
}

export default InputBox