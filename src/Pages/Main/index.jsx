import React, {useEffect, useState} from 'react'
import Navbar from '../../components/Navbar'
import Main from './Main'
import About from './About'
import Services from './Services'
const Home = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Services />
      {/* <Footer /> */}
    </div>
  )
}

export default Home