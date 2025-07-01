import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {
    // const [isHovered, setIsHovered] = useState(false)
    // const Service = () => {
    //     return (
    //         <div className="serviceContainer">
    //             <Link to='/CityRides'>City Rides</Link>
    //             <Link to='/HireAVehicle'>Hire a veichle</Link>
    //             <Link to='/BookTransportationVehicle'>Book Transportation Vehicle</Link>
    //         </div>
    //     )
    // }
    
    return (
        <>
            <nav className="NavBar">
                <div className="Scontainer1">
                    <Link to='/'>B-Transport</Link>
                    <p className="Tagline">From Passengers to Parcels, We Move It All</p>
                </div>

                <div className="Scontainer2">
                    {/* <Link to='/Services' onMouseEnter={() => setIsHovered(true)}
                        >Services</Link> */}
                    <a href="#Service">Services</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contacts</a>
                    <Link to='/Login'>Login/SignUp</Link>
                </div>
            </nav>

            {/* {isHovered ? <Service /> : ''} */}
        </>
    )
}

export default Navbar