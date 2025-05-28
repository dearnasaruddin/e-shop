import React from 'react'
import Container from '../commonLayouts/Container'
import TopLeftBar from './topbarComponents/TopLeftBar'
import TopRightBar from './topbarComponents/TopRightBar'


const TopBar = () => {
  return (
    <div className='border-b border-[#CBCBCB] py-5.5'>
      <Container>
        <div className="flex justify-between items-center">
          <TopLeftBar />
          <TopRightBar />
        </div>
      </Container>
    </div>
  )
}

export default TopBar