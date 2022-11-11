import React from 'react'
import { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Features from '../components/Features'
import Products from '../components/Products'
import { ImageList } from '@material-ui/core'
import Deatils from '../components/Deatils'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { divs } from '../assets/pagesData/data'

function Home() {

  const getClass = (bg: string) => {
    return bg + " h-[40vh]"
  }
  return (
    <div className='justify-between flex flex-col '>
      <div className='h-[13vh] items-center '>
        <Nav />
      </div>
      <Carousel autoFocus={true} interval={2000} autoPlay={true} infiniteLoop={true} >
        {divs.map((div, index) => (
          <div key={index} className={getClass(div.background)}>
            <div className={"w-[100%] mx-auto  text-white items-center flex h-[100%]"}>
              <div className='w-[60%] flex flex-col space-y-3 mx-auto h-[60%]'>
                <h1 className='text-[2.3rem] '>Mukesha METAX</h1>
                {div.p.map((p, index) => (
                  <p key={index}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      <div className='flex flex-col space-y-10'>
        <div>
          <h1 className='font-bold text-center'>Sample products</h1>
        </div>
        <div className='w-[100%]   h-[70vh] mt-20 mb-[10%]  flex items-center text-black'>
          <Features />
        </div>
      </div>
      <div className='h-[30vh] mt-[35vh]  bottom-0 relative w-[100%]'>
        <Footer />
      </div>
    </div>
  )
}

export default Home