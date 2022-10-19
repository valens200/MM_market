import React from 'react'
import image from '../assets/images/images/main.png'
import  { BsHurricane } from 'react-icons/bs'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <div className='text-black h-[8vh] fixed top-0 w-[100%]  border mb-2 shadow-sm flex items-center'>
        <div className='w-[70%] h-[60%] justify-between flex mx-auto'>
            <div className='w-[50%] h-[70%] text-[4rem] text-[grey]' >
             <Link to="/" className='h-[100%]' >
               <BsHurricane  className='text-[2.6rem]' />
             </Link>
            </div>
            <div>
            <p className='text-center text-[1.3rem] md:text-[2rem] text-black font-bold '>VshortURL</p>

            </div>

        </div>
    </div>
  )
}

export default Nav