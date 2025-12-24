import React from 'react'
import HeroSection from '../features/HeroSection'
import AboutSection from '../features/AboutSection'
import WhyFitness from '../features/WhyFitness'
import MissionVision from '../features/MissionVision'
import TestimonialsSection from '../features/TestimonialsSection'

const Home = () => {
  return (
    <>
        <HeroSection/>
        <AboutSection/>
            <WhyFitness />
            <MissionVision />
            <TestimonialsSection />
    </>
  )
}

export default Home