import React from 'react'
import Hero from '../element/Hero'
import About from '../element/About'
import Skill from '../element/Skill'
import Service from '../element/Service'
import Portfolio from '../element/Portfolio'

const Home = () => {
  return (
    <main  data-spy="scroll" data-target="#navbar-section" data-offset="0" >
      <Hero/>
      <About/>
      <Skill/>
      <Service/>
      <div style={{width :"100%"  , height : '60vh'}}></div>
      <Portfolio/>
    </main>
  )
}

export default Home