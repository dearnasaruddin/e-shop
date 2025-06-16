import React from 'react'
import Container from './commonLayouts/Container'
import { Link } from 'react-router-dom'

const OfferSection = () => {
    return (
        <div className='my-20'>
            <Container>
                <div className='flex justify-between items-center'>
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