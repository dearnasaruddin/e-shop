import React from 'react'

const ArrowDownIcon = ({ rotate = '0deg', color='#303030', width='16', height='16' }) => {
    return (
        <svg style={{ rotate: rotate }} className='duration-300' width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.00003 11C7.87216 11 7.74416 10.9512 7.64653 10.8535L2.64653 5.85353C2.45116 5.65816 2.45116 5.34178 2.64653 5.14653C2.84191 4.95128 3.15828 4.95116 3.35353 5.14653L8.00003 9.79303L12.6465 5.14653C12.8419 4.95116 13.1583 4.95116 13.3535 5.14653C13.5488 5.34191 13.5489 5.65828 13.3535 5.85353L8.35353 10.8535C8.25591 10.9512 8.12791 11 8.00003 11Z" fill={color} />
        </svg>
    )
}

export default ArrowDownIcon