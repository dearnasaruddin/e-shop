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
      className={`${className} !text-[#303030] !flex !justify-center !items-center !size-8 lg:!size-10  !rounded-full !bg-white lg:!bg-transparent !border !border-[#303030] !z-10 !text-[10px] !-right-3.5 lg:!-right-5 xl:!-right-10`}
      style={{ ...style }}
      onClick={onClick}
    > <ArrowDownIcon rotate='270deg' /> </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} !text-[#303030] !flex !justify-center !items-center !size-8 lg:!size-10 !rounded-full !bg-white lg:!bg-transparent !border !border-[#303030] !z-10 !text-[10px] !-left-3.5 lg:!-left-5 xl:!-left-10`}
      style={{ ...style }}
      onClick={onClick}
    ><ArrowDownIcon rotate='90deg' /></div>
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
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 4,
        }
      },
    ]
  };


  return (
    <section id='featured-products'>
      <Container>
        <div>
          <div className="md:flex justify-between mb-6 md:mb-12">
            <h2 className='font-poppins font-semibold text-3xl md:text-4xl mb-1 md:mb-0 text-secondary leading-11.5'>Featured Products</h2>
            <Link to={'/product-list'} className='self-end mb-0.5 flex items-center gap-x-4 text-primary font-montserrat font-bold text-base leading-6'>View All<LongArrowRight /></Link>
          </div>
          <div className="px-2 md:px-5 xl:px-10">
            <Slider className='featured' {...settings}>
              {dummyProducts.map((item, index) => (
                <ProductLayout key={index} catagory={item.catagory} title={item.title} rating={item.rating} totalRating={item.totalRating} price={item.price} discount={item.discount} originalPrice={item.originalPrice} productImage={item.productImage} featuredProducts={true} />
              ))}
            </Slider>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FeaturedProducts