import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import ContactForm from "../components/Forms/ContactForm";
import MapComponent from "../components/Layout/MapComponent";

const ContactPage = () => {
  return (
    <>
      <Header activeHeading={4} />
      <div className="max-w-6xl mx-auto p-8 bg-slate-300">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl text-center text-blue-700 font-bold mb-4">Contact Us</h2>
              <ContactForm />
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h1 className="text-2xl text-center text-blue-700 font-bold mb-4">Our Info</h1>
              <ul className="list-none text-gray-700 pl-0 mb-4">
                <li className="text-lg mb-1">Email: email@californiacleaningsupplies.com</li>
                <li className="text-lg mb-1">Phone: (123) 456-7890</li>
                <li className="text-lg mb-1">Address: 123 Business Street, Business City, BC 12345</li>
              </ul>
              <h2 className="text-2xl text-blue-700 font-semibold mb-4">Our Location</h2>
              <MapComponent />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
