import React from 'react'
import Container from './commonLayouts/Container'
import HeadphoneIcon from '../icons/HeadphoneIcon'
import SecurityIcon from '../icons/SecurityIcon'
import DeliveryIcon from '../icons/DeliveryIcon'
import ReturnIcon from '../icons/ReturnIcon'

const Facility = () => {
    return (
        <div className='my-20'>
            <Container>
                <div className="flex justify-between items-center font-montserrat font-normal text-base leading-6 text-[#303030]">
                    <div className='flex items-center gap-x-6'>
                        <HeadphoneIcon />
                        <div>
                            <h6 className='font-bold mb-0.5'>Responsive</h6>
                            <p>Customer service available 24/7</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-x-6'>
                        <SecurityIcon />
                        <div>
                            <h6 className='font-bold mb-0.5'>Secure</h6>
                            <p>Certified marketplace since 2017</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-x-6'>
                        <DeliveryIcon />
                        <div>
                            <h6 className='font-bold mb-0.5'>Shipping</h6>
                            <p>Free, fast, and reliable worldwide</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-x-6'>
                        <ReturnIcon />
                        <div>
                            <h6 className='font-bold mb-0.5'>Transparent</h6>
                            <p>Hassle-free return policy</p>
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default Facility