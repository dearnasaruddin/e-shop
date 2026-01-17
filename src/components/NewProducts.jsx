import React, { useEffect, useRef, useState } from 'react'
import Container from './commonLayouts/Container'
import ProductLayout from './commonLayouts/ProductLayout'
import { Link, useLocation } from 'react-router-dom'
import Button from './Button'
import ArrowDownIcon from '../icons/ArrowDownIcon'
import dummyProducts from '../dummyData/dummyProductsData'
import categories from '../dummyData/categoriesData'

const NewProducts = () => {
    const [categoryArr, setCategoryArr] = useState(['All Categories'])
    const [isCategoriesDropdownOpen, setIsCategoriesDropdownOpen] = useState(false)
    const [categoriesDropdownText, setCategoriesDropdowntext] = useState('')
    const catagoriesDropdownRef = useRef(null)
    const { pathname } = useLocation()

    const handleCategoriesDropdown = (value) => {
        setCategoriesDropdowntext(value)
        setIsCategoriesDropdownOpen(false)
    }

    useEffect(() => {
        let newCategoryArr = [...categories]
        newCategoryArr.unshift('All Categories')
        setCategoryArr(newCategoryArr)
    }, [])

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
        <section id={`${pathname != '/product-details' ? 'new-products' : ''}`}>
            <Container>
                <div>
                    <div className={`${pathname == '/product-details' ? 'hidden' : 'md:flex justify-between items-center mb-6 md:mb-12'}`}>
                        <h2 className='font-poppins font-semibold text-3xl md:text-4xl mb-2.5 md:mb-0 text-secondary leading-11.6'>New Products</h2>
                        <div className='flex items-center gap-x-4'>
                            <p className='font-montserrat font-normal text-base leading-6 text-secondary'>Sort by</p>
                            <div className='md:w-58.5 relative cursor-pointer'>
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
                                        setCategoriesDropdowntext(categoryArr[0])
                                    }

                                </div>

                                {/* ====== options ====== */}
                                {isCategoriesDropdownOpen &&
                                    <ul ref={catagoriesDropdownRef} className='min-w-58 md:w-[110%] absolute top-10 -left-5 py-1 bg-white border border-gray-300 z-10 shadow-xl'>
                                        {categoryArr.map((item, index) => (
                                            <li onClick={() => handleCategoriesDropdown(item)} key={index} className='font-montserrat font-normal text-base capitalize whitespace-nowrap flex items-center gap-2 px-5 py-2 hover:bg-gray-100 hover:text-primary hover:font-medium cursor-pointer'>{item}</li>
                                        ))}

                                    </ul>
                                }
                            </div>

                        </div>
                    </div>
                    {/* ======= Product Showcasing ======= */}
                    <div className="flex flex-wrap md:flex-nowrap gap-1 md:gap-x-6">
                        {dummyProducts.map((item, index) => (
                            <div key={index} className='max-w-[49%] md:w-71 '>
                                <ProductLayout catagory={item.catagory} title={item.title} rating={item.rating} totalRating={item.totalRating} price={item.price} discount={item.discount} originalPrice={item.originalPrice} productImage={item.productImage} newProduct={true} />
                            </div>
                        ))}
                    </div>
                    {/* ======= Load More Button ======= */}
                    <div className={`flex justify-center mt-6 md:mt-16 mb-8 md:mb-20 ${pathname == '/product-details' && 'hidden'}`}>
                        <Button content='Load More'  className='bg-transparent text-primary border border-primary' />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default NewProducts