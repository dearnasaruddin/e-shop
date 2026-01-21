import React from 'react'
import Container from './commonLayouts/Container'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <div className='mt-3 md:mt-8'>
            <Container>
                <Link to={'/product-list'}><img src="images/banner.webp" alt="" /></Link>
            </Container>
        </div>
    )
}

export default Banner