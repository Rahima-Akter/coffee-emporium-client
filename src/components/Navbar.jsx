
import { useState } from 'react';
import { FaBars, FaCoffee, FaHome, FaTachometerAlt, FaTimes } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import navBg from '../assets/images/more/15.jpg'
import logo from '../assets/images/more/logo1.png'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="relative shadow-lg py-4 px-6"
        style={{
            backgroundImage: `url(${navBg})`
        }}>
            <div className="relative max-w-screen-xl mx-auto flex items-center justify-between">
                {/* Logo or Name */}
                <Link to="/" className="lg:text-2xl md:text-xl font-semibold text-white flex items-center justify-center"><img src={logo} alt="logo" className='lg:w-10 md:w-8 w-7 brightness-200'/><span className='text-yellow-400 mr-1'>Srity's</span> CoffeeEmporium</Link>

                {/* Desktop Navigation Links */}
                <div className=" hidden md:flex items-center space-x-8 text-white text-lg">
                    <NavLink
                        to="/"
                        className={({ isActive }) => `flex items-center space-x-2 hover:text-yellow-300 ${isActive ? 'text-yellow-400' : ''}`}
                    >
                        <FaHome /> <span>Home</span>
                    </NavLink>
                    <NavLink
                        to="/addcoffee"
                        className={({ isActive }) => `flex items-center space-x-2 hover:text-yellow-300 ${isActive ? 'text-yellow-400' : ''}`}
                    >
                        <FaCoffee /> <span>AddCoffees</span>
                    </NavLink>
                    <NavLink
                        to="/login"
                        className={({ isActive }) => `flex items-center space-x-2 hover:text-yellow-300 ${isActive ? 'text-yellow-400' : ''}`}
                    >
                        <FaTachometerAlt /> <span>Login</span>
                    </NavLink>
                </div>

                {/* Mobile Hamburger Menu Button */}
                <div className="md:hidden flex items-center text-white text-xl">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden flex flex-col items-center space-y-4 bg-white p-4 absolute rounded-lg w-36 h-[40vh] top-full mt-3 right-0 shadow-lg border border-t z-10 transition-transform duration-1000 ease-in-out transform translate-x-0 text-lg">
                    <NavLink to="/" className="text-black hover:underline">
                        Home
                    </NavLink>
                    <NavLink to="/addcoffee" className="text-black hover:underline">
                        Coffees
                    </NavLink>
                    <NavLink to="/login" className="text-black hover:underline">
                        Dashboard
                    </NavLink>
                </div>
            )}
        </nav>
    );
};

export default Navbar;