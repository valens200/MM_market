import React from 'react'
import company3 from "../assets/images/company3.webp"
import sapo from "../assets/images/sapos.avif";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs"
import { Button } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { set } from 'immer/dist/internal';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
// import {Slide } from "react-reveal"
function Customers() {
    const [current, setCurrent] = useState(0);
    const clients = useSelector((store: RootState) => store.page.clients)
    const length = clients.length;

    const next = () => {
        setCurrent(current == length - 1 ? 0 : current + 1);
        console.log(current)

    }
    const prev = () => {
        setCurrent((current == 0 ? length - 1 : current - 1));
        console.log(current)
    }
    return (
        <div className='md:w-[80%] flex md:mt-[10vh]  mt-[59vh] flex-col h-[100%] mx-auto'>
            <div className='md:w-[40%]  w-[95%] text-center mx-auto'>
                <img src="https://www.sendme.ng/quote_mark.svg" />
                <h1 className='font-bold text-center text-[1.2rem]'>What our clients say</h1>
                <p className='text-[grey] '>There are many variations of passages of Lorem Ipsum available but the</p>
                <p className='text-[grey] '>this in majority have suffered alteration in some</p>
            </div>
            <div className='mx-auto md:w-[60%] space-x-3  justify-center flex items-center'>
                <BsFillArrowRightCircleFill onClick={() => next()} className='text-[#1D1D43] text-[3.3rem] text-end  hover:text-[#33334D]' />
                <div className=' mt-20 md:w-[50%] w-[100%]  flex flex-row'>
                    {clients.map((client, index) => {
                        console.log("index", index)
                        return (
                            <div>
                                {/* <Slide> */}
                                    <div key={index} className='W-[100%] shadow-lg'>
                                        {index == current && (
                                            <div className='border w-[100%] flex space-y-4 flex-col p-4  h-[100%] p-2'>
                                                <div className='w-[100%]  flex flex-col space-y-2  mx-auto'>
                                                    <img className='md:w-[35%]  w-[44%] mx-auto h-[13vh] rounded-full' src={sapo} />
                                                    <h1 className='text-center font-bold '>{client.name}</h1>
                                                    <p className='text-[0.90rem] text-[grey] text-center'>{client.bio}</p>
                                                </div>
                                                <div>
                                                    <p>{client.message}</p>
                                                </div>
                                            </div>
                                        )
                                        }
                                    </div>
                                {/* </Slide> */}
                            </div>
                        )

                    })}
                </div>
                <BsFillArrowLeftCircleFill onClick={() => prev()} className='text-[#1D1D43] text-[3.3rem]  hover:text-[#33334D]' />
            </div>
        </div>
    )
}

export default Customers