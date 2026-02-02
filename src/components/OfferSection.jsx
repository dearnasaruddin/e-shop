import React from 'react'
import Container from './commonLayouts/Container'
import { Link } from 'react-router-dom'

const OfferSection = () => {
    return (
        <div className='my-8 lg:my-20'>
            <Container>
                <div className='sm:flex sm:max-2xl:gap-4 justify-between items-center max-sm:space-y-3'>
                    <div>
                        <Link to={'/product-list'}><img src="images/offerOneImage.webp" alt="offerOneImage.webp" /></Link>
                    </div>
                    <div>
                        <Link to={'/product-list'}><img src="images/offerTwoImage.webp" alt="offerTwoImage.webp" /></Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default OfferSection