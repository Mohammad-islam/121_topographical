import React from 'react'
//import {Link} from 'react-router-dom'
import photo from '../home photo.png'

function Navbar () {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info navbar-default fixed-top">
      <a href="/">
      <img src={photo} className="my_img" alt={photo} style={{width: "100px", height: "55px"}}/>
      </a>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span >
    
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav ml-auto ">
      <a className="nav-link active text-warning" href="/">Home <span className="sr-only">(current)</span></a>
      <a className="nav-link text-warning" href="/about">About</a>
      <a className="nav-link text-warning" href="/contact">Contact</a>
      <a className="nav-link text-warning" href="/courses">Courses</a>
    </div>
  </div>
</nav>
    
  )
}
export default Navbar
