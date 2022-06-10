import React from 'react'
import AboutMe from '../components/Aboutme'
import Card from '../components/Card'
import Header from '../components/Header'
import Skills from '../components/Skills'
import Contato  from '../components/Contact'

function index() {
  return (
    <div className='w-screen h-screen' >
      <Header/>
      <AboutMe/>
      <Skills/>
      <Card />
      <Contato/>
    </div>
  )
}

export default index