import React from 'react'
import { Link } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  return (
    <>
      <div className="Fcontainer">
        <div className="fLogoCont">
          <Link to='/'>B-Transport</Link>
          <p className="Tagline">From Passengers to Parcels, We Move It All</p>
        </div>
        <div className="fLinkCont">
          <div className="fServiceCont">
            <h2>Our Services</h2>
            <ul>
              <li><a href="/CityRides">Book a Cab</a></li>
              <li><a href="/HireAVehicle">Private Vehicle</a></li>
              <li><a href="/BookTransportationVehicle">Transport/Carriage</a></li>
            </ul>
          </div>
          <div className="fAboutCont">
            <h2>About</h2>
            <ul>
              <li><a href="/Company">Company</a></li>
              <li><a href="/Blog">Blog</a></li>
            </ul>
          </div>
          <div className="fContactCont">
            <h2>Contact</h2>
            <ul>
              <li><a href="">Help/FAQ</a></li>
              <li><a href="">Mail</a></li>
            </ul>
          </div>
        </div>
        <div className="fSocialCont">
          <SocialIcon url="https://instagram.com" className='fIcon'/>
          <SocialIcon url="https://facebook.com" className='fIcon'/>
          <SocialIcon url="https://twitter.com" className='fIcon'/>
        </div>
      </div>
    </>
  )
}

export default Footer