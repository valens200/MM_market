import React from 'react'
import company3 from "../assets/images/company3.webp"
import sapo from "../assets/images/sapos.avif";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs"
import { Button } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { set } from 'immer/dist/internal';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
function Customers2() {
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
        <div className='w-[100%] h-[100%]'>
               
            <div className='w-[100%] space-x-3  justify-center flex items-center'>
                <BsFillArrowRightCircleFill onClick={() => next()} className='text-[#1D1D43] text-[3.3rem] text-end  hover:text-[#33334D]' />
                <div className=' mt-20 w-[100%] w-[100%]  flex flex-row'>
                    {clients.map((client, index) => {
                        console.log("index", index)
                        return (
                            <div>
                                {/* <Slide> */}
                                    <div key={index} className='w-[100%] shadow-lg'>
                                        {index == current && (
                                            <div className=' p-4 w-[100%] flex space-y-4 flex-col p-4  h-[100%] p-2'>
                                                <div className='w-[100%]  flex flex-col space-y-2  mx-auto'>
                                                    <img className='md:w-[48%]  w-[55%] mx-auto h-[13vh] rounded-full' src={sapo} />
                                                    <h1 className='text-center font-bold '>{client.name}</h1>
                                                    <p className='text-[0.90rem] text-[grey] text-center'>{client.bio}</p>
                                                </div>
                                                <div>
                                                    <p className='font-loboto'>{client.message}</p>
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

export default Customers2