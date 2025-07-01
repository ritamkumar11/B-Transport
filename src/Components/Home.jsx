import React from 'react'
import ContForm from './ContForm'

const Home = () => {
    return (
        <>
            <div className="Container">
                <img src="/Bg_img.png" alt="Home_Page_Image" />
            </div>
            <div className='heading' id='Service'><h1>Our Services</h1></div>
            <div className="serviceContainer" >
                <a href='/CityRides' className='cR'>
                    <img src="/Taxi.jpg" alt="Taxi" />
                    <h2 className='Cty1'>Book a Cab</h2>
                    <p className="cty2">Choose Your Destination and Enjoy the Ride.</p>
                </a>
                <a href='/HireAVehicle' className='hV'>
                    <img src="/Rental_Cab.jpg" alt="Rental_Cab" />
                    <h2 className="Rntl1">Private Vehicle</h2>
                    <p className="Rntl2">Book a Car on Hourly Basis</p>
                </a>
                <a href='/BookTransportationVehicle' className='bTV'>
                    <img src="/Transport_Carriage.jpg" alt="Transport_Carriage" />
                    <h2 className="Trnsprt1">Transport/Carriage</h2>
                    <p className="Trnsprt2">Book a Carriage or Transport Service</p>
                </a>
            </div>

            <div className='heading' id='about'><h1>About</h1></div>
            <div className="AboutContainer" >
                <a href="/Company.jsx">
                    <div className="CompCont">
                        <img src="/Logo2.jpg" alt="LogoOfCompany" />
                        <h2>About B-Transport</h2>
                    </div>
                </a>
                <a href="/Blog.jsx">
                    <div className="BlogCont">
                        <img src="/Blog.jpg" alt="Blog Logo" />
                        <h2>Blogs</h2>
                    </div>
                </a>
            </div >

            <div className='heading' id='contact'><h1>Contact Us</h1></div>
            <div className="ContactContainer" >
                
                <div className="ContForm">
                    <ContForm />
                </div>

            </div>
        </>
    )
}

export default Home