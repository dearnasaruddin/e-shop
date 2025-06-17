import React, { useEffect, useRef, useState } from 'react'
import Container from './commonLayouts/Container'
import ProductLayout from './commonLayouts/ProductLayout'
import { Link } from 'react-router-dom'
import Button from './Button'
import ArrowDownIcon from '../icons/ArrowDownIcon'

const NewProducts = () => {
    const [isCategoriesDropdownOpen, setIsCategoriesDropdownOpen] = useState(false)
    const [categoriesDropdownText, setCategoriesDropdowntext] = useState('')
    const catagoriesDropdownRef = useRef(null)

    const dummyProducts = [
        {
            catagory: 'audio',
            title: 'WH-1000XM4 Wireless Headphones High Qu...',
            rating: 3,
            totalRating: 120,
            price: '48.00',
            discount: 60,
            originalPrice: '118.00',
            productImage: 'images/headphone.webp'
        },
        {
            catagory: 'laptop',
            title: 'S21 Laptop Ultra HD LED Screen Feature 2023 ...',
            rating: 4,
            totalRating: 16,
            price: '1250.00',
            discount: false,
            originalPrice: false,
            productImage: 'images/laptop.webp'
        },
        {
            catagory: 'camera',
            title: 'Mini Polaroid Camera for Girls with Flash Li...',
            rating: 5,
            totalRating: 70,
            price: '79.00',
            discount: false,
            originalPrice: false,
            productImage: 'images/camera.webp'
        },
        {
            catagory: 'television',
            title: 'AG OLED65CXPUA 4K Smart OLED TV New ...',
            rating: 2,
            totalRating: 20,
            price: '349.00',
            discount: false,
            originalPrice: false,
            productImage: 'images/television.webp'
        },
        {
            catagory: 'watch',
            title: 'Watch 12 High Quality Health Sensor...',
            rating: 4,
            totalRating: 20,
            price: '44.99',
            discount: 50,
            originalPrice: '89.99',
            productImage: 'images/productImage.webp'
        },
    ]
    const categories = [
        'All Categories',
        'Computers & Tablets',
        'Mobile & Accessories',
        'TV & Home Theater',
        'Audio & Headphones',
        'Cameras & Camcorders',
        'Gaming Equipment',
        'Home Appliances'
    ]
    const handleCategoriesDropdown = (value) => {
        setCategoriesDropdowntext(value)
        setIsCategoriesDropdownOpen(false)
    }

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (catagoriesDropdownRef.current && !catagoriesDropdownRef.current.contains(e.target)) {
                setIsCategoriesDropdownOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    })

    return (
        <div>
            <Container>
                <div>
                    <div className="flex justify-between items-center mb-12">
                        <h2 className='font-poppins font-semibold text-[36px] text-secondary leading-11.6'>New Products</h2>
                        <div className='flex items-center gap-x-4'>
                            <p className='font-montserrat font-normal text-base leading-6 text-secondary'>Sort by</p>
                            <div className='w-58.5 relative cursor-pointer'>
                                {/* <select
                                    className='hidden'
                                    name="country"
                                    value={selectedCountry?.value || ''}
                                    onChange={(e) => {
                                        const country = countries.find((c) => c.value === e.target.value)
                                        setSelectedCountry(country)
                                    }}
                                >
                                    {countries.map((country) => (
                                        <option value={country.value} key={country.value}>{country.name}</option>
                                    ))}
                                </select> */}


                                {/* ================ Custom Dropdown ================ */}
                                <div onClick={() => setIsCategoriesDropdownOpen(!isCategoriesDropdownOpen)} className="relative flex justify-between items-center gap-x-2 capitalize">
                                    {categoriesDropdownText ?
                                        <>
                                            <span className='font-montserrat font-bold text-base leading-6 text-primary'>{categoriesDropdownText}</span>
                                            <ArrowDownIcon />
                                        </>
                                        :
                                        setCategoriesDropdowntext(categories[0])
                                    }

                                </div>

                                {/* ====== options ====== */}
                                {isCategoriesDropdownOpen &&
                                    <ul ref={catagoriesDropdownRef} className='w-[110%] absolute top-10 -left-5 py-1 bg-white border border-gray-300 z-10 shadow-xl'>
                                        {categories.map((item, index) => (
                                            <li onClick={() => handleCategoriesDropdown(item)} key={index} className='font-montserrat font-normal text-base capitalize whitespace-nowrap flex items-center gap-2 px-5 py-2 hover:bg-gray-100 hover:text-primary hover:font-medium cursor-pointer'>{item}</li>
                                        ))}

                                    </ul>
                                }
                            </div>

                        </div>
                    </div>
                    <div className="flex gap-x-6">
                        {dummyProducts.map((item, index) => (
                            <ProductLayout key={index} catagory={item.catagory} title={item.title} rating={item.rating} totalRating={item.totalRating} price={item.price} discount={item.discount} originalPrice={item.originalPrice} productImage={item.productImage} newProduct={true} />
                        ))}
                    </div>
                    <div className='flex justify-center mt-16 mb-20'>
                        <Button content='Load More' bg='transparent' textColor='#FF624C' border='1px solid #FF624C' />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default NewProducts