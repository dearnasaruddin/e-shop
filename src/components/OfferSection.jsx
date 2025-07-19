import React from 'react'
import Container from './commonLayouts/Container'
import { Link } from 'react-router-dom'

const OfferSection = () => {
    return (
        <div className='my-8 md:my-20'>
            <Container>
                <div className='md:flex justify-between items-center space-y-3'>
                    <div>
                        <Link to={'#'}><img src="images/offerOneImage.webp" alt="offerOneImage.webp" /></Link>
                    </div>
                    <div>
                        <Link to={'#'}><img src="images/offerTwoImage.webp" alt="offerTwoImage.webp" /></Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default OfferSection