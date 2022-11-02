import React, { useEffect, useRef, useState } from 'react'
import { navLinks } from '../assets/pagesData/data'
import Image from '../assets/images/hammer.avif'

function  Nav() {

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
      return "hover:cursor-pointer hover:underline"
    }
  }

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  }, [WindowScrollY])
  return (
    <div className='h-[100%] bg-black  font-sans '>
      <div className=' h-[10%] pt-10 flex flex-col space-y-20 w-[100%]  '>
        <div ref={navRef} className='flex fixed top-0 p-2 items-center h-[8%] w-[100%]'>
          <div className='w-[90%] flex mx-auto'>
            <div className='w-[50%]'>
              <h1 className='font-bold text-[2rem] '>MM</h1>
            </div>
            <div className='flex space-x-10 w-[50%] flex-row'>
              {navLinks.map((link, index) => (
                <a href={"/" + link.link}><p className={getClass(link.name)} key={index}>{link.name}</p></a>
              ))}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav