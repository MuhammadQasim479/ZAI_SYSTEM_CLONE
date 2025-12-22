import React from 'react'
import CoreValues from '../components/About/CoreValues'
import WhyChoose from '../components/About/WhyChoose'
import WorkingProcess from '../components/About/WorkingProcess'
import AboutBusiness from '../components/About/AboutBusiness'
import WhyChosedot from '../components/About/WhyChosedot'
import Abouttabs from '../components/About/Abouttabs'
import Hero from '../components/Home/Hero'
import ContactBanner from '../components/Home/ContactBanne'
import Herobg from '../components/About/Herobg'

const About = () => {
  return (
    <div>
      <Herobg />
      <Hero />
      <WorkingProcess />
      <CoreValues />
      <WhyChoose />
      <AboutBusiness />
      <Abouttabs />
      <div className='py-10'>
      <ContactBanner />
      </div>
    </div>
  )
}

export default About