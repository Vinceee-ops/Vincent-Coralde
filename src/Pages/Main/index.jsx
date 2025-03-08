import React, {useEffect, useState} from 'react'
import Navbar from '../../components/Navbar'
import Main from './Main'
import About from './About'
import Services from './Services'
import Contact from './Contact'
const Home = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Services />
      <Contact />
    </div>
  )
}

export default Home