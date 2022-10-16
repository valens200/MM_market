import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
function Notfound() {
  return (
    <div className=" w-[100%]   grid items-center h-screen text-white  ">
      <Nav />
      <div className='md:w-[40%] w-[96%]  items-center flex rounded shadow-lg border  p-4   h-[60%] mx-auto'>
        <div className='md:w-[50%] w-[90%] mx-auto  h-[40%]  text-[1.5rem] font-bold  items-center'>
          <h1 className='text-black text-center   mx-auto  h-[100%] hover:text-[grey] hover:cursor-pointer  items-center'>No page corresponding to the provided route</h1>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Notfound