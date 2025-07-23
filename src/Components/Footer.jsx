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
              <li><Link to="/CityRides">Book a Cab</Link></li>
              <li><Link to="/HireAVehicle">Private Vehicle</Link></li>
              <li><Link to="/BookTransportationVehicle">Transport/Carriage</Link></li>
            </ul>
          </div>
          <div className="fAboutCont">
            <h2>About</h2>
            <ul>
              <li><Link to="/Company">Company</Link></li>
              <li><Link to="/Blog">Blog</Link></li>
            </ul>
          </div>
          <div className="fContactCont">
            <h2>Contact</h2>
            <ul>
              <li><Link to="/Help">Help/FAQ</Link></li>
              <li><a href="mailto:b-transportcontact@gmail.com">Mail</a></li>
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