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
import CartProduct from '../components/CartProduct'
import { selectedPost } from '../features/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import Aboutus from '../components/Aboutus'
import FeaturedProducts from '../components/FeaturedProducts'
import Chooseus from '../components/Chooseus'
import TrustedPartners from '../components/TrustedPartners'
import Customers from '../components/Customers'
import Otherproducts from '../components/Otherproducts'
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs"

function Home() {

  const getClass = (bg: string) => {
    return bg + " h-[40vh]"
  }


  const moveNext = () => {

  }
  const movePrevious = () => {

  }
  const dispatch = useDispatch();
  return (
    <div className='justify-between flex flex-col '>
      <div className='h-[8vh] items-center '>
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

        <div className='md:w-[70%] w-[100%] mx-auto'>
          <h1 className='text-center text-[1.4rem] '>About us</h1>
          <div className='md:w-[50%] w-[95%] mx-auto text-center mt-3 '>
            <p>This is the online construction materials shooping</p>
            <p>Come and book your own and pay smoothly at low prices</p>
            <p>You strength is our concern</p>
          </div>
          <Aboutus />
        </div>
        <div className='w-[100%]  mb-10   flex flex-row items-center  mx-auto'>
          <FeaturedProducts />
        </div>
        <div className=' md:w-[95%]  w-[100%] mx-auto'>
          <TrustedPartners />
        </div>
        <div className="h-[37vh] ">
          <div className='h-[100%] choose'>
            <Chooseus />
          </div>
        </div>
    
        <div className='w-[100%]   '>
          <Customers />
        </div>
      </div>
      <div className=' mt-[30%]  w-[100%]'>
        <Footer />
      </div>
    </div>
  )
}

export default Home