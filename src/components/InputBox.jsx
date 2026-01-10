import React, { useState } from 'react'
import { FaStarOfLife } from 'react-icons/fa6'

const InputBox = ({ label = 'Name', placeholder = 'Enter your', type = 'text', required = false, textArea = false, minHeight = '240px', value, handleInputValue }) => {


    return (
        <>
            <label className='font-montserrat font-bold text-xl leading-7.5 text-secondary mb-3 inline-block' htmlFor={label}>{label}{required && <span className='text-primary'> *</span>}</label> <br />
            {textArea ?
                <textarea id={label} style={{ minHeight: minHeight }} className='w-full py-6 px-8 font-montserrat font-normal text-xl leading-7.5 text-[#646464] border border-[#CBCBCB] rounded-[10px]' type="text" placeholder={placeholder} />
                :
                <input onChange={(e) => handleInputValue(e.target.value)} value={value} id={label} className='w-full py-6 px-8 font-montserrat font-normal text-xl leading-7.5 placeholder:text-[#646464] text-black border border-[#CBCBCB] rounded-[10px]' type={type} placeholder={placeholder} />
            }
        </ >
    )
}

export default InputBox