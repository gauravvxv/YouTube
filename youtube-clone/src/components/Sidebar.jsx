import React from 'react'
import {
     MdHomeFilled,
     MdOutlineSubscriptions ,
     MdOutlineVideoLibrary ,
     MdOutlineHistory ,
     MdOutlineWatchLater ,
     MdPlaylistPlay 

 } from "react-icons/md";
 import { SiYoutubeshorts } from "react-icons/si";
 import { LuThumbsUp } from "react-icons/lu";

const Sidebar = () => {

    const mainLinks = [
        {
            icon: <MdHomeFilled className='text-xl'/>,
            name: "Home",
        },
        {
            icon: <SiYoutubeshorts  className='text-xl'/>,
            name: "Shorts"
        },
        {
            icon: <MdOutlineSubscriptions  className='text-xl'/>,
            name: "Subscrptions"
        }
    ]

    const otherLinks = [
        {
            icon: <MdOutlineVideoLibrary  className='text-xl'/>,
            name: "Library"
        },
        {
            icon: <MdPlaylistPlay  className='text-xl'/>,
            name: "Playlists"
        },
        {
            icon: <MdOutlineHistory  className='text-xl'/>,
            name: "History"
        },
        {
            icon: <MdOutlineWatchLater  className='text-xl'/>,
            name: "Watch Later",
        },
        {
            icon: <LuThumbsUp  className='text-xl'/>,
            name: "Liked videos"
        }
    ]

  return (
    <div className='w-2/12 bg-[#212121] p-2 pr-5 overflow-auto pb-8 h-screen'>
      <ul className='flex flex-col border-b-1 border-gray-700 '>
        {mainLinks.map(
            ({icon,name}) => {
                return (
                    <li key={name} className={`pl-6  py-3 hover:bg-zinc-600 ${name==="Home" ? "bg-zinc-700": " "} rounded-xl`}>
                        <a href="#" className='flex items-center gap-5'>{icon}
                        <span className=' text-sm tracking-wider'>{name}</span>
                        </a>
                    </li>
                )
            }
        )}
      </ul>

      <ul className='flex flex-col border-b-1 border-gray-800'>
        {otherLinks.map(
            ({icon,name}) => {
                return (
                    <li key={name} className={`pl-6 py-3 hover:bg-zinc-600 rounded-xl`}>
                        <a href="#" className='flex items-center gap-5'>{icon}
                        <span className=' text-sm tracking-wider'>{name}</span>
                        </a>
                    </li>
                )
            }
        )}
      </ul>
    </div>
  )
}

export default Sidebar
