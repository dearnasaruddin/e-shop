import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from './commonLayouts/Container'
import ProductLayout from './commonLayouts/ProductLayout'
import { Link } from 'react-router-dom'
import LongArrowRight from '../icons/LongArrowRight';
import ArrowDownIcon from '../icons/ArrowDownIcon'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", justifyContent: 'center', alignItems: 'center', color: '#303030', fontSize: '10px', width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #303030', zIndex: '5', right: '-40px' }}
      onClick={onClick}
    > <ArrowDownIcon rotate= '270deg'/> </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", justifyContent: 'center', alignItems: 'center', color: '#303030', fontSize: '10px', width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #303030', zIndex: '5', left: '-40px', }}
      onClick={onClick}
    ><ArrowDownIcon rotate= '90deg' /></div>
  );
}


const FeaturedProducts = () => {

  const dummyProducts = [
    {
      catagory: 'phone',
      title: 'JPhone 13 High Quality Value Buy Best Cam...',
      rating: 5,
      totalRating: 50,
      price: '999.00',
      discount: false,
      originalPrice: false,
      productImage: 'images/phone.webp'
    },
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

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };


  return (
    <Container>
      <div>
        <div className="flex justify-between mb-12">
          <h2 className='font-poppins font-semibold text-[36px] text-secondary leading-11.5'>Featured Products</h2>
          <Link to={'#'} className='self-end mb-0.5 flex items-center gap-x-4 text-primary font-montserrat font-bold text-base leading-6'>View All<LongArrowRight /></Link>
        </div>
        <div className="px-10">
          <Slider className='featured' {...settings}>
            {dummyProducts.map((item, index) => (
              <ProductLayout key={index} catagory={item.catagory} title={item.title} rating={item.rating} totalRating={item.totalRating} price={item.price} discount={item.discount} originalPrice={item.originalPrice} productImage={item.productImage} />
            ))}
          </Slider>
        </div>
      </div>
    </Container>
  )
}

export default FeaturedProducts