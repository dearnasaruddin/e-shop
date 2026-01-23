import React, { useEffect, useState } from 'react'
import Container from './commonLayouts/Container'
import Button from './Button'
import dummyProducts from '../dummyData/dummyProductsData'
import ProductLayout from './commonLayouts/ProductLayout'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowDownIcon from '../icons/ArrowDownIcon'
import useSaleCountdown from '../hooks/useSaleCountdown'


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} !size-8 xl:!size-17.5 !flex !justify-center !items-center !text-secondary !text-[10px] !border !border-secondary !rounded-full !z-10 !right-0 md:!-right-3.5 xl:!-right-4.5 !bg-[#F4f4f4]`}
            style={{ ...style }}
            onClick={onClick}
        > <ArrowDownIcon className='xl:size-6.5 rotate-270' /> </div>
    );
}


const SpringSale = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        nextArrow: <SampleNextArrow />,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                    dots: true
                }
            },
        ]
    };


    const { days, hours, minutes, seconds } = useSaleCountdown()


    return (
        <section id='spring-sale' className='pt-10 pb-14 md:py-16 bg-[#F4F4F4]'>
            <Container>
                <div className='md:flex gap-x-6 xl:gap-x-32'>

                    {/* ========== Counter / Timer ========== */}
                    <div className='xl:mt-42.5'>
                        <h2 className='font-poppins font-bold text-4xl xl:text-[56px] xl:leading-17 text-secondary'>Spring Sale</h2>
                        <div className='flex items-center gap-x-1 xxs:gap-x-2.5 xl:gap-x-6 mt-4 xl:mt-10 md:mb-6 xl:mb-18'>
                            <div className='text-center'>
                                <h3 className='font-poppins font-semibold text-2xl lg:text-4xl leading-11.5 text-primary'>{days}</h3>
                                <p className='font-montserrat font-normal text-base leading-6 text-secondary lg:mt-2'>Days</p>
                            </div>
                            <h3 className='font-poppins font-semibold text-2xl lg:text-4xl leading-11.5 text-primary place-self-start'>:</h3>
                            <div className='text-center'>
                                <h3 className='font-poppins font-semibold text-2xl lg:text-4xl leading-11.5 text-primary'>{hours}</h3>
                                <p className='font-montserrat font-normal text-base leading-6 text-secondary lg:mt-2'>Hours</p>
                            </div>
                            <h3 className='font-poppins font-semibold text-2xl lg:text-4xl leading-11.5 text-primary place-self-start'>:</h3>
                            <div className='text-center'>
                                <h3 className='font-poppins font-semibold text-2xl lg:text-4xl leading-11.5 text-primary'>{minutes}</h3>
                                <p className='font-montserrat font-normal text-base leading-6 text-secondary lg:mt-2'>Minutes</p>
                            </div>
                            <h3 className='font-poppins font-semibold text-2xl lg:text-4xl leading-11.5 text-primary place-self-start'>:</h3>
                            <div className='text-center'>
                                <h3 className='font-poppins font-semibold text-2xl lg:text-4xl leading-11.5 text-primary'>{seconds}</h3>
                                <p className='font-montserrat font-normal text-base leading-6 text-secondary lg:mt-2'>Seconds</p>
                            </div>
                        </div>
                        <div className='my-6 md:my-0'>
                            <Button content='Shop Now' />
                        </div>
                        <div className='md:mt-8 xl:mt-22.5 hidden md:block'>
                            <img className='md:max-xl:w-1/3' src="images/dotsShapeWhite.png" alt="dotsShapeWhite.png" />
                        </div>
                    </div>

                    {/* ========== Product Slider ========== */}
                    <div className='w-full md:max-w-4/7 xl:max-w-248 md:pl-0.5 xl:pr-4.5'>
                        <Slider className='springSale' {...settings}>
                            {dummyProducts.map((item, index) => (

                                item.discount &&
                                <div className='md:max-w-116'>
                                    <div className='mx-1 xl:mx-0'>
                                        <ProductLayout key={index} catagory={item.catagory} title={item.title} rating={item.rating} totalRating={item.totalRating} price={item.price} discount={item.discount} originalPrice={item.originalPrice} productImage={item.productImage} springSale={true} availableQuantity={item.availableQuantity} />
                                    </div>
                                </div>

                            ))}
                        </Slider>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default SpringSale