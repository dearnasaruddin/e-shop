import React from 'react'
import { useLocation } from 'react-router-dom'
import Container from '../commonLayouts/Container'
import Button from '../Button'

const FooterTop = () => {

    const location = useLocation()

    return (
        <Container>
            {location.pathname == '/cart' ?
                <div className='pb-4.5 pt-20'>
                    <h3 className='font-poppins font-semibold text-4xl leading-11.5 text-secondary mb-14 text-center'>Subscribe to get our updates</h3>
                    <div className='flex justify-center gap-x-4'>
                        <input type="email" name="" id="" className='w-201.5 border border-[#CBCBCB] py-5.5 px-10 rounded-[10px] font-montserrat font-normal text-base leading-6 text-[#646464]' placeholder='Enter your email address ...' />
                        <Button content='Subscribe' paddingY='20' />
                    </div>
                </div>
                :
                <div className={`py-28.5  ${location.pathname == '/product-list' ? 'bg-[linear-gradient(270deg,_rgba(244,244,244,1)_37%,_rgba(217,217,217,1)_52%)] pr-22.5' : 'bg-[linear-gradient(90deg,_rgba(244,244,244,1)_37%,_rgba(217,217,217,1)_52%)] pl-25'}  rounded-3xl`}>
                    <div className={`${location.pathname == '/product-list' && 'max-w-123.5 ml-auto'}`}>
                        <h3 className='max-w-90 font-poppins font-semibold text-4xl leading-11.5 text-secondary'>{location.pathname == '/product-details' || location.pathname == '/contact' ? 'Get Up-to-Date Gadget Technology' : 'Get Our Updates'}</h3>
                        <p className={`max-w-118 font-montserrat font-normal text-xl leading-7.5 text-secondary ${location.pathname == '/' || location.pathname == '/product-list' ? 'mt-4 mb-8' : 'mt-6 mb-12'}`}>Browse our wide selection of electronics and find the perfect promo for you from newsletter.</p>
                        {location.pathname != '/contact' &&
                            <>
                                <input className='w-123.5 border border-[#929292] p-6 rounded-[10px] font-montserrat font-normal text-base leading-6 text-[#626262] bg-white mb-4' placeholder='Enter your email address ...' type="text" name="" id="" />
                                <br />
                            </>
                        }
                        {location.pathname == '/product-details' || location.pathname == '/contact' ?
                            <Button content='Shop Now' />
                            :
                            <Button content='Subscribe' />}
                    </div>
                </div>
            }
        </Container>
    )
}

export default FooterTop