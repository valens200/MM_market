import React from 'react'
import { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Features from '../components/Features'
import Products from '../components/Products'
import { ImageList } from '@material-ui/core'

function Home() {
  return (
    <div className='justify-between flex flex-col '>
      <div className='h-[8vh] items-center '>
        <Nav />
      </div>
      <div className='h-[40vh] bg-black'>
        <div className=' w-[100%] mx-auto main text-white items-center flex h-[100%]'>
          <div className='w-[60%] flex flex-col space-y-3 mx-auto h-[60%]'>
            <h1 className='text-[2.3rem] '>Mukesha METAX</h1>
            <p>This is the online construction materials shooping </p>
            <p>Come and book your own and pay smoothly at low prices</p>
            <p>You strength is our concern </p>
          </div>
        </div>
      </div>
      <div className='flex flex-col space-y-10'>
        <div className='w-[100%] mt-20 mb-[10%] h-[44vh]  flex items-center text-black'>
          <Features />
        </div>
        <div>
          <h1 className='font-bold text-center'>Sample products</h1>
        </div>
        <div className='md:w-[60%] w-[94%] p-2   bg-[#ECECEB]  mx-auto mt-'>
          <Products />
          <div className='flex bg-white justify-end my-2 h-[5vh]'>
            <button className='bg-black w-[16%] rounded text-white '>Explore all</button>
          </div>
        </div>
        <div className='w-[70%] border rounded p-3 h-[30vh] mx-auto flex flex-row'>
          <div className='w-[50%] h-[100%] '>\
            <img src="require('assets/images/about.jpeg')" alt="" />

          </div>
          <div className='h-[100%] w-[50%] flex items-center'>
            <div className='w-[100%] h-[90%] '>
              <h1 className='font-bold  p-4 text-start  text-[1.2rem] font-poppins'>WHy choose us</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laboriosam officia, vitae expedita consectetur dicta porro maxime facilis. Repudiandae neque voluptatibus perspiciatis corrupti, maiores quaerat quis labore distinctio aliquam animi?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laboriosam officia, vitae expedita consectetur dicta porro maxime facilis. Repudiandae neque voluptatibus perspiciatis corrupti, maiores quaerat quis labore distinctio aliquam animi?</p>
            </div>
          </div>

        </div>
      </div>
      <div className='h-[30vh] bottom-0 relative w-[100%]'>
        <Footer />
      </div>
    </div>
  )
}

export default Home