import React from 'react'
import Banner from '../components/Banner'
import Facility from '../components/Facility'
import FeaturedProducts from '../components/FeaturedProducts'
import OfferSection from '../components/OfferSection'
import NewProducts from '../components/NewProducts'
import BestSeller from '../components/BestSeller'
import Faq from '../components/faq/Faq'
import FeaturedBrands from '../components/FeaturedBrands'
import SpringSale from '../components/SpringSale'

const HomePage = () => {
  return (
    <>
      <Banner />
      <Facility />
      <FeaturedProducts/>
      <OfferSection/>
      <NewProducts/>
      <SpringSale/>
      <BestSeller/>
      <Faq/>
      <FeaturedBrands/>
    </>
  )
}

export default HomePage