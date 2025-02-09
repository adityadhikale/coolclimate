import { useState } from "react";
import { Link } from "react-router-dom"; 
import { Menu, X, Phone } from "lucide-react";
import Modal from "./Modal";
import logo from "../assets/logo.webp";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo and Brand Name */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-10 w-10" />
            <span className="text-xl font-bold text-gray-800">CoolClimate</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-blue-500">Home</Link>
            <Link to="/contact-us" className="text-gray-600 hover:text-blue-500">Contact Us</Link>
            <Link to="/about-us" className="text-gray-600 hover:text-blue-500">About Us</Link>
          </div>

          {/* Buttons */}
          <div className="hidden md:flex space-x-4">
            <button onClick={() => setIsModalOpen(true)} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Book Now
            </button>
            <a href="tel:+918668352179" className="flex items-center bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
              <Phone className="w-5 h-5 mr-2" />
              Call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-600" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-white shadow-md flex flex-col items-center space-y-3 py-4 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0 overflow-hidden"
        }`}>
          <Link to="/" className="text-gray-600 hover:text-blue-500">Home</Link>
          <Link to="/contact-us" className="text-gray-600 hover:text-blue-500">Contact Us</Link>
          <Link to="/about-us" className="text-gray-600 hover:text-blue-500">About Us</Link>
          <button onClick={() => setIsModalOpen(true)} className="w-3/4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Book Now
          </button>
          <a href="tel:+918668352179" className="flex items-center w-3/4 justify-center py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
            <Phone className="w-5 h-5 mr-2" />
            Call
          </a>
        </div>
      </nav>

      {/* Book Now Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navbar;
