import React from 'react'
import AboutMe from '../components/Aboutme'
import Header from '../components/Header'
import Skills from '../components/Skills'

function index() {
  return (
    <div className='w-screen h-screen' >
      <Header/>
      <AboutMe/>
      <Skills/>
    </div>
  )
}

export default index