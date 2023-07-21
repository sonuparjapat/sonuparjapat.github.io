import React from 'react'
import { Routes,Route } from 'react-router-dom'
import About from './Home'
import Contact from './Contact'
import Home from './About'
import HomeSection from './About'
import Navbar from './Navbar'
import Projects from './Projects'
import Skills from './Skills'
import Navbar2 from "./Navbar2"
export default function AllRoutes() {
  return (
    <div>
      <Navbar2/>
{/* <Navbar/> */}
     <Routes>
        {/* <Route path="/" element={<Home/>}></Route> */}
        <Route path="/about" element={<About/>}></Route>
        <Route path="/skills" element={<Skills/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        {/* <Route path="/Resume" element={<R/>}></Route> */}
        <Route path="/projects" element={<Projects/>}></Route>
 

            
      
        </Routes>   
    </div>
  )
}
