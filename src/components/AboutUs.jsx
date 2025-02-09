import { Wrench, Users } from "lucide-react"; // Lucide React Icons
import { dataDetails } from "../data/data.jsx";
import aboutImg1 from "../assets/10.webp";
import aboutImg2 from "../assets/11.webp";

const AboutUs = () => {
  return (
    <div className="px-6 md:px-16 py-16 pt-24 bg-gray-50">
      {/* Intro Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600">
          About Cool Climate
        </h1>
        <p className="text-gray-700 mt-4 max-w-3xl mx-auto">
          {dataDetails.aboutUs.intorStart}
        </p>
      </div>

      {/* Image + Text Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <img src={aboutImg1} alt="About Cool Climate" className="rounded-lg shadow-md w-full" />
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            {dataDetails.aboutUs.startingDescription}
          </p>
        </div>
      </div>

      {/* Why Cool Climate Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-center text-blue-600">Why Choose Cool Climate?</h2>
        <div className="grid md:grid-cols-2 gap-8 mt-8">

          {/* Feature 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 flex">
            <Wrench className="text-blue-500 w-12 h-12 mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Expert Technicians</h3>
              <p className="text-gray-600 mt-2">{dataDetails.aboutUs.whyCoolClimate[0]}</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 flex">
            <Users className="text-blue-500 w-12 h-12 mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Customer Satisfaction</h3>
              <p className="text-gray-600 mt-2">{dataDetails.aboutUs.whyCoolClimate[1]}</p>
            </div>
          </div>

        </div>
      </div>

      {/* Final Image Section */}
      <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Commitment</h2>
          <p className="text-gray-600 leading-relaxed">
            We prioritize high-quality AC services, ensuring every customer gets the best solutions at affordable prices.
          </p>
        </div>
        <img src={aboutImg2} alt="Our Commitment" className="rounded-lg shadow-md w-full" />
      </div>
    </div>
  );
};

export default AboutUs;
