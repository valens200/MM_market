import React from 'react'
import { Link } from 'react-router-dom'
import { TextField } from '@material-ui/core'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
function Home() {
  return (
    <div className='h-[100vh] grid items-center'>
        <Nav />
    <div className=" w-[100%] h-[70vh]  grid items-center mx-auto w-[80%] text-white ">
    <div className='w-[40%] border p-4   h-[100%] mx-auto'>
      <p className='text-center text-[2rem] text-black font-bold '>Short URL</p>
      <div className='flex flex-col space-y-5'>
        <p className='text-center text-[grey] my-3' >Past URL here and see The magic</p>

        <div className='border w-[80%] mx-auto flex flex-row h-[5vh]'>
        <TextField className='h-[100%]  w-[80%] p-4'  label="Enter the url to shorten " id="fullWidth" />
        <button className='bg-[#0B0B45] w-[20%] font-bold hover:bg-[#00008B] '>Shorten</button>
        </div>
        <div className='text-black text-[0.80rem] mt-2 text-center '>
          <p>ShortURL.at is a free tool to shorten a URL or reduce a link</p>
          <p>Use our URL Shortener to create a shortened link making it easy to remember</p>
        </div>
      </div>
      <div className='w-[95%] translate-y-9 grid items-center h-[40%] mx-auto'>
      <div className='h-[10vh]  flex my-4 grid items-center  border w-[90%] mx-auto '>
        <div className='w-[96%] mx-auto flex h-[80%]'>
        <input className='h-[70%] focus:outline-0 border text-black  w-[80%] p-4'  value="main"   type="text"/>
        <button className='bg-[#0B0B45] w-[20%] h-[70%] font-bold hover:bg-[#00008B] '>copy</button>
        </div>

      </div>
      <div className='border w-[90%] h-[15vh] mx-auto'>
        <h1>Want More? Try Premium Features!</h1>
        <div className='w-[98%] mx-auto flex flex-col   h-[76%] text-center text-black'>
          <p>Happy and enjoy using our service</p>
          <p>browser extension, 50+ app integrations and support. Only $9/month.</p>
          <Link to="/message" className='bg-[#0B0B45] text-center mx-auto mt-4 text-white h-[70%]  rounded w-[20%] font-bold hover:bg-[#00008B] '>
          <button className='w-[100%] h-[100%] '>Reply</button>
          </Link>
        </div>

      </div>

      </div>
    </div>
  </div>
    <Footer />
    </div>
  )
}

export default Home