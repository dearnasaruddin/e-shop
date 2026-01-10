import React from 'react'
import Container from './commonLayouts/Container'
import { Link } from 'react-router-dom'
import ProductLayout from './commonLayouts/ProductLayout'
import LongArrowRight from '../icons/LongArrowRight'

const BestSeller = () => {

    const dummyProducts = [
        {
            category: 'phone',
            title: 'JPhone 13 High Quality Value Buy Best Cam...',
            rating: 5,
            totalRating: 50,
            price: '999.00',
            discount: false,
            originalPrice: false,
            productImage: 'images/phone.webp'
        },
        {
            category: 'audio',
            title: 'WH-1000XM4 Wireless Headphones High Qu...',
            rating: 3,
            totalRating: 120,
            price: '48.00',
            discount: 60,
            originalPrice: '118.00',
            productImage: 'images/headphone.webp'
        },
        {
            category: 'laptop',
            title: 'S21 Laptop Ultra HD LED Screen Feature 2023 ...',
            rating: 4,
            totalRating: 16,
            price: '1250.00',
            discount: false,
            originalPrice: false,
            productImage: 'images/laptop.webp'
        },
        {
            category: 'camera',
            title: 'Mini Polaroid Camera for Girls with Flash Li...',
            rating: 5,
            totalRating: 70,
            price: '79.00',
            discount: false,
            originalPrice: false,
            productImage: 'images/camera.webp'
        },
        {
            category: 'television',
            title: 'AG OLED65CXPUA 4K Smart OLED TV New ...',
            rating: 2,
            totalRating: 20,
            price: '349.00',
            discount: false,
            originalPrice: false,
            productImage: 'images/television.webp'
        },
        {
            category: 'watch',
            title: 'Watch 12 High Quality Health Sensor...',
            rating: 4,
            totalRating: 20,
            price: '44.99',
            discount: 50,
            originalPrice: '89.99',
            productImage: 'images/productImage.webp'
        },
    ]

    return (
        <section id='best-seller' className='my-10 md:my-20'>
            <Container>
                <div className="md:flex justify-between">
                    <div className='md:max-w-227'>
                        <div className="flex justify-between mb-8 md:mb-12">
                            <h2 className='font-poppins font-semibold text-3xl md:text-4xl text-secondary md:leading-11.5'>Best Seller</h2>
                            <Link to={'/product-list'} className='self-end mb-0.5 flex items-center gap-x-4 text-primary font-montserrat font-bold text-base leading-6'>View All<LongArrowRight /></Link>
                        </div>
                        <div className='flex flex-wrap gap-1 md:gap-x-6'>
                            {dummyProducts.map((item, index) => (
                                <div key={index} className='max-w-[49%] md:max-w-71.5'>
                                    <ProductLayout category={item.category} title={item.title} rating={item.rating} totalRating={item.totalRating} price={item.price} discount={item.discount} originalPrice={item.originalPrice} productImage={item.productImage} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='md:w-136 hidden md:block'>
                        <Link> <img className='w-full' src="images/bestSeller.webp" alt="bestSeller.webp" /></Link>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default BestSeller