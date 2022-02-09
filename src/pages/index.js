import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

import React, { useState } from 'react'

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    console.log('Clicked')
    setIsOpen(!isOpen) 
  }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
    </>
  )
}

export default Homepage
