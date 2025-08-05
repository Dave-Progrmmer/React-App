import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className='w-full flex items-center justify-center absolute z-[9999]'>
      <div
        className="
          w-[92%] 
          max-w-[400px] 
          sm:max-w-[500px] 
          lg:mx-auto 
          mt-32 
          rounded-xl 
          p-3 
          flex items-center justify-between 
          bg-white/10 
          backdrop-blur-md 
          border border-white/20 
          shadow-lg 
          fixed
          sm:p-4
        "
        style={{ left: '50%', transform: 'translateX(-50%)' }}
      >
        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-5 text-[14px] font-semibold cursor-pointer text-amber-50'>
          <Link to={"/"} className='transition-all duration-300 ease-in-out hover:text-[#925acafa] hover:scale-105'>Home</Link>
          <Link to={"about"} className='transition-all duration-300 ease-in-out hover:text-[#925acafa] hover:scale-105'>About</Link>
          <Link to={"services"} className='transition-all duration-300 ease-in-out hover:text-[#925acafa] hover:scale-105'>Services</Link>
          <Link to={"contact"} className='transition-all duration-300 ease-in-out hover:text-[#925acafa] hover:scale-105'>Contact</Link>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className='md:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1 cursor-pointer'
        >
          <span className={`block w-5 h-0.5 bg-amber-50 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-5 h-0.5 bg-amber-50 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-5 h-0.5 bg-amber-50 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

        <div className="button">
          <button className='text-[14px] transition-all duration-300 ease-in-out hover:text-[#925acafa] hover:scale-105 cursor-pointer'>Get Started</button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black/80 backdrop-blur-md transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
          <ul className='flex flex-col gap-8 text-[18px] font-semibold cursor-pointer text-amber-50'>
            <Link 
              to={"/"} 
              onClick={() => setIsMenuOpen(false)}
              className='transition-all duration-300 ease-in-out hover:text-[#925acafa] hover:scale-110 transform'
            >
              Home
            </Link>
            <Link 
              to={"about"} 
              onClick={() => setIsMenuOpen(false)}
              className='transition-all duration-300 ease-in-out hover:text-[#925acafa] hover:scale-110 transform'
            >
              About
            </Link>
            <Link 
              to={"services"} 
              onClick={() => setIsMenuOpen(false)}
              className='transition-all duration-300 ease-in-out hover:text-[#925acafa] hover:scale-110 transform'
            >
              Services
            </Link>
            <Link 
              to={"contact"} 
              onClick={() => setIsMenuOpen(false)}
              className='transition-all duration-300 ease-in-out hover:text-[#925acafa] hover:scale-110 transform'
            >
              Contact
            </Link>
          </ul>
          <button 
            onClick={() => setIsMenuOpen(false)}
            className='text-[16px] transition-all duration-300 ease-in-out hover:text-[#925acafa] hover:scale-105 cursor-pointer bg-white/10 px-6 py-3 rounded-lg backdrop-blur-md border border-white/20'
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar