import React from 'react'
import InputBox from '../InputBox'
import OrderSummary from './OrderSummary'

const CheckoutInformation = () => {
    return (
        < div >
            <h3 h3 className='font-poppins font-semibold text-4xl leading-11.5 text-secondary mb-10' > Billing Details</h3 >
            <div className='w-216'>
                <div className='flex gap-x-4'>
                    <div className='grow'>
                        <InputBox label='First Name' required={true} placeholder='Amelia Robert' />
                    </div>
                    <div className='grow'>
                        <InputBox label='Last Name' required={true} placeholder='Watson' />
                    </div>
                </div>
                <div className='flex gap-x-4 my-8'>
                    <div className='grow'>
                        <InputBox label='Phone Number' required={true} placeholder='+123 456 7890' type='number' />
                    </div>
                    <div className='grow'>
                        <InputBox label='Email Address' required={true} placeholder='amelia.watson@eshop.com' type='email' />
                    </div>
                </div>
                <div>
                    <InputBox label='Address' required={true} placeholder='Home Address, Auxiliary St. 12345, Anywhere State' />
                </div>
                <div className='flex gap-x-4 mt-8'>
                    <div className='grow'>
                        <InputBox label='Country' required={true} placeholder='Indonesia' />
                    </div>
                    <div className='grow'>
                        <InputBox label='State' required={true} placeholder='Kalimantan Timur' />
                    </div>
                </div>
                <div className='flex gap-x-4 my-8'>
                    <div className='grow'>
                        <InputBox label='City' required={true} placeholder='Samarinda' />
                    </div>
                    <div className='grow'>
                        <InputBox label='ZIP Code' placeholder='555555' />
                    </div>
                </div>
                <div>
                    <InputBox label='Order Notes' placeholder='Enter your order notes ...' textArea={true} minHeight='190px' />
                </div>
            </div>
        </div >



    )
}

export default CheckoutInformation