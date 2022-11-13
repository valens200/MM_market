import React from 'react'
import about1 from "../assets/images/about1.avif"
import about2 from "../assets/images/about2.avif"
import { BsBookmarkCheckFill, BsFillEmojiWinkFill } from "react-icons/bs"
function Aboutus() {
    return (
        <div className='flex flex-col md:flex-row  items-center  w-[100%]'>
            <div className='md:w-[50%] '>
                <img className='md:w-[80%] translate-y-[16%]' src={about1} alt="" />
                <img className="w-[70%] mx-auto   -translate-y-[25%] z-20" src={about2} alt="" />
            </div>
            <div className='md:w-[50%] w-[90%] flex flex-col  space-y-8'>
                <p className='font-bold text-black text-[1.8rem]'>Know more about Rwanda  Metax</p>
                <h1>If you are looking for the best construction materials and tool with high quality,  Contact Us</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
                <div className='h-[10vh]  bg-[#33334D] border space-x-[30%] flex items-center '>
                    <div className='bg-[#1D1D43] w-[4%] h-[100%]'></div>
                    <div className='flex w-[96%]    items-center '>
                        <p className='text-center'> <span className='text-[blue] font-bold text-[1.7rem] mr-2'>20+</span> <span className='text-[1.4rem] text-white '> years working</span></p>
                    </div>
                </div>
                <div className=' flex  flex-row w-[90%] mx-auto justify-center'>
                    <div className='flex w-[50%] flex-row items-center space-x-4'>

                        <div className='bg-[#33334D] flex items-center text-white  w-[15%] h-[100%] '>
                            <BsBookmarkCheckFill className='text-[1.7rem] mx-auto ' />
                        </div>
                        <div>
                            <p>1034k+</p>
                            <p>Sold materials</p>
                        </div>

                    </div>
                    <div className='flex w-[50%]  flex-row items-center space-x-4'>
                        <div className='bg-[#33334D] w-[15%] text-center  h-[100%] text-white flex items-center '>
                            <BsFillEmojiWinkFill className='text-[1.7rem] mx-auto ' />
                        </div>
                        <div>
                            <p>20k+</p>
                            <p>Happy clients</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutus