import React from "react";

const FooterNav = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="p-4 text-sm py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-white">
          <div className="flex flex-col items-start">
            <div className="mb-3 flex gap-2">
              <img
                src="https://www.experthubllc.com/_next/image?url=%2Fimages%2Fnew-home%2Flogo.png&w=48&q=75"
                alt=""
              />
              <span className="text-2xl font-bold">ExpertHub LLC</span>
            </div>
            <p className="text-sm mb-6">
              Connecting professionals through Expert services, workspace,
              trainings and events
            </p>
            <div className="space-y-6 text-gray-400">
              <div>
                <h4 className="text-white font-semibold mb-1">Dallas Office</h4>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=910+S.+Pearl+Expy,+Dallas,+TX+75201,+USA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors block"
                >
                  910 S. Pearl Expy, Dallas, <br /> TX 75201, USA
                </a>
                <p className="mt-1">
                  Phone: <a href="tel:2144323113" className="hover:text-white transition-colors">214-432-3113</a>
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Houston Office</h4>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=4008+Chartres+St,+Houston,+TX+77004,+USA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors block"
                >
                  4008 Chartres St, Houston, TX 77004, USA
                </a>
                <p className="mt-1">
                  Phone: <a href="tel:7132446695" className="hover:text-white transition-colors">713-244-6695</a>
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="https://www.experthubllc.com/home#virtual-assistants"
                  className="hover:underline"
                >
                  Virtual Assistants
                </a>
              </li>
              <li>
                <a
                  href="https://www.experthubllc.com/home#expert"
                  className="hover:underline"
                >
                  Expert Services
                </a>
              </li>
              <li>
                <a
                  href="https://www.experthubllc.com/home#training"
                  className="hover:underline"
                >
                  Professional Training
                </a>
              </li>
              <li>
                <a
                  href="https://www.experthubllc.com/home#workspace"
                  className="hover:underline"
                >
                  Workspace Solutions
                </a>
              </li>
              <li>
                <a
                  href="https://www.experthubllc.com/home#events"
                  className="hover:underline"
                >
                  Community Events
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="https://www.experthubllc.com/about"
                  className="hover:underline"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://www.experthubllc.com/home#services"
                  className="hover:underline"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="https://www.experthubllc.com/home#events"
                  className="hover:underline"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="https://www.experthubllc.com/home#contact"
                  className="hover:underline"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Legal</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="https://www.experthubllc.com/home#"
                  className="hover:underline"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://www.experthubllc.com/home#"
                  className="hover:underline"
                >
                  Terms of Service
                </a>
              </li>

              <li>
                <a
                  href="https://www.experthubllc.com/home#"
                  className="hover:underline"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="p-3">
          <p className="text-center text-sm text-gray-300">
            &copy; {new Date().getFullYear()} ExpertHub LLC. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterNav;
