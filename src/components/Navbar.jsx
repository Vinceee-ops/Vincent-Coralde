import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
    className={`header sticky top-0 z-50 bg-black shadow-md transition-all duration-300 ${
      isScrolled ? "py-0" : "py-2"
    }`}
  >
    <nav className='navbar justify-between px-14 md:px-20'>
      <div className="header sticky flex justify-between items-center px-10 py-5">
        <a href="#" className="">
          <span className="self-center text-xl font-bebas text-white">Vincent Coralde</span>
        </a>
        <div className="">
        <ul
          className={`nav-menu ${
            isSidebarOpen ? "hidden" : ""
          } space-x-10 text-lg text-white hidden lg:flex md:text-md`}
        >
          {["Home", "About", "Services"].map((item) => (
            <li key={item} className="nav-item">
              <button>
                <Link
                  to={item}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={closeSidebar}
                  className="hover:font-semibold"
                  activeClass="font-semibold"
                >
                  {item}
                </Link>
              </button>
            </li>
          ))}
        </ul>
        </div>
                      {/* Drawer */}
                      <button
          className="btn btn-circle swap swap-rotate bg-black border-none lg:hidden hover:bg-black"
          onClick={toggleSidebar}
        >
          {/* hamburger icon */}
          {!isSidebarOpen ? (
            <svg
              className="swap-off fill-white"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          ) : (
            <svg
              className="swap-on fill-cyan-700"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          )}
        </button>
      </div>
    </nav>
         {/* Sidebar */}
         <div
        className={`bg-black fixed top-0 right-0 z-50 h-full w-1/2 flex items-center justify-center text-white text-xl transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button onClick={closeSidebar} className="absolute top-8 right-16">
          <svg
            className="swap-on fill-white"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </button>
        <ul className="text-center text-2xl space-y-8">
          {["Home", "About", "Portfolio", "FAQ"].map((item) => (
            <li key={item} className="py-2">
              <button>
                <Link
                  to={item}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={closeSidebar}
                  className="hover:font-semibold"
                  activeClass="font-semibold"
                >
                  {item}
                </Link>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
