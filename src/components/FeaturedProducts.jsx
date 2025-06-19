import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from './commonLayouts/Container'
import ProductLayout from './commonLayouts/ProductLayout'
import { Link } from 'react-router-dom'
import LongArrowRight from '../icons/LongArrowRight';
import ArrowDownIcon from '../icons/ArrowDownIcon'
import dummyProducts from '../dummyData/dummyProductsData'

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