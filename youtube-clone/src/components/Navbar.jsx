import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { BsYoutube } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { HiMicrophone } from "react-icons/hi2";
import { RiVideoAddLine } from "react-icons/ri";
import { BsBell } from "react-icons/bs";
const Navbar = () => {
  return (
    <div className='flex justify-between px-14 h-14 items-center bg-[#181818] opacity-95 sticky' >

      {/* Logo Part */}
      <div className='flex gap-8 items-center text-2xl'>
        <div className='cursor-pointer'>
          <RxHamburgerMenu />
        </div>
        <div className=' flex gap-2 items-center justify-center cursor-pointer '>
          <BsYoutube className='text-3xl text-red-600' />
          <span className='text-xl'>YouTube</span>
        </div>
      </div>

      {/* Search Part */}
      <div className='flex gap-2 items-center justify-center'>
        <form>
          <div className='flex bg-zinc-900 items-center h-10 px-4 pr-0 rounded-3xl'>
            <div>
              <input type="text" placeholder='search' className='w-96 bg-zinc-900 focus:outline-none border-none' />
            </div>
            <button className='h-10 w-14 flex items-center justify-center bg-zinc-800 rounded-r-3xl'>
              <CiSearch className='text-xl' />
            </button>
          </div>
        </form>
        <div className='text-xl p-3 bg-zinc-900 rounded-full'>
          <HiMicrophone  className='cursor-pointer'/>
        </div>
      </div>

      {/* profile part */}

      <div className='flex gap-8 items-center text-xl'>
        <RiVideoAddLine className='cursor-pointer' />
        <div className='relative'>
          <BsBell  className='cursor-pointer'/>
          <span className='absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1'>9+</span>
        </div>
        <img src="https://lh3.googleusercontent.com/ogw/AF2bZyh0ileyF7kYCh1pLrRcPYsqUUVW1ZbS3aEOykLI7Qy4LeM=s64-c-mo" alt="login-img" className='w-9 h-9 rounded-full cursor-pointer' />
      </div>
    </div>
    // </div>
  )
}

export default Navbar
