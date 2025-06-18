import React from 'react'
import Banner from '../components/Banner'
import Facility from '../components/Facility'
import FeaturedProducts from '../components/FeaturedProducts'
import OfferSection from '../components/OfferSection'
import NewProducts from '../components/NewProducts'
import BestSeller from '../components/BestSeller'
import Faq from '../components/faq/Faq'

const HomePage = () => {
  return (
    <>
      <Banner />
      <Facility />
      <FeaturedProducts/>
      <OfferSection/>
      <NewProducts/>
      <BestSeller/>
      <Faq/>
    </>
  )
}

export default HomePage