import footerBG from '../assets/images/more/footer-bg.png'
import footerBG2 from '../assets/images/more/28.jpg'
import logo from '../assets/images/more/logo1.png'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa';
import { FaPencil } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="pt-10 relative overflow-hidden" style={{
            backgroundImage: `url(${footerBG})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Left Section */}
                    <div>
                        <div className="flex items-center mb-4">
                            <img
                                src={logo}
                                alt="Logo"
                                className="w-12 h-12 mr-3"
                            />
                            <h2 className="lg:text-3xl text-2xl font-semibold">Espresso Emporium</h2>
                        </div>
                        <p className="text-gray-600 mb-6 lg:pr-20">
                            Always ready to be your friend. Come & contact us to share your
                            memorable moments, to share with your best companion.
                        </p>
                        <div className="flex space-x-4 mb-6">
                            <a
                                href="#"
                                className="text-2xl text-[#331A15] hover:scale-125 duration-500 transition"
                            >
                                <FaFacebook/>
                            </a>
                            <a
                                href="#"
                                className="text-2xl text-[#331A15] hover:scale-125 duration-500 transition"
                            >
                                <FaTwitter/>
                            </a>
                            <a
                                href="#"
                                className="text-2xl text-[#331A15] hover:scale-125 duration-500 transition"
                            >
                                <FaInstagram/>
                            </a>
                            <a
                                href="#"
                                className="text-2xl text-[#331A15] hover:scale-125 duration-500 transition"
                            >
                                <FaLinkedin/>
                            </a>
                        </div>
                        <div>
                            <h4 className="text-lg font-medium mb-2">Get in Touch</h4>
                            <p className="text-gray-600 flex gap-2 mt-2 items-center">
                                <FaPhone className=""/> +88 01533 333 333
                            </p>
                            <p className="text-gray-600 flex gap-2 mt-2 items-center">
                                <FaEnvelope className=""/> info@gmail.com
                            </p>
                            <p className="text-gray-600 flex gap-2 mt-2 items-center">
                                <FaPencil className=""/> 72, Wall Street,
                                King Road, Dhaka
                            </p>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div>
                        <h4 className="text-2xl font-medium mb-4">Connect with Us</h4>
                        <form>
                            <div className="grid grid-cols-1 gap-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#331A15]"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#331A15]"
                                />
                                <textarea
                                    placeholder="Message"
                                    rows="4"
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#331A15]"
                                ></textarea>
                                <div className=''>
                                    <button
                                        type="submit"
                                        className="px-6 py-2 bg-transparent border-2 border-[#331A15] text-[#3331A15] rounded-full hover:bg-[#331A15] hover:border-white hover:text-white duration-700"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* Footer Bottom */}
            <div className="relative text-center mt-10 text-white text-sm py-3" style={{
                backgroundImage: `url(${footerBG2})`,
            }}>
                <div className='absolute inset-0 top-0 left-0 bg-black opacity-70'></div>
                <span className='brightness-100'>Copyright © Espresso Emporium | All Rights Reserved</span>
            </div>
        </footer>
    );
};

export default Footer;
