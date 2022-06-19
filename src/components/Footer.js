import React from 'react'
import photo3 from '../home photo.png'

function Footer() {
  return (
    <div>
        <div class="card bg-info text-white">
  <img src={photo3} style={{width: "100%", height: "300px"}} class="card-img" alt={photo3} />
  <div className="card-img-overlay">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text">Last updated 3 mins ago</p>
  </div>
</div>
    </div>
  )
}

export default Footer