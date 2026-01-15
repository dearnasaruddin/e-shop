import React, { useEffect, useRef, useState } from 'react'
import Container from '../components/commonLayouts/Container'
import ProductLayout from '../components/commonLayouts/ProductLayout'
import { Link } from 'react-router-dom'
import LongArrowRight from '../icons/LongArrowRight'
import { IoStarSharp } from 'react-icons/io5'
import EnlargeIcon from '../icons/EnlargeIcon'
import Button from '../components/Button'
import HeadphoneIcon from '../icons/HeadphoneIcon'
import AddToCartIcon from '../icons/AddToCartIcon'
import { FiMinus, FiPlus } from 'react-icons/fi'
import ProductDetails from '../components/productDetails/ProductDetails'
import { IoCloseOutline } from "react-icons/io5";
import Slider from "react-slick";
import FacilityForDetailsPage from '../components/productDetails/FacilityForDetailsPage'
import NewProducts from '../components/NewProducts'

const ProductDetailsPage = () => {

  let [activeModal, setActiveModal] = useState(false)
  let [modalImgPath, setModalImgPath] = useState(false)
  let [quantity, setQuantity] = useState(1)
  const handleQuantity = (type) => {
    if (type == 'plus') {
      quantity++
      setQuantity(quantity)
    } else {
      if (quantity > 1) {
        quantity--
        setQuantity(quantity)
      }
    }
  }
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
  };
  var settingsTwo = {

    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
  };



  return (
    <div>
      <Container>
        <div className='mt-6 lg:mt-16'>

          {/* ====== Breadcrumb ====== */}
          <ul className='flex flex-wrap gap-x-6 lg:gap-x-9.5 font-montserrat font-normal text-base leading-6 mb-4 lg:mb-12'>
            <li><Link className='relative after:absolute after:top-1/2 after:-right-3 lg:after:-right-4.5 after:-translate-y-1/2 after:w-[1px] after:h-4.5 after:bg-secondary' to={'#'}>Home</Link></li>
            <li><Link className='relative after:absolute after:top-1/2 after:-right-3 lg:after:-right-4.5 after:-translate-y-1/2 after:w-[1px] after:h-4.5 after:bg-secondary' to={'#'}>Computers & Tablets</Link></li>
            <li><Link className='relative after:absolute after:top-1/2 after:-right-3 lg:after:-right-4.5 after:-translate-y-1/2 after:w-[1px] after:h-4.5 after:bg-secondary' to={'#'}>Laptop</Link></li>
            <li><Link className='font-bold' to={'#'}>NexSUS ROCK Strix Scar 17 Gaming Laptop</Link></li>
          </ul>

          <div className='flex max-sm:flex-wrap lg:gap-x-14 lg:mb-13'>
            {/* ====== Product Images ====== */}
            <div>
              <div className='w-screen lg:w-208 lg:h-135 rounded-2xl lg:rounded-3xl lg:overflow-hidden relative'>
                <span onClick={() => setActiveModal(true)}><EnlargeIcon className='size-6 lg:size-8 absolute right-8 lg:right-6 top-2 cursor-pointer z-20' /></span>
                <Slider {...settings} asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
                  <div>
                    <div onMouseEnter={()=>setModalImgPath("/images/productImage.webp")} className='flex justify-center items-center relative'>
                      <img className='w-3/4 object-center' src="/images/productImage.webp" alt="productImage" />
                    </div>
                  </div>
                  <div>
                    <div onMouseEnter={()=>setModalImgPath("/images/camera.webp")} className='flex justify-center items-center relative'>
                      <img className='w-3/4 object-center' src="/images/camera.webp" alt="camera" />
                    </div>
                  </div>
                  <div>
                    <div onMouseEnter={()=>setModalImgPath("/images/laptop.webp")} className='flex justify-center items-center relative'>
                      <img className='w-3/4 object-center' src="/images/laptop.webp" alt="laptop" />
                    </div>
                  </div>
                </Slider>

              </div>
              <div className='lg:h-20.5 w-60 lg:w-82.5 lg:mt-8 secondSlider lg:overflow-hidden'>

                <Slider {...settingsTwo} asNavFor={nav1} ref={slider => (sliderRef2 = slider)}>
                  <div>
                    <div onClick={() => setModalImgPath("/images/productImage.webp")} className='flex overflow-hidden justify-center items-center mx-1 lg:mx-3'>
                      <img className='border border-[#AFAFAF] w-16 lg:w-23.5 lg:h-20.5 object-cover rounded-lg lg:rounded-[10px] p-1 lg:p-3' src="/images/productImage.webp" alt="productImage" />
                    </div>
                  </div>
                  <div>
                    <div onClick={() => setModalImgPath("/images/camera.webp")} className='flex overflow-hidden justify-center items-center mx-1 lg:mx-3'>
                      <img className='border border-[#AFAFAF] w-16 lg:w-23.5 lg:h-20.5 object-cover rounded-lg lg:rounded-[10px] p-1 lg:p-3' src="/images/camera.webp" alt="camera" />
                    </div>
                  </div>
                  <div>
                    <div onClick={() => setModalImgPath("/images/laptop.webp")} className='flex overflow-hidden justify-center items-center mx-1 lg:mx-3'>
                      <img className='border border-[#AFAFAF] w-16 lg:w-23.5 lg:h-20.5 object-cover rounded-lg lg:rounded-[10px] p-1 lg:p-3' src="/images/laptop.webp" alt="laptop" />
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
            {/* ====== Product Info ====== */}
            <div>
              <div className='flex items-center gap-x-2'>
                <div className="flex items-center lg:text-2xl text-[#FED550]">
                  <IoStarSharp className='text-[#FED550]' />
                  <IoStarSharp className='text-[#FED550]' />
                  <IoStarSharp className='text-[#FED550]' />
                  <IoStarSharp className='text-[#FED550]' />
                  <IoStarSharp className='text-[#FED550]' />
                </div>
                <span className='font-montserrat font-normal lg:text-xl lg:leading-7.5'>( 142 )</span>
              </div>
              <h1 className='font-poppins font-semibold text-2xl lg:text-4xl lg:leading-11.5 text-secondary mt-4 pb-2 lg:pb-6 border-b border-[#CBCBCB]'>NexSUS ROCK Strix Scar 17 Gaming Laptop 15.7” 1TB SSD 16GB RAM Pro</h1>
              <div className='flex gap-x-2 lg:gap-x-4.5 mt-2 lg:mt-6 lg:mb-12'>
                <p className='font-poppins font-bold text-primary text-2xl lg:text-[56px] lg:leading-17'>$2,999.99</p>
                <span className='self-end font-montserrat font-normal text-sm lg:text-xl lg:leading-7.5 text-[#979797] line-through mb-4'>$5,499.99</span>
              </div>
              <ul className='font-poppins font-normal lg:space-y-4 lg:mb-4 text-lg lg:text-xl lg:leading-7.5 text-secondary'>
                <li><span className='w-24 lg:w-42.5 inline-block font-semibold'>Brand</span>NexSUS Tech Company</li>
                <li><span className='w-24 lg:w-42.5 inline-block font-semibold'>Size</span>15.7 x 11.1 x 1.0 inches (W x D x H)</li>
                <li><span className='w-24 lg:w-42.5 inline-block font-semibold'>Weight</span>6.28 pounds</li>
                <li><span className='w-24 lg:w-42.5 inline-block font-semibold'>Delivery</span>Worldwide</li>
              </ul>
              {/* variant */}
              <div className='flex lg:gap-x-23.5'>
                <div className='font-poppins text-lg lg:text-xl lg:leading-7.5 text-secondary font-semibold'>Variant</div>
                <div className='flex flex-wrap gap-x-1 gap-y-2'>
                  <Button content='Off White' paddingX='32' textSize='16' leading='24' bg='transperant' textColor='#303030' radius='5' border='1px solid #979797' />
                  <Button content='Space Gray' paddingX='32' textSize='16' leading='24' bg='transperant' textColor='#FF624C' radius='5' border='1px solid #FFB0A5' />
                  <Button content='Jet Black' paddingX='32' textSize='16' leading='24' bg='transperant' textColor='#303030' radius='5' border='1px solid #979797' />
                  <Button content='Cinnamon Red' paddingX='32' textSize='16' leading='24' bg='transperant' textColor='#CBCBCB' radius='5' border='1px solid #CBCBCB' />
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-wrap-reverse justify-between max-lg:mt-6 max-lg:gap-y-6'>
            {/* Facility */}
            <FacilityForDetailsPage />
            {/* Add to cart */}
            <div className='flex flex-wrap max-sm:justify-center max-sm:w-full items-center gap-x-6 lg:gap-x-21'>
              <div className='flex lg:gap-19 items-center'>
                <button onClick={() => handleQuantity('minus')} className='lg:size-14 rounded-full hover:bg-[#F4F4F4] text-xl lg:text-2xl flex items-center justify-center cursor-pointer'><FiMinus /></button>
                <h5 className='w-10 max-sm:text-center font-poppins font-semibold text-xl lg:text-4xl lg:leading-11 text-secondary'>{quantity}</h5>
                <button onClick={() => handleQuantity('plus')} className='lg:size-14 rounded-full hover:bg-[#F4F4F4] text-xl lg:text-2xl flex items-center justify-center cursor-pointer'><FiPlus /></button>
              </div>
              <div className='flex items-center gap-x-4'>
                <Button content='Buy Now' />
                <div className='p-4 border rounded-[10px] border-primary cursor-pointer'><AddToCartIcon className='size-7' color='#FF624c' /></div>
              </div>

            </div>
          </div>

        </div>

        {/* Product Details */}
        <div className='mt-8 lg:mt-25 pb-6 lg:pb-20 border-b border-[#CBCBCB]'>
          <ProductDetails />
        </div>
        {/* ========= Related Products ========= */}
        <div className='my-8 lg:my-16'>
          <div className="flex justify-between items-center mb-12">
            <h2 className='font-poppins font-semibold text-3xl lg:text-4xl text-secondary leading-11.6'>Related Products</h2>
            <Link to={'/product-list'} className='self-end mb-0.5 flex items-center gap-x-4 text-primary font-montserrat font-bold text-base leading-6'>View All<LongArrowRight /></Link>
          </div>
          <div className="flex flex-wrap gap-x-6">
            <NewProducts />
          </div>
        </div>
      </Container>
      {/* ======== Full Screen Img Modal ======== */}
      {activeModal &&
        <div className='fixed top-0 left-0 h-screen w-full bg-black/80 flex justify-center items-center z-50'>
          <IoCloseOutline onClick={() => setActiveModal(false)} className='text-primary bg-black/40 text-4xl absolute top-10 right-10' />
          <img className='w-200 object-contain' src={modalImgPath} alt={modalImgPath} />
        </div>
      }
    </div>
  )
}

export default ProductDetailsPage