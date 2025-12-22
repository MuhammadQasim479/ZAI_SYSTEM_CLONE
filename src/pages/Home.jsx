import React from 'react'
import Hero from '../components/Home/Hero';
import Impulse from '../components/Home/Impulse';
import { Courses } from '../components/Home/Courses';
import Services from '../components/Home/Services';
import Ourteamexperts from '../components/Home/Ourteamexperts';
import ContactBanner from '../components/Home/ContactBanne';
import SocialMedia from '../components/Home/SocialMedia';
import Slider1 from '../components/Home/Slider1';
import ExpertiseSection from '../components/Home/ExpertiseSection';
import SliderSplit from '../components/Home/SliderSplit';
import Bgvideo from '../components/Home/Bgvideo';

const Home = () => {
  return (
    <div className='panel'>
        <Bgvideo />
        <Hero />
        <Impulse />
        <SliderSplit />
        <Courses />
        <Services />
        <ExpertiseSection />
        <Slider1 />
        <Ourteamexperts />
        <ContactBanner />
        <SocialMedia />
    </div>
  )
}

export default Home;