import React from 'react'
import Container from '../commonLayouts/Container'
import { Link } from 'react-router-dom'
import { ImPhone } from "react-icons/im";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";

const FooterBottom = () => {
  return (
    <footer className='mt-10 md:mt-25'>
      <Container>
        <div className="flex flex-wrap md:flex-nowrap md:pb-20 border-b border-[#CBCBCB]">
          <div>
            <Link to={'/'}><img className='mt-2' src="/logo.svg" alt="logo.svg" /></Link>
            <ul className='mt-6 md:mt-39.5 font-montserrat font-normal text-base leading-5 text-secondary'>
              <li><Link className='flex items-center gap-x-3' to={"tel:+1 (555) 123-4567"}><ImPhone className='text-[#646464] text-xl' />+1 (555) 123-4567</Link></li>
              <li><Link className='flex items-center gap-x-3 my-3 leading-6' to={"mailto:information@eshop.com"}><BsFillEnvelopeFill className='text-[#646464] text-lg' />information@eshop.com</Link></li>
              <li><Link className='flex items-center gap-x-3' to={"https://maps.app.goo.gl/K4TP4oxWACSgQAka7"} target='_blank'><FaLocationDot className='text-[#646464] text-lg' />123 Main Street, Suite 105, Anytown USA</Link></li>
            </ul>
          </div>

          <div className="flex flex-wrap justify-between md:justify-start md:flex-nowrap md:gap-x-24 md:ml-42 md:mr-20 mt-6 md:mt-0">

            <div className='text-secondary'>
              <h4 className='font-poppins font-semibold text-xl leading-7.5'>Links</h4>
              <ul className='mt-3 md:mt-6 font-montserrat font-normal text-base leading-6 flex flex-col gap-y-2 md:gap-y-3'>
                <li><Link className='hover:text-primary' to={"/product-list"}>Products List</Link></li>
                <li><Link className='hover:text-primary' to={"#"}>Order Tracking</Link></li>
                <li><Link className='hover:text-primary' to={"#"}>Products Guide</Link></li>
                <li><Link className='hover:text-primary' to={"/cart"}>Shopping Cart</Link></li>
                <li><Link className='hover:text-primary' to={"#"}>Tech Blog</Link></li>
              </ul>
            </div>

            <div className='text-secondary'>
              <h4 className='font-poppins font-semibold text-xl leading-7.5'>Supports</h4>
              <ul className='mt-3 md:mt-6 font-montserrat font-normal text-base leading-6 flex flex-col gap-y-2 md:gap-y-3'>
                <li><Link className='hover:text-primary' to={"#"}>About Us</Link></li>
                <li><Link className='hover:text-primary' to={"#"}>Privacy Policy</Link></li>
                <li><Link className='hover:text-primary' to={"#"}>Return Policy</Link></li>
                <li><Link className='hover:text-primary' to={"#"}>Help Centre</Link></li>
                <li><Link className='hover:text-primary' to={"#"}>Store Locations</Link></li>
                <li><Link className='hover:text-primary' to={"#"}>Careers</Link></li>
              </ul>
            </div>

            <div className='text-secondary'>
              <h4 className='font-poppins font-semibold text-xl leading-7.5'>Categories</h4>
              <ul className='mt-3 md:mt-6 font-montserrat font-normal text-base leading-6 flex flex-col gap-y-2 md:gap-y-3'>
                <li><Link className='hover:text-primary' to={"#"}>Computers & Tablets</Link></li>
                <li><Link className='hover:text-primary' to={"#"}>Mobile Phones & Accessories</Link></li>
                <li><Link className='hover:text-primary' to={"#"}>TV & Home Theater</Link></li>
                <li><Link className='hover:text-primary' to={"#"}>Audio & Headphones</Link></li>
                <li><Link className='hover:text-primary' to={"#"}>Cameras & Camcorders</Link></li>
                <li><Link className='hover:text-primary' to={"#"}>Gaming Equipment</Link></li>
                <li><Link className='hover:text-primary' to={"#"}>Home Appliances</Link></li>
              </ul>
            </div>

          </div>

          <div className='text-secondary mt-6 md:mt-0'>
            <div>
              <h4 className='font-poppins font-semibold text-xl leading-7.5'>Payments</h4>
              <img className='mt-6' src="images/payment.png" alt="payment.png" />
            </div>
            <div className='mt-8  md:mt-18 mb-6 md:mb-0'>
              <h4 className='font-poppins font-semibold text-xl leading-7.5'>Follow Us</h4>
              <ul className='mt-3 md:mt-6 font-montserrat font-normal text-base leading-6 flex md:flex-col gap-y-2 md:gap-y-3 justify-between md:justify-start'>
                <li><Link className='hover:text-primary' to={"https://x.com/"} target='_blank'>Twitter</Link></li>
                <li><Link className='hover:text-primary' to={"https://www.instagram.com/"} target='_blank'>Instagram</Link></li>
                <li><Link className='hover:text-primary' to={"https://web.facebook.com/"} target='_blank'>Facebook</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className='flex flex-wrap md:flex-nowrap justify-center gap-y-2 md:gap-y-0 md:justify-between items-center text-[#646464] font-montserrat font-normal text-sm leading-5 pt-2 pb-5 md:pb-20'>
          <p>Copyright © 2023 E-Shop. All Rights Reserved.</p>
          <ul className='flex gap-x-5'>
            <li><Link className='hover:text-primary' to={""}>Privacy Policy</Link></li>
            <li className="relative before:absolute after:absolute before:h-3.5 after:h-3.5 before:w-[1px] after:w-[1px] before:top-1/2 after:top-1/2 before:-translate-y-1/2 after:-translate-y-1/2 before:-left-2.5 after:-right-2.5 before:bg-[#646464] after:bg-[#646464]"><Link className='hover:text-primary' to={""}>Terms & Condition</Link></li>
            <li><Link className='hover:text-primary' to={""}>Sitemap</Link></li>
          </ul>
        </div>
      </Container>
    </footer>
  )
}

export default FooterBottom