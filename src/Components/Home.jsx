import React, { useState, useEffect } from 'react'; 
import logo from '../assets/images/logo.png';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';


function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Initialize Owl Carousel
    const initializeCarousel = () => {
      window.$(".owl-banner").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        nav: true,
        dots: true,
        autoplayTimeout: 3000,
      });
    };

    initializeCarousel();

    // Cleanup function to destroy the carousel on component unmount
    return () => {
      window.$(".owl-banner").trigger('destroy.owl.carousel');
    };
  }, []);
 


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50 header-area header-sticky">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center ">
              <img src={logo} alt="Logo" className="h-8 " />
          </div>

          <nav className="hidden md:flex space-x-6">
            <Link to="/" className={`${location.pathname === '/' ? 'text-blue-500' : 'text-gray-700'} hover:text-blue-500 font-medium`}>Home</Link>
            <Link to="/explore" className={`${location.pathname === '/explore' ? 'text-blue-500' : 'text-gray-700'} hover:text-blue-500 font-medium`}>Explore</Link>
            <Link to="/itemdetails" className={`${location.pathname === '/itemdetails' ? 'text-blue-500' : 'text-gray-700'} hover:text-blue-500 font-medium`}>Item Details</Link>
            <Link to="/author" className={`${location.pathname === '/author' ? 'text-blue-500' : 'text-gray-700'} hover:text-blue-500 font-medium`}>Author</Link>
            <Link to="/createyour" className={`${location.pathname === '/createyour' ? 'text-blue-500' : 'text-gray-700'} hover:text-blue-500 font-medium`}>Create Yours</Link>
            <Link to="/ainft" className={`${location.pathname === '/ainft' ? 'text-blue-500' : 'text-gray-700'} hover:text-blue-500 font-medium`}>AI nft</Link>
          </nav>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden bg-white shadow-md">
            <ul className="space-y-4 px-6 py-4">
              <li><Link to="/" className={`${location.pathname === '/' ? 'text-blue-500' : 'text-gray-700'} hover:text-blue-500 font-medium`} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link to="/explore" className={`${location.pathname === '/explore' ? 'text-blue-500' : 'text-gray-700'} hover:text-blue-500 font-medium`} onClick={() => setIsMenuOpen(false)}>Explore</Link></li>
              <li><Link to="/itemdetails" className={`${location.pathname === '/itemdetails' ? 'text-blue-500' : 'text-gray-700'} hover:text-blue-500 font-medium`} onClick={() => setIsMenuOpen(false)}>Item Details</Link></li>
              <li><Link to="/author" className={`${location.pathname === '/author' ? 'text-blue-500' : 'text-gray-700'} hover:text-blue-500 font-medium`} onClick={() => setIsMenuOpen(false)}>Author</Link></li>
              <li><Link to="/createyour" className={`${location.pathname === '/createyour' ? 'text-blue-500' : 'text-gray-700'} hover:text-blue-500 font-medium`} onClick={() => setIsMenuOpen(false)}>Create Yours</Link></li>
            </ul>
          </nav>
        )}
      </header>

   

      <Outlet />
      <Footer />
    </>
  );
}

export default Home;
