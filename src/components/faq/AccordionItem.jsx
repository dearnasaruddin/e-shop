import React from 'react'
import ArrowDownIcon from '../../icons/ArrowDownIcon'

const AccordionItem = ({ title, content, onToggle, isOpen }) => {
    return (
        <div onClick={onToggle} className='w-full py-8 pl-12  bg-white rounded-[25px] text-secondary cursor-pointer'>

            <button className='w-full flex items-center gap-x-8 font-poppins font-semibold text-2xl leading-7.5 text-left cursor-pointer'>
                <span className={`flex justify-center items-center size-8 rounded-full duration-300 border border-primary ${isOpen ? 'bg-transparent' : 'bg-primary'} `}>{isOpen ? <ArrowDownIcon color='#FF624C' width='14' height='14' /> : <ArrowDownIcon color='#ffffff' rotate='-90deg' width='14' height='14' />}</span>
                {title}
            </button>

            {isOpen && <p className='max-w-179 ml-16 pb-1 pt-4 font-montserrat font-normal text-xl leading-7.5'>{content}</p>}

        </div>
    )
}

export default AccordionItem