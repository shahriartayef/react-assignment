import Container from "./Container";
import { FaXTwitter, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-4 sm:px-8 py-12">
  <Container>
    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 w-[90%] mx-auto">
      <div>
        <h3 className="text-white font-semibold mb-2">CS — Ticket System</h3>
        <p className="text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-2">Company</h4>
        <ul className="space-y-1 text-sm">
          <li>About Us</li>
          <li>Our Mission</li>
          <li>Contact Saled</li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-2">Services</h4>
        <ul className="space-y-1 text-sm">
          <li>Products & Services</li>
          <li>Customer Stories</li>
          <li>Download Apps</li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-2">Information</h4>
        <ul className="space-y-1 text-sm">
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Join Us</li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-2">Social Links</h4>
        <ul className="space-y-1 text-sm">
          <li className="flex items-center space-x-3">
              <FaXTwitter className="text-xl" />
              <span>@CS — Ticket System</span>
              </li><br />
              <li className="flex items-center space-x-3">
              <FaLinkedin className="text-xl" />
              <span>@CS — Ticket System</span>
              </li><br />
              <li className="flex items-center space-x-3">
              <FaFacebook className="text-xl" />
              <span>@CS — Ticket System</span>
              </li><br />
              <li className="flex items-center space-x-3">
              <FaEnvelope className="text-xl" />
              <span>support@cst.com</span>
           </li>
        </ul>
      </div>
    </div>
    <div className="text-left md:text-center text-white text-sm mt-8 font-bold">
      © 2025 CS — Ticket System.
      <br className="block md:hidden" /> All rights reserved.
    </div>
  </Container>
</footer>

  );
};

export default Footer;