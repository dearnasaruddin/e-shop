import React, { useEffect, useState } from 'react'
import Container from './commonLayouts/Container'
import Button from './Button'

const SpringSale = () => {

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

    function calculateTimeLeft() {
        let saleEndDate = new Date('Jun 31, 2025 11:59 PM +06').getTime()
        let now = new Date().getTime()
        let difference = saleEndDate - now

        if (difference < 1000) {
            return { days: '00', hours: '00', minutes: '00', seconds: '00' }
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
            minutes: Math.floor(difference % (1000 * 60 * 60) / (1000 * 60)),
            seconds: Math.floor(difference % (1000 * 60) / 1000)
        }
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000);

        return () => clearInterval(timer)
    }, [])

    return (
        <div className='py-16 bg-[#F4F4F4]'>
            <Container>
                <div className='flex gap-x-31.5'>
                    <div className='mt-42.5'>
                        <h2 className='font-poppins font-bold text-[56px] leading-17 text-secondary'>Spring Sale</h2>
                        <div className='flex items-center gap-x-6 mt-10 mb-18'>
                            <div className='text-center'>
                                <h3 className='font-poppins font-semibold text-4xl leading-11.5 text-primary'>{timeLeft.days}</h3>
                                <p className='font-montserrat font-normal text-base leading-6 text-secondary mt-2'>Days</p>
                            </div>
                            <h3 className='font-poppins font-semibold text-4xl leading-11.5 text-primary place-self-start'>:</h3>
                            <div className='text-center'>
                                <h3 className='font-poppins font-semibold text-4xl leading-11.5 text-primary'>{timeLeft.hours}</h3>
                                <p className='font-montserrat font-normal text-base leading-6 text-secondary mt-2'>Hours</p>
                            </div>
                            <h3 className='font-poppins font-semibold text-4xl leading-11.5 text-primary place-self-start'>:</h3>
                            <div className='text-center'>
                                <h3 className='font-poppins font-semibold text-4xl leading-11.5 text-primary'>{timeLeft.minutes}</h3>
                                <p className='font-montserrat font-normal text-base leading-6 text-secondary mt-2'>Minutes</p>
                            </div>
                            <h3 className='font-poppins font-semibold text-4xl leading-11.5 text-primary place-self-start'>:</h3>
                            <div className='text-center'>
                                <h3 className='font-poppins font-semibold text-4xl leading-11.5 text-primary'>{timeLeft.seconds}</h3>
                                <p className='font-montserrat font-normal text-base leading-6 text-secondary mt-2'>Seconds</p>
                            </div>
                        </div>
                        <Button content='Shop Now' />
                        <div className='mt-22.5'>
                            <img className='' src="images/dotsShapeWhite.png" alt="dotsShapeWhite.png" />
                        </div>
                    </div>
                    <div></div>
                </div>
            </Container>
        </div>
    )
}

export default SpringSale