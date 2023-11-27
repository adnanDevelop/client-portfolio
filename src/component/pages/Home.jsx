import React from 'react'
import Hero from '../element/Hero'
import About from '../element/About'
import Skill from '../element/Skill'
import Service from '../element/Service'
import Portfolio from '../element/Portfolio'
import Project from '../element/Project'
import Contact from '../element/Contact'

const Home = () => {
  return (
    <main   >
      <Hero/>
      <About/>
      <Skill/>
      <Service/>
      <Portfolio/>
      <Project/>
      <Contact/>
    </main>
  )
}

export default Home