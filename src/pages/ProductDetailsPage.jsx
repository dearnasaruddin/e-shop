import React, { useEffect, useRef, useState } from 'react'
import Container from '../components/commonLayouts/Container'
import dummyProducts from '../dummyData/dummyProductsData'
import ProductLayout from '../components/commonLayouts/ProductLayout'
import { Link } from 'react-router-dom'
import LongArrowRight from '../icons/LongArrowRight'
import { IoStarSharp } from 'react-icons/io5'
import EnlargeIcon from '../icons/EnlargeIcon'
import Button from '../components/Button'
import ReturnIcon from '../icons/ReturnIcon'
import DeliveryIcon from '../icons/DeliveryIcon'
import SecurityIcon from '../icons/SecurityIcon'
import HeadphoneIcon from '../icons/HeadphoneIcon'
import AddToCartIcon from '../icons/AddToCartIcon'
import { FiMinus, FiPlus } from 'react-icons/fi'
import ProductDetails from '../components/productDetails/ProductDetails'
import { IoCloseOutline } from "react-icons/io5";
import Slider from "react-slick";

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
    infinite: true,
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
        <div className='mt-16'>

          {/* ====== Path ====== */}
          <ul className='flex gap-x-9.5 font-montserrat font-normal text-base leading-6 mb-12'>
            <li><Link className='relative after:absolute after:top-1/2 after:-right-4.5 after:-translate-y-1/2 after:w-[1px] after:h-4.5 after:bg-secondary' to={'#'}>Home</Link></li>
            <li><Link className='relative after:absolute after:top-1/2 after:-right-4.5 after:-translate-y-1/2 after:w-[1px] after:h-4.5 after:bg-secondary' to={'#'}>Computers & Tablets</Link></li>
            <li><Link className='relative after:absolute after:top-1/2 after:-right-4.5 after:-translate-y-1/2 after:w-[1px] after:h-4.5 after:bg-secondary' to={'#'}>Laptop</Link></li>
            <li><Link className='font-bold' to={'#'}>NexSUS ROCK Strix Scar 17 Gaming Laptop</Link></li>
          </ul>

          <div className='flex gap-x-14 mb-13'>
            {/* ====== Product Images ====== */}
            <div>
              <div className='w-208 h-135 rounded-3xl overflow-hidden relative'>
                <span onClick={() => setActiveModal(true)}><EnlargeIcon className='absolute right-6 top-2 cursor-pointer z-20' /></span>
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
              <div className='h-20.5 w-82.5 mt-8 secondSlider overflow-hidden'>

                <Slider {...settingsTwo} asNavFor={nav1} ref={slider => (sliderRef2 = slider)}>
                  <div>
                    <div onClick={() => setModalImgPath("/images/productImage.webp")} className='flex overflow-hidden justify-center items-center mx-3'>
                      <img className='border border-[#AFAFAF] w-23.5 h-20.5 object-cover rounded-[10px] p-3' src="/images/productImage.webp" alt="productImage" />
                    </div>
                  </div>
                  <div>
                    <div onClick={() => setModalImgPath("/images/camera.webp")} className='flex overflow-hidden justify-center items-center mx-3'>
                      <img className='border border-[#AFAFAF] w-23.5 h-20.5 object-cover rounded-[10px] p-3' src="/images/camera.webp" alt="camera" />
                    </div>
                  </div>
                  <div>
                    <div onClick={() => setModalImgPath("/images/laptop.webp")} className='flex overflow-hidden justify-center items-center mx-3'>
                      <img className='border border-[#AFAFAF] w-23.5 h-20.5 object-cover rounded-[10px] p-3' src="/images/laptop.webp" alt="laptop" />
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
            {/* ====== Product Info ====== */}
            <div>
              <div className='flex items-center gap-x-2'>
                <div className="flex items-center text-2xl text-[#FED550]">
                  <IoStarSharp className='text-[#FED550]' />
                  <IoStarSharp className='text-[#FED550]' />
                  <IoStarSharp className='text-[#FED550]' />
                  <IoStarSharp className='text-[#FED550]' />
                  <IoStarSharp className='text-[#FED550]' />
                </div>
                <span className='font-montserrat font-normal text-xl leading-7.5'>( 142 )</span>
              </div>
              <h1 className='font-poppins font-semibold text-4xl leading-11.5 text-secondary mt-4 pb-6 border-b border-[#CBCBCB]'>NexSUS ROCK Strix Scar 17 Gaming Laptop 15.7” 1TB SSD 16GB RAM Pro</h1>
              <div className='flex gap-x-4.5 mt-6 mb-12'>
                <p className='font-poppins font-bold text-primary text-[56px] leading-17'>$2,999.99</p>
                <span className='self-end font-montserrat font-normal text-xl leading-7.5 text-[#979797] line-through mb-4'>$5,499.99</span>
              </div>
              <ul className='font-poppins font-normal text-xl leading-7.5 text-secondary'>
                <li className='mb-4'><span className='w-42.5 inline-block font-semibold'>Brand</span>NexSUS Tech Company</li>
                <li className='mb-4'><span className='w-42.5 inline-block font-semibold'>Size</span>15.7 x 11.1 x 1.0 inches (W x D x H)</li>
                <li className='mb-4'><span className='w-42.5 inline-block font-semibold'>Weight</span>6.28 pounds</li>
                <li className='mb-4'><span className='w-42.5 inline-block font-semibold'>Delivery</span>Worldwide</li>
              </ul>
              {/* variant */}
              <div className='flex gap-x-23.5'>
                <div className='font-poppins text-xl leading-7.5 text-secondary font-semibold'>Variant</div>
                <div className='flex flex-wrap gap-x-1 gap-y-2'>
                  <Button content='Off White' paddingX='32' textSize='16' leading='24' bg='transperant' textColor='#303030' radius='5' border='1px solid #979797' />
                  <Button content='Space Gray' paddingX='32' textSize='16' leading='24' bg='transperant' textColor='#FF624C' radius='5' border='1px solid #FFB0A5' />
                  <Button content='Jet Black' paddingX='32' textSize='16' leading='24' bg='transperant' textColor='#303030' radius='5' border='1px solid #979797' />
                  <Button content='Cinnamon Red' paddingX='32' textSize='16' leading='24' bg='transperant' textColor='#CBCBCB' radius='5' border='1px solid #CBCBCB' />
                </div>
              </div>
            </div>
          </div>

          <div className='flex justify-between'>
            {/* Facilitys */}
            <div className="flex gap-x-12 items-center font-montserrat font-normal text-base leading-6 text-secondary">
              <div className='flex items-center gap-x-6'>
                <DeliveryIcon />
                <div>
                  <h6 className='font-bold mb-0.5'>Free Shipping</h6>
                  <p>Worldwide available</p>
                </div>
              </div>
              <div className='flex items-center gap-x-6'>
                <SecurityIcon />
                <div>
                  <h6 className='font-bold mb-0.5'>100% Guaranteed</h6>
                  <p>Receive product first</p>
                </div>
              </div>
              <div className='flex items-center gap-x-6'>
                <ReturnIcon />
                <div>
                  <h6 className='font-bold mb-0.5'>Return Available</h6>
                  <p>See return policy</p>
                </div>
              </div>
            </div>
            {/* Add to cart */}
            <div className='flex items-center gap-x-21'>
              <div className='flex gap-19 items-center'>
                <button onClick={() => handleQuantity('minus')} className='size-14 rounded-full hover:bg-[#F4F4F4] text-2xl flex items-center justify-center cursor-pointer'><FiMinus /></button>
                <h5 className='w-10 font-poppins font-semibold text-4xl leading-11 text-secondary'>{quantity}</h5>
                <button onClick={() => handleQuantity('plus')} className='size-14 rounded-full hover:bg-[#F4F4F4] text-2xl flex items-center justify-center cursor-pointer'><FiPlus /></button>
              </div>
              <div className='flex items-center gap-x-4'>
                <Button content='Buy Now' />
                <div className='p-4 border rounded-[10px] border-primary cursor-pointer'><AddToCartIcon className='size-7' color='#FF624c' /></div>
              </div>

            </div>
          </div>

        </div>

        {/* Product Details */}
        <div className='mt-25 pb-20 border-b border-[#CBCBCB]'>
          <ProductDetails />
        </div>
        {/* ========= Related Products ========= */}
        <div className='my-16'>
          <div className="flex justify-between items-center mb-12">
            <h2 className='font-poppins font-semibold text-[36px] text-secondary leading-11.6'>Related Products</h2>
            <Link to={'#'} className='self-end mb-0.5 flex items-center gap-x-4 text-primary font-montserrat font-bold text-base leading-6'>View All<LongArrowRight /></Link>
          </div>
          <div className="flex gap-x-6">
            {dummyProducts.map((item, index) => (
              <div key={index} className='w-71'>
                <ProductLayout catagory={item.catagory} title={item.title} rating={item.rating} totalRating={item.totalRating} price={item.price} discount={item.discount} originalPrice={item.originalPrice} productImage={item.productImage} newProduct={true} />
              </div>
            ))}
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