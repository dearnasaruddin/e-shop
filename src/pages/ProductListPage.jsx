import React, { useEffect, useRef, useState } from 'react'
import Container from '../components/commonLayouts/Container'
import dummyProducts from '../dummyData/dummyProductsData'
import { IoGridOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import ArrowDownIcon from '../icons/ArrowDownIcon';
import ProductSideBar from '../components/productSideBar/ProductSideBar';
import ProductLayout from '../components/commonLayouts/ProductLayout'
import Pagination from '../components/Pagination';

const ProductListPage = () => {

  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false)
  const [isPriceDropdownOpen, setIsPriceDropdownOpen] = useState(false)
  const [gridView, setGridView] = useState(true)
  const [listView, setListView] = useState(false)
  const [filterDropdownText, setFilterDropdownText] = useState('')
  const [priceDropdownText, setPriceDropdowntext] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const filterDropdownRef = useRef(null)
  const priceDropdownRef = useRef(null)
  const itemPerPage = 16

  const handleView = (value) => {
    if (value == 'list') {
      setListView(true)
      setGridView(false)
    } else {
      setGridView(true)
      setListView(false)
    }
  }

  const handlePriceDropdown = (value) => {
    setPriceDropdowntext(value)
    setIsPriceDropdownOpen(false)
  }
  const handleFilterDropdown = (value) => {
    setFilterDropdownText(value)
    setIsFilterDropdownOpen(false)
  }


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (priceDropdownRef.current && !priceDropdownRef.current.contains(e.target)) {
        setIsPriceDropdownOpen(false)
      }
      if (filterDropdownRef.current && !filterDropdownRef.current.contains(e.target)) {
        setIsFilterDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  const dummyProductList = []

  let id = 0
  for (let i = 1; i <= 32; i++) {
    for (let j = 0; j < dummyProducts.length; j++) {
      id++
      dummyProductList.push(
        {
          id: id,
          catagory: dummyProducts[j].catagory,
          title: dummyProducts[j].title,
          rating: dummyProducts[j].rating,
          totalRating: dummyProducts[j].totalRating,
          price: dummyProducts[j].price,
          discount: dummyProducts[j].discount,
          originalPrice: dummyProducts[j].originalPrice,
          productImage: dummyProducts[j].productImage,
        }
      )
    }
  }

  const currentProducts = dummyProductList.slice((currentPage * itemPerPage) - itemPerPage, currentPage * itemPerPage)

  return (
    <div className='mt-4 lg:mt-16 mb-10 lg:mb-20'>
      <Container>
        <div className='flex gap-x-6.5'>
          {/* ================ LeftSideBar for desktop ================ */}
          <div className='max-lg:hidden lg:max-w-89'>
            <ProductSideBar />
          </div>


          {/* Right Part */}
          <div className='grow'>
            <div className='lg:pl-6'>
              <h2 className='font-poppins font-semibold text-3xl md:text-4xl lg:leading-11.5 text-secondary'>Products</h2>
              <div className='lg:flex items-center justify-between mt-2 lg:mt-4 mb-4 lg:mb-12'>
                <p className='font-montserrat font-normal text-base leading-6 text-secondary'>Showing {(currentPage * itemPerPage) - itemPerPage + 1} - {currentPage * itemPerPage} of {dummyProductList.length} results.</p>
                
                {/* ================ Left sidebar in middle for Mobile ================ */}
                <div className='lg:hidden'>
                  <ProductSideBar />
                </div>

                <div className='flex max-sm:justify-between items-center lg:gap-x-12.5'>
                  {/* ========== Filter option ========== */}
                  <div className='relative lg:after:w-[1px] lg:after:h-8 after:bg-[#CBCBCB] after:absolute after:top-1/2 after:-right-6  after:-translate-1/2'>
                    <div className='flex items-center lg:gap-x-4'>
                      <p className='font-montserrat font-normal text-base leading-6 text-secondary max-sm:hidden'>Sort by</p>
                      <div className=' lg:w-38 relative cursor-pointer'>
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
                        <div onClick={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)} className="relative flex justify-between items-center gap-x-1 lg:gap-x-2 capitalize">
                          {filterDropdownText ?
                            <>
                              <span className='font-montserrat font-semibold lg:font-bold text-sm lg:text-base leading-6 text-primary'>{filterDropdownText}</span>
                              <ArrowDownIcon />
                            </>
                            :
                            setFilterDropdownText('Popularity')
                          }

                        </div>

                        {/* ====== options ====== */}
                        {isFilterDropdownOpen &&
                          <ul ref={filterDropdownRef} className='lg:w-[110%] absolute top-6 lg:top-8 lg:-left-3 py-1 bg-white border border-gray-300 z-10 shadow-xl'>

                            <li onClick={() => handleFilterDropdown('Popularity')} className='font-montserrat font-normal text-sm lg:text-base capitalize whitespace-nowrap flex items-center gap-2 px-2.5 py-2 hover:bg-gray-100 hover:text-primary hover:font-medium cursor-pointer'>Popularity</li>
                            <li onClick={() => handleFilterDropdown('New Product')} className='font-montserrat font-normal text-sm lg:text-base capitalize whitespace-nowrap flex items-center gap-2 px-2.5 py-2 hover:bg-gray-100 hover:text-primary hover:font-medium cursor-pointer'>New Product</li>
                          </ul>
                        }
                      </div>

                    </div>
                  </div>


                  {/* ========== Filter by price option ========== */}
                  <div className='relative lg:after:w-[1px] lg:after:h-8 after:bg-[#CBCBCB] after:absolute after:top-1/2 after:-right-6 after:-translate-y-1/2'>

                    <div className='lg:w-54 relative cursor-pointer'>
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
                      <div onClick={() => setIsPriceDropdownOpen(!isPriceDropdownOpen)} className="relative flex justify-between items-center gap-x-1 lg:gap-x-2 capitalize">
                        {priceDropdownText ?
                          <>
                            <span className='font-montserrat font-semibold lg:font-bold text-sm lg:text-base leading-6 text-primary'>{priceDropdownText}</span>
                            <ArrowDownIcon />
                          </>
                          :
                          setPriceDropdowntext('Price Low-to-High')
                        }

                      </div>

                      {/* ====== options ====== */}
                      {isPriceDropdownOpen &&
                        <ul ref={priceDropdownRef} className='w-[110%] absolute top-6 lg:top-10 -left-3 py-1 bg-white border border-gray-300 z-10 shadow-xl'>
                          <li onClick={() => handlePriceDropdown('Price Low-to-High')} className='font-montserrat font-normal text-sm lg:text-base capitalize whitespace-nowrap flex items-center gap-2 px-2.5 py-2 hover:bg-gray-100 hover:text-primary hover:font-medium cursor-pointer'>Price Low-to-High</li>
                          <li onClick={() => handlePriceDropdown('Price Hight-to-Low')} className='font-montserrat font-normal text-sm lg:text-base capitalize whitespace-nowrap flex items-center gap-2 px-2.5 py-2 hover:bg-gray-100 hover:text-primary hover:font-medium cursor-pointer'>Price Hight-to-Low</li>
                        </ul>
                      }
                    </div>

                  </div>

                  <div className='flex items-center gap-x-2 lg:gap-x-3'>
                    <div onClick={() => handleView('grid')} className='cursor-pointer'><IoGridOutline className={`text-xl lg:text-2xl ${gridView ? 'text-primary' : 'text-[#CBCBCB]'} `} /></div>
                    <div onClick={() => handleView('list')} className='cursor-pointer'><FaBars className={`text-xl lg:text-2xl ${listView ? 'text-primary' : 'text-[#CBCBCB]'} `} /></div>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= Product Showcasing ================= */}
            <div className='w-full'>
              <div className='flex max-sm:gap-1 flex-wrap'>
                {currentProducts.map((item) => (
                  gridView ?
                    <div key={item.id} className='max-w-[49%] lg:max-w-71'>
                      <ProductLayout productImage={item.productImage} catagory={item.catagory} title={item.title} rating={item.rating} totalRating={item.totalRating} price={item.price} discount={item.discount} originalPrice={item.originalPrice} />
                    </div>
                    :
                    <div className='w-full'>
                      <ProductLayout productImage={item.productImage} catagory={item.catagory} title={item.title} rating={item.rating} totalRating={item.totalRating} price={item.price} discount={item.discount} originalPrice={item.originalPrice} listView={true} />
                    </div>
                ))}
              </div>

              {/* Pagination */}
              <div className='mt-8 lg:mt-20'>
                <Pagination totalItems={dummyProductList.length} itemPerPage={itemPerPage} currentPage={currentPage} onPageChange={setCurrentPage} />
              </div>
            </div>

          </div>

        </div>
      </Container>
    </div>
  )
}

export default ProductListPage