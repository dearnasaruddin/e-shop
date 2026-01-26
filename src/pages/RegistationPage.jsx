import React from 'react'
import Container from '../components/commonLayouts/Container'
import InputBox from '../components/InputBox'
import Button from '../components/Button'

const RegistrationPage = () => {
    return (
        <div>
            <Container>
                <h1 className='font-poppins font-bold text-3xl lg:text-[56px] lg:leading-17 text-secondary text-center mb-6 lg:mb-20 mt-6 lg:mt-16'>Register</h1>
                <div className='max-w-148 mx-auto rounded-3xl bg-[#f4f4f4] py-12 px-9'>
                    <div>
                          <InputBox label='Email Address' type='email' placeholder='amelia.watson@eshop.com' />
                    </div>
                    <div>
                          <InputBox label='Password' type='password' placeholder='************' />
                    </div>
                    <div>
                          <InputBox label='Username' type='text' placeholder='ameliawatson' />
                    </div>
                    <Button className='w-full mt-10' content='Create Account'/>
                </div>
            </Container>
        </div>
    )
}

export default RegistrationPage