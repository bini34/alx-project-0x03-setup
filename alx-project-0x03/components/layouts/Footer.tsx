import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';



const Footer: React.FC = () => {const Footer: React.FC = () => {

  return (  return (

    <footer className="bg-gray-900 text-white py-10">    <footer className="bg-gray-900 text-white py-10">

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>        <div>

          <h3 className="text-xl font-bold mb-4">Splash App</h3>          <h3 className="text-xl font-bold mb-4">Splash App</h3>

          <p className="text-gray-400 mb-4">          <p className="text-gray-400 mb-4">

            Your one-stop platform for all your needs. Connecting people, creating opportunities.            Your one-stop platform for all your needs. Connecting people, creating opportunities.

          </p>          </p>

          <p className="text-gray-400">© 2024 Splash App. All rights reserved.</p>          <p className="text-gray-400">© 2024 Splash App. All rights reserved.</p>

        </div>        </div>

        <div>        <div>

          <h4 className="text-lg font-semibold mb-4">Useful Links</h4>          <h4 className="text-lg font-semibold mb-4">Useful Links</h4>

          <ul>          <ul>

            <li className="mb-2">            <li className="mb-2">

              <a href="/about" className="text-gray-400 hover:text-white transition duration-300">About Us</a>              <a href="/about" className="text-gray-400 hover:text-white transition duration-300">About Us</a>

            </li>            </li>

            <li className="mb-2">            <li className="mb-2">

              <a href="/services" className="text-gray-400 hover:text-white transition duration-300">Services</a>              <a href="/services" className="text-gray-400 hover:text-white transition duration-300">Services</a>

            </li>            </li>

            <li className="mb-2">            <li className="mb-2">

              <a href="/contact" className="text-gray-400 hover:text-white transition duration-300">Contact Us</a>              <a href="/contact" className="text-gray-400 hover:text-white transition duration-300">Contact Us</a>

            </li>            </li>

          </ul>          </ul>

        </div>        </div>

        <div>        <div>

          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>

          <div className="flex space-x-4">          <div className="flex space-x-4">

            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">

              <FaFacebook size={24} />              <FaFacebook size={24} />

            </a>            </a>

            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">

              <FaTwitter size={24} />              <FaTwitter size={24} />

            </a>            </a>

            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">

              <FaInstagram size={24} />              <FaInstagram size={24} />

            </a>            </a>

          </div>          </div>

        </div>        </div>

      </div>      </div>

    </footer>    </footer>

  );  );

}}



export default Footer;export default Footer;

