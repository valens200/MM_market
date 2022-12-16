import React from 'react'
import Nav from '../components/Nav'
import { divs } from '../assets/pagesData/data'
import { Carousel } from 'react-responsive-carousel'
import Footer from '../components/Footer'
import { guidelines } from '../assets/pagesData/data'
import MiddleDiv from '../components/MiddleDiv'
import Customers2 from '../components/Customers2'

export default function About() {

  const getClass = (bg: string) => {
    return bg + " h-[40vh]"
  }

  return (
    <div>
      <div className="h-[8vh]">
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
      <div className='  flex flex-col space-y-[7%]'>
        <div className='w-[80%] space-x-8 justify-center flex md:space-y-0 space-y-4  flex-col md:flex-row mx-auto'>
          <div>
            <h1 className='font-lobot  text-2xl'>Our purpose</h1>
            <div className='mt-3 font-open   text-4xl' >
              <p>Starting with the</p>
              <p>Customer First</p>
            </div>
          </div>
          <div className='md:w-[50%]'>
            <p>Supporting the world’s biggest and most-respected organizations, Tek Experts delivers technical talent solutions for enterprises—driving value through exceptional customer experiences for your business—throughout the entire customer lifecycle. We’re here to help enterprises fill their tech talent gaps to deliver the results they need.</p>
          </div>
        </div>
        <div className='flex flex-col space-y-[5%]'>
          <div className='w-[80%] mx-auto'>
            <h1>Our principles ad goals</h1>
            <p>Guiding Principles</p>

          </div>
          <div className='w-[60%] flex flex-col md:space-y-0 md:space-y-4 md:flex-row space-x-4 mx-auto'>
            {guidelines.map((guide, index) => (
              <div className=' flex flex-col space-y-4 border border-[red] border-t-0 border-l-0 border-b-0 p-4'>
                <p className='text-black font-bold text-center '>{guide.title}</p>
                <img className='w-[20%] mx-auto' src={guide.image} />
                <div className='text-[0.9rem]'>
                  <p>{guide.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=''>
          <MiddleDiv />
        </div>
      </div>
      <div className=' border border-white border-x-0 border-b-0  '>
        <Footer />
      </div>
    </div>
  )
}
