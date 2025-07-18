import React from 'react'
import Container from '../commonLayouts/Container'
import TopLeftBar from './topbarComponents/TopLeftBar'
import TopRightBar from './topbarComponents/TopRightBar'


const TopBar = () => {
  return (
    <div className='border-b border-[#CBCBCB] md:py-4 py-3'>
      <Container>
        <div className="md:flex justify-between items-center">
          <TopLeftBar />
          <TopRightBar />
        </div>
      </Container>
    </div>
  )
}

export default TopBar