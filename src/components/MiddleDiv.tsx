import React from 'react'
import { footerLinks } from '../assets/pagesData/data'
import { footerLInks } from '../assets/pagesData/data'
import { TextField } from '@material-ui/core'
import { sendEMailInputs } from '../assets/pagesData/data'
import { Link } from 'react-router-dom'
import Customers2 from './Customers2'
import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill, BsArrowRight } from "react-icons/bs"
function MiddleDiv() {
    return (
        <div className='w-[100%] h-[100%]  bg-[#33334D]'>
            <div className=' w-[100%] md:w-[70%] mx-auto items-center space-x-4 flex flex-col md:flex-row'>
                <div className='flex w-[90%] md:w-[35%]   h-[100%] justify-between  flex-row  justify-center w-[90%] mx-auto items-center p-4'>
                    <div className='w-[100%] h-[50vh] w-[100%] bg-white shadow-lg z-20 shadow-lg rounded md:-translate-y-40  '>
                        <Customers2 />
                    </div>
                </div>
                <div className='w-[60%] flex flex-col md:space-y-10 space-y-8 text-white'>
                    <h1 className='font-bold'>Our LEADERSHIP</h1>
                    <div>
                        <p>A team of experienced and</p>
                        <p>passionate leaders</p>
                    </div>
                    <div className='md:p-b-0 p-b-10'>
                        <p>We have assembled a leadership team with vast technical know-how and operational experience from CX to service delivery. They have driven major digital transformation initiatives around the world with brands like Microsoft, Accenture, Ernst & Young, HSBC, PWC and CA Technologies.</p>
                        <div className='flex flex-row space-x-2'>
                            <BsArrowRight className='text-[1.5rem] hover:cursor-pointer  font-bold' />
                            <p> MEET OUR LEADERS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiddleDiv