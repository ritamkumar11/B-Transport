import React, { useEffect } from 'react'
import ContForm from './ContForm'
import { Link, useLocation } from 'react-router-dom';



const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            const e = document.getElementById(location.state.scrollTo)
            if (e) {
                e.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }, [location])

    return (
        <>
            <div className="Container">
                <img src="/Bg_img2.png" alt="Home_Page_Image" />
            </div>
            <div className='heading' id='Service'><h1>Our Services</h1></div>
            <div className="serviceContainer" >
                <Link to='/CityRides' className='cR'>
                    <img src="/Taxi.jpg" alt="Taxi" />
                    <h2 className='Cty1'>Book a Cab</h2>
                    <p className="cty2">Choose Your Destination and Enjoy the Ride.</p>
                </Link>
                <Link to='/HireAVehicle' className='hV'>
                    <img src="/Rental_Cab.jpg" alt="Rental_Cab" />
                    <h2 className="Rntl1">Private Vehicle</h2>
                    <p className="Rntl2">Book a Car on Hourly Basis</p>
                </Link>
                <Link to='/BookTransportationVehicle' className='bTV'>
                    <img src="/Transport_Carriage.jpg" alt="Transport_Carriage" />
                    <h2 className="Trnsprt1">Transport/Carriage</h2>
                    <p className="Trnsprt2">Book a Carriage or Transport Service</p>
                </Link>
            </div>

            <div className='heading' id='about'><h1>About</h1></div>
            <div className="AboutContainer" >
                <Link to="/Company">
                    <div className="CompCont">
                        <img src="/Logo2.jpg" alt="LogoOfCompany" />
                        <h2>About B-Transport</h2>
                    </div>
                </Link>
                <Link to="/Blog">
                    <div className="BlogCont">
                        <img src="/Blog.jpg" alt="Blog Logo" />
                        <h2>Blogs</h2>
                    </div>
                </Link>
            </div >

            <div className='heading' id='contact'><h1>Contact Us</h1></div>
            <div className="ContactContainer" >
                <ContForm />
            </div>
        </>
    )
}

export default Home