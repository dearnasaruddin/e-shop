import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/commonLayouts/Container'
import CartItem from '../components/CartItem'
import Button from '../components/Button'
import Facility from '../components/Facility'

const CartPage = () => {
    return (
        <>
            <div className='pb-25 border-b border-[#CBCBCB]'>
                <Container>
                    <div>
                        {/* ====== Path ====== */}
                        <ul className='flex gap-x-9.5 font-montserrat font-normal text-base leading-6 mb-12 mt-16'>
                            <li><Link className='relative after:absolute after:top-1/2 after:-right-4.5 after:-translate-y-1/2 after:w-[1px] after:h-4.5 after:bg-secondary' to={'/'}>Home</Link></li>
                            <li><Link className='font-bold' to={'/cart'}>Cart</Link></li>
                        </ul>
                        <h1 className='font-poppins font-bold text-[56px] leading-17 text-secondary'>Your Cart</h1>
                        <div className='flex py-8 pl-14 bg-[#F4F4F4] font-montserrat font-bold text-base leading-6 uppercase text-secondary rounded-2xl mt-7 mb-8'>
                            <h6>PRODUCT</h6>
                            <h6 className='ml-152'>PRICE</h6>
                            <h6 className='ml-42.5'>QTY</h6>
                            <h6 className='ml-51'>TOTAL</h6>
                        </div>
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <div className='flex justify-between items-center'>
                            <div className='relative'>
                                <input type="text" className='w-154.5 py-9 pl-9 pr-48 border border-[#CBCBCB] rounded-[10px] font-montserrat font-normal text-base leading-6 text-[#646464]' placeholder='Enter coupon code (ex: FIRSTPAY)' />
                                <button className='absolute top-1/2 -translate-y-1/2 right-9 font-poppins font-semibold text-xl leading-7.5 text-secondary underline cursor-pointer'>Apply Code</button>
                            </div>
                            <div className='py-8 px-9 flex gap-x-44 justify-between items-center bg-[#F4F4F4] rounded-[10px]'>
                                <h4 className='uppercase font-montserrat font-bold text-base leading-6 text-secondary'>Sub Total</h4>
                                <div className='flex gap-x-6'>
                                    <h5 className='font-poppins font-semibold text-2xl leading-7.5 text-primary'>$7,733.00</h5>
                                    <p className='font-montserrat font-normal text-sm leading-5 text-secondary place-self-end mb-0.5'>( excl. shipping fee )</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-x-4 justify-end mt-8'>
                            <Button content='Continue Shopping' bg='transperant' textColor='#303030' font='Poppins' weight='600' />
                            <Button content='Update Cart' />
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