import React from 'react'
import { SwiperComp } from './Swiper'
import { About } from './About'
import { Sectionone } from './Sectionone'
import { Footer } from './Footer'
export const Home = () => {
  return (
    <div>
  
        <SwiperComp/>
        <About/>
        <hr  id="about" href=""/>
        <Sectionone/>
        <Footer/>
    </div>
  )
}
