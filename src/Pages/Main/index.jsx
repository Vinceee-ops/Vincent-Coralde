import React, {useEffect, useState} from 'react'
import Navbar from '../../components/Navbar'
import Main from './Main'
import About from './About'
const Home = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      {/* <Footer /> */}
    </div>
  )
}

export default Home