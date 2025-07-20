import React from 'react'
import Marquee from "react-fast-marquee";
import Container from './commonLayouts/Container';
import { Link } from 'react-router-dom';

const FeaturedBrands = () => {
    return (
        <div className='my-10 md:my-25'>
            <Container>
                <Marquee pauseOnHover={true} speed={80}>
                    <div className='flex items-center gap-x-18 md:gap-x-50'>
                        <div className=' max-md:max-w-24'>
                            <Link to={'https://www.samsung.com/'} target='_blank'>
                                <img src="images/samsungLogo.png" alt="samsungLogo.png" />
                            </Link>
                        </div>
                        <div className=' max-md:max-w-24'>
                            <Link to={'https://openai.com/'} target='_blank'>
                                <img src="images/openAiLogo.png" alt="openAiLogo.png" />
                            </Link>
                        </div>
                        <div className=' max-md:max-w-24'>
                            <Link to={'https://www.amazon.com/'} target='_blank'>
                                <img src="images/amazonLogo.png" alt="amazonLogo.png" />
                            </Link>
                        </div>
                        <div className=' max-md:max-w-24'>
                            <Link to={'https://www.tencent.com/'} target='_blank'>
                                <img src="images/tencentLogo.png" alt="tencentLogo.png" />
                            </Link>
                        </div>
                        <div className='mr-18 md:mr-50 max-md:max-w-24'>
                            <Link to={'https://open.spotify.com/'} target='_blank'>
                                <img src="images/spotifyLogo.png" alt="spotifyLogo.png" />
                            </Link>
                        </div>
                    </div>
                </Marquee>
            </Container>
        </div>
    )
}

export default FeaturedBrands