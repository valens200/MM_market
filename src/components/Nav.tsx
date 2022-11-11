import React, { useEffect, useRef, useState } from 'react'
import { navLinks } from '../assets/pagesData/data'
import Image from '../assets/images/hammer.avif'
import { BsFillCartFill, BsFillCaretDownFill } from "react-icons/bs"
import { topNavs } from '../assets/pagesData/data'
function Nav() {

  const navRef = useRef<HTMLDivElement>(null);
  const WindowScrollY = useState(window.scrollY);
  const changeBackground = () => {
    if (window.scrollY != 0) {
      navRef.current?.classList.add("bg-white")
      navRef.current?.classList.add("text-black")
      navRef.current?.classList.remove("text-white");
    } else {
      navRef.current?.classList.remove("bg-white");
      navRef.current?.classList.remove("text-black");
      navRef.current?.classList.add("text-white");
      navRef.current?.classList.add("shadow-lg");

    }
  }
  const getClass = (link: string) => {
    if (link == 'Login') {
      return "hover:cursor-pointer border w-[8vw] h-[80%] font-bold pt-1 text-center items-center rounded "
    } else if (link == "Get started") {
      return "hover:cursor-pointer bg-[blue] h-[80%] w-[14%] font-bold pt-1 text-center items-center rounded  ";
    } else {
      return "hover:cursor-pointer font-bold hover:underline"
    }
  }

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  }, [WindowScrollY])
  return (
    <div className='h-[100%] text-white  font-sans '>
      <div className='w-[100%] h-[23%] p-2 bg-[#33334D]  '>
        <div className='flex w-[50%]  mx-auto space-x-4 justify-center text-[0.80rem]  flex-row'>
          {topNavs.map((top,index) => (
            <div className='flex space-x-2' key={index}>
              <p>{<top.icon />}</p>
              <p className='hover:underline'>{top.name}</p>
            </div>
          ))}
        
        </div>
      </div>
      <div className='bg-[#1D1D43]  h-[40%] text-white '>
        <div className='flex  h-[100%] flex-row  w-[90%] mx-auto items-center justify-between'>
          <div className='flex h-[60%]  space-x-3'>
            <div className=''>
              <p>LOgo</p>
            </div>
            <div className='w-[60%]  h-[100%]'>
              <input type="text" className='h-[100%] rounded p-2 focus:outline-0' placeholder="Search your product here" />
            </div>
          </div>
          <div className='flex space-x-3'>
            <div>
              <p>Return and Orders</p>
            </div>
            <div className='flex space-x-2'>
              <p>English-RW</p>
              <BsFillCaretDownFill className='text-[1.3rem]' />
            </div>
          </div>
          <div>
            <p>Location</p>
          </div>
          <div className='flex space-x-2'>
            <p>Sign in / register</p>
            <BsFillCaretDownFill className='text-[1.3rem]' />
          </div>
          <div className='flex space-x-2'>
            <BsFillCartFill className=' text-[2rem]' />
            <p>Cart</p>
          </div>
        </div>
      </div>
      <div className='text-black sticky  items-center top-0 flex h-[37%] space-x-8 flex-row justify-center '>
        {navLinks.map((link, index) => (
          <a href={"/" + link.link}><p className={getClass(link.name)} key={index}>{link.name}</p></a>
        ))}
      </div>


    </div>
  )
}

export default Nav