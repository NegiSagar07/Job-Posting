import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>  
        <nav style={{ backgroundColor: '#987D9A' }} className="p-4 flex justify-between items-center shadow-lg rounded">
          <h1 className="text-4xl font-bold text-black">Job Postings</h1>
          <div className="flex space-x-4">
            <Link to = "/skill" className="bg-[#606676] hover:bg-[#FEF3E2] text-black font-semibold py-2 px-4 rounded transition duration-300">
              Skills
            </Link>
            <Link to = "/about" className="bg-[#606676] hover:bg-[#FEF3E2] text-black font-semibold py-2 px-4 rounded transition duration-300">
              About Us
            </Link>
            <Link to = "/contact" className="bg-[#606676] hover:bg-[#FEF3E2] text-black font-semibold py-2 px-4 rounded transition duration-300">
              Contact Us
            </Link>
            <Link to = "/company" className="bg-[#606676] hover:bg-[#FEF3E2] text-black font-semibold py-2 px-4 rounded transition duration-300">
              Company
            </Link>
            <Link to = "/job" className="bg-[#606676] hover:bg-[#FEF3E2] text-black font-semibold py-2 px-4 rounded transition duration-300">
              Job
            </Link>
          </div>
        </nav>
    </>
  ) 

}

export default Navbar