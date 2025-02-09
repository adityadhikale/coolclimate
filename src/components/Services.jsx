import { dataDetails } from "../data/data"; 

const Services = () => {
  const { basic, gasFilling } = dataDetails.services;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">Our Services</h2>

      {/* Basic Services Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-left">Basic Services</h3>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {basic.map((service, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-transform transform hover:scale-105">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <h4 className="text-lg font-semibold mt-3">{service.name}</h4>
              <ul className="text-sm text-gray-600 my-2">
                {service.description.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>
              <p className="text-lg font-bold text-blue-600">{service.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Gas Filling Services Section */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4 text-left">Gas Filling Services</h3>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {gasFilling.map((service, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-transform transform hover:scale-105">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <h4 className="text-lg font-semibold mt-3">{service.name}</h4>
              <ul className="text-sm text-gray-600 my-2">
                {service.description.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>
              <p className="text-lg font-bold text-blue-600">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
