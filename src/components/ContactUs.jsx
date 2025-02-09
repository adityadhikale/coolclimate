import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { dataDetails } from "../data/data.jsx";
import Modal from "../components/Modal"; // Reusing your existing modal

const ContactUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container mx-auto px-6 py-15 pt-25">
      <h2 className="text-3xl font-bold text-center text-blue-600">
        Contact Us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section - Contact Info & Map */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Our Location</h3>
          <div className="border rounded-lg overflow-hidden shadow-md">
            <iframe
              id="location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.553092388979!2d79.29668407468637!3d19.943229024176798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd2d52cad9cbc39%3A0xaaca3dbd3a893474!2sDadmahal%20ward%2C%20near%20shalwan%20budhha%20vihar!5e0!3m2!1sen!2sin!4v1706634953914!5m2!1sen!2sin"
              loading="lazy"
              className="w-full h-60"
            ></iframe>
          </div>

          {/* Contact Details */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Get in Touch</h3>
            <p className="text-gray-600">
              In case of any queries regarding our products or services, kindly fill in the form to
              request a callback or call us at:
            </p>
            <div className="mt-4 space-y-3">
              <div className="flex items-center text-gray-700">
                <Phone className="w-5 h-5 text-blue-500 mr-3" />
                <span>{dataDetails.contactUs.phoneNumber[0]}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Mail className="w-5 h-5 text-blue-500 mr-3" />
                <a href={`mailto:${dataDetails.contactUs.emailId[0]}`} className="hover:text-blue-500">
                  {dataDetails.contactUs.emailId[0]}
                </a>
              </div>
              <div className="flex items-center text-gray-700">
                <MapPin className="w-5 h-5 text-blue-500 mr-3" />
                <span>{dataDetails.contactUs.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Open Modal for Callback */}
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Request a Callback</h3>
          <p className="text-gray-600 text-center mb-6">
            Fill out the form and we’ll get back to you as soon as possible.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition"
          >
            Open Request Form
          </button>
        </div>
      </div>

      {/* Callback Request Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default ContactUs;
