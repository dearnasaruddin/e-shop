import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/commonLayouts/Container'
import CartItem from '../components/CartItem'
import Button from '../components/Button'
import Facility from '../components/Facility'

const CartPage = () => {
    return (
        <>
            <div className='pb-6 lg:pb-25 border-b border-[#CBCBCB]'>
                <Container>
                    <div>
                        {/* ====== Breadcrumb ====== */}
                        <ul className='flex gap-x-6 lg:gap-x-9.5 font-montserrat font-normal text-base leading-6 mb-8 lg:mb-12 mt-6 lg:mt-16'>
                            <li><Link className='relative after:absolute after:top-1/2 after:-right-3 lg:after:-right-4.5 after:-translate-y-1/2 after:w-[1px] after:h-4.5 after:bg-secondary' to={'/'}>Home</Link></li>
                            <li><Link className='font-bold' to={'/cart'}>Cart</Link></li>
                        </ul>
                        <h1 className='font-poppins font-bold text-3xl lg:text-[56px] lg:leading-17 text-secondary max-lg:mb-6'>Your Cart</h1>
                        <div className='max-lg:hidden flex max-xl:justify-between py-3 lg:py-8 pl-4 lg:pl-10 xl:pl-14 max-lg:pr-4 lg:max-xl:pr-10 bg-[#F4F4F4] font-montserrat font-bold text-base leading-6 uppercase text-secondary rounded-lg lg:rounded-2xl mt-7 mb-8'>
                            <h6 className='lg:max-xl:grow-2'>PRODUCT</h6>
                            <h6 className='xl:ml-152 grow-1'>PRICE</h6>
                            <h6 className='xl:ml-42.5 grow-1'>QTY</h6>
                            <h6 className='xl:ml-51'>TOTAL</h6>
                        </div>
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <div className='flex justify-between items-center max-md:gap-3 flex-wrap'>
                            <div className='relative max-md:w-full'>
                                <input type="text" className='w-full xl:w-154.5 py-4 lg:py-9 max-xl:pl-3 xl:pl-9 max-lg:pr-30 lg:pr-48 border border-[#CBCBCB] rounded-[10px] font-montserrat font-normal text-sm lg:text-base leading-6 text-[#646464]' placeholder='Enter coupon code (ex: FIRSTPAY)' />
                                <button className='absolute top-1/2 -translate-y-1/2 right-3 lg:right-9 font-poppins font-semibold text-base lg:text-xl lg:leading-7.5 text-secondary underline cursor-pointer'>Apply Code</button>
                            </div>
                            <div className='py-1.5 lg:py-8 px-4 xl:px-9 max-md:w-full flex md:gap-x-6 xl:gap-x-44 justify-between items-center bg-[#F4F4F4] rounded-[10px]'>
                                <h4 className='uppercase grow font-montserrat font-bold text-base leading-6 text-secondary'>Sub Total</h4>
                                <div className='flex max-lg:flex-col lg:gap-x-2 xl:gap-x-6'>
                                    <h5 className='font-poppins font-semibold text-xl lg:text-2xl lg:leading-7.5 text-primary'>$7,733.00</h5>
                                    <p className='font-montserrat font-normal text-sm leading-5 text-secondary place-self-end mb-0.5'>( excl. shipping fee )</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex max-sm:items-center gap-x-4 md:max-xl:gap-x-0 justify-center md:justify-end max-md:py-4 md:mt-4 lg:mt-8'>
                           <Link to={'/product-list'}><Button content='Continue Shopping' className='bg-transparent text-secondary font-poppins font-semibold' /></Link>
                           <Link to={'/checkout'}><Button content='Checkout' /></Link>
                        </div>
                    </div>
                </Container>
            </div>
            <div>
                <Container>
                    <Facility />
                </Container>
            </div>
        </>
    )
}

export default CartPage