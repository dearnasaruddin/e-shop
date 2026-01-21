import React from 'react'
import Container from './commonLayouts/Container'
import HeadphoneIcon from '../icons/HeadphoneIcon'
import SecurityIcon from '../icons/SecurityIcon'
import DeliveryIcon from '../icons/DeliveryIcon'
import ReturnIcon from '../icons/ReturnIcon'

const Facility = () => {
    return (
        <div className='my-6 md:my-20'>
            <Container>
                <div className="flex flex-wrap md:flex-nowrap gap-y-3 justify-between items-center font-montserrat font-normal text-base leading-6 text-secondary">
                    <div className='flex items-center gap-x-2 md:gap-x-6 max-w-[49%] sm:max-md:w-2/5 md:w-auto'>
                        <HeadphoneIcon />
                        <div>
                            <h6 className='font-bold mb-0.5'>Responsive</h6>
                            <p className='text-xs sm:text-base'>Customer service available 24/7</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-x-2 md:gap-x-6 max-w-[49%] sm:max-md:w-2/5 md:w-auto'>
                        <SecurityIcon />
                        <div>
                            <h6 className='font-bold mb-0.5'>Secure</h6>
                            <p className='text-xs sm:text-base'>Certified marketplace since 2017</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-x-2 md:gap-x-6 max-w-[49%] sm:max-md:w-2/5 md:w-auto'>
                        <DeliveryIcon />
                        <div>
                            <h6 className='font-bold mb-0.5'>Shipping</h6>
                            <p className='text-xs sm:text-base'>Free, fast, and reliable worldwide</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-x-2 md:gap-x-6 max-w-[49%] sm:max-md:w-2/5 md:w-auto'>
                        <ReturnIcon />
                        <div>
                            <h6 className='font-bold mb-0.5'>Transparent</h6>
                            <p className='text-xs sm:text-base'>Hassle-free return policy</p>
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default Facility