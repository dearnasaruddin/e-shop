import React from 'react'
import Container from '../components/commonLayouts/Container'
import { Link } from 'react-router-dom'
import { FaLocationDot } from 'react-icons/fa6'
import { BsFillEnvelopeFill } from 'react-icons/bs'
import { ImPhone } from 'react-icons/im'
import Button from '../components/Button'
import InputBox from '../components/InputBox'

const ContactPage = () => {
  return (
    <div className='mb-10 lg:mb-20'>
      <Container>
        <div className='mt-4 lg:mt-8 mb-4 lg:mb-16 rounded-2xl overflow-hidden'>
          <iframe className='w-full max-sm:h-50 sm:h-70 lg:h-90 xl:h-150' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1009.297893546715!2d-73.831222!3d40.7622149!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2600feab8eaf3%3A0xf2c8bcc288c78f3!2s123%20Main%20St%2C%20Queens%2C%20NY%2010001%2C%20USA!5e1!3m2!1sen!2sbd!4v1751622140604!5m2!1sen!2sbd" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div>
          <ul className='flex gap-x-6 lg:gap-x-9.5 font-montserrat font-normal text-base leading-6 mb-4 lg:mb-12 lg:mt-16'>
            <li><Link className='relative after:absolute after:top-1/2 after:-right-3 lg:after:-right-4.5 after:-translate-y-1/2 after:w-[1px] after:h-4.5 after:bg-secondary' to={'/'}>Home</Link></li>
            <li><Link className='font-bold' to={'/contact'}>Contact</Link></li>
          </ul>
          <div className='flex justify-between gap-10 md:gap-6 lg:gap-14 max-md:flex-wrap-reverse'>

            {/* ========== Provide Your Info ========== */}
            <div>
              <h1 className='font-poppins text-3xl lg:text-4xl lg:leading-11.5 text-secondary'>Contact Us</h1>
              <p className='font-montserrat font-normal text-base max-lg:max-w-60 lg:text-xl lg:leading-7.5 text-secondary mt-3 mb-6 lg:mb-12'>Have any questions for us? Don’t hesitate to contact us.</p>
              <div>
                <div className='mb-4 lg:mb-8 xl:w-217'>
                  <InputBox label='Name' placeholder='Amelia Robert Watson' required={true} />
                  <div className='flex gap-x-5 gap-y-3 my-3 lg:my-8 flex-wrap'>
                    <div className='grow'>
                      <InputBox label='Phone Number' placeholder='+123 456 7890' type='number' />
                    </div>
                    <div className='grow'>
                      <InputBox label='Email Address' placeholder='amelia.watson@eshop.com' required={true} type='email'/>
                    </div>
                  </div>
                  <InputBox label='Message' placeholder='Enter your message ...' required={true} textArea={true} />
                </div>
                <Button content='Submit' />
              </div>
            </div>

            {/* ========== Contact Information ========== */}
            <div>
              <div className='rounded-lg lg:rounded-3xl max-lg:p-8 lg:py-10 lg:pl-10 lg:pr-22 bg-[#F4F4F4]'>
                <h5 className='font-poppins font-semibold text-2xl leading-7.5 text-secondary'>Let’s Keep in Touch!</h5>
                <p className='max-w-117 font-montserrat font-normal text-base lg:text-xl lg:leading-7.5 text-[#616161] mt-2 lg:mt-4 mb-6 lg:mb-10'>We would love to hear from you. Contact us for
                  any inquiries you might have for us.</p>
                <ul className='font-montserrat font-bold text-sm lg:text-base leading-6 text-secondary'>
                  <li><Link className='flex items-center gap-x-6' to={"tel:+1 (555) 123-4567"}><ImPhone className='text-[#646464] text-xl' />+1 (555) 123-4567</Link></li>
                  <li><Link className='flex items-center gap-x-6 my-3 leading-6' to={"mailto:information@eshop.com"}><BsFillEnvelopeFill className='text-[#646464] text-lg' />information@eshop.com</Link></li>
                  <li><Link className='flex items-center gap-x-6' to={"https://maps.app.goo.gl/K4TP4oxWACSgQAka7"} target='_blank'><FaLocationDot className='text-[#646464] text-lg' />123 Main Street, Suite 105, Anytown USA</Link></li>
                </ul>
                <span className='font-montserrat font-bold md:text-lg lg:text-xl leading-7.5 text-secondary mt-6 lg:mt-14 mb-4 lg:mb-8 inline-block relative after:absolute after:w-full after:h-0.5 lg:after:h-1 after:bg-primary after:-bottom-1 after:left-0'>Opening Hours</span>
                <ul className='font-montserrat font-normal text-sm lg:text-base leading-6'>
                  <li><span className='font-bold mr-3'>MON to FRI:</span>08:00 AM - 04:00 PM</li>
                  <li><span className='font-bold mr-3'>SAT to SUN:</span>09:00 AM - 03:00 PM</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </div>
  )
}

export default ContactPage