import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Login from './Login';


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

    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const navigate = useNavigate();

    const goToSection = (id) => {
        navigate('/', { state: { scrollTo: id } });
    }
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
                    <button onClick={() => goToSection('Service')}>Services</button>
                    <button onClick={() => goToSection('about')}>About</button>
                    <button onClick={() => goToSection('contact')}>Contact</button>
                    <button onClick={() => setIsLoginOpen(true)}>Login/SignUp</button>
                </div>
                <Login
                    isOpen={isLoginOpen}
                    onclose={() => setIsLoginOpen(false)}
                />
            </nav>

            {/* {isHovered ? <Service /> : ''} */}
        </>
    )
}

export default Navbar