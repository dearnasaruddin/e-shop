import React from 'react'
import ArrowDownIcon from '../../icons/ArrowDownIcon'

const AccordionItem = ({ title, content, onToggle, isOpen }) => {
    return (
        <div onClick={onToggle} className='w-full py-4 md:py-8 pl-3 md:pl-12 pr-2 md:pr-0  bg-white rounded-2xl md:rounded-[25px] text-secondary cursor-pointer'>

            <button className='w-full flex items-center gap-x-3 md:gap-x-8 font-poppins font-semibold text-sm md:text-2xl md:leading-7.5 text-left cursor-pointer'>
                <span className={`max-md:place-self-start flex shrink-0 justify-center items-center size-6 md:size-8 rounded-full duration-300 border border-primary ${isOpen ? 'bg-transparent' : 'bg-primary'} `}>{isOpen ? <ArrowDownIcon color='#FF624C' width='14' height='14' /> : <ArrowDownIcon color='#ffffff' rotate='-90deg' width='14' height='14' />}</span>
                {title}
            </button>

            {isOpen && <p className='md:max-w-179 ml-10 md:ml-16 pr-2 md:pr-0 pb-1 pt-2 md:pt-4 font-montserrat font-normal text-sm md:text-xl md:leading-7.5'>{content}</p>}

        </div>
    )
}

export default AccordionItem