import React from 'react'
import Container from './commonLayouts/Container'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <div className='mt-8'>
            <Container>
                <Link to={'/'}><img src="banner.webp" alt="" /></Link>
            </Container>
        </div>
    )
}

export default Banner