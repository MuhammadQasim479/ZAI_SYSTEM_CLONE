import React from 'react'
import Serviceshero from '../components/Services/Serviceshero'
import Servicesapproach from '../components/Services/Servicesapproach'
import FeaturesSection from '../components/Services/FeaturesSection'
import ContactBanner from '../components/Home/ContactBanne'
import SocialMedia from '../components/Home/SocialMedia'
import Heroservices from '../components/Services/Heroservices'

const Services = () => {
  return (
   <div>
    <Heroservices />
    <Serviceshero />
    <Servicesapproach />
    <FeaturesSection />
    <ContactBanner />
    <SocialMedia />
   </div>
  )
}

export default Services