import React from 'react'
import { footerLinks } from '../assets/pagesData/data'
import { footerLInks } from '../assets/pagesData/data'
import { TextField } from '@material-ui/core'
import { sendEMailInputs } from '../assets/pagesData/data'
import { Link } from 'react-router-dom'
import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from "react-icons/bs"
function Footer() {
    return (
        <div className='w-[100%] h-[100%] bg-[#33334D]'>
            <div className='flex justify-between  flex-row  justify-between w-[90%] mx-auto items-center p-4'>
                <div className='w-[80%]  h-[90%]  mx-auto text-white md:justify-between md:space-y-0 space-y-9  md:items-center  flex flex-col md:flex-row '>
                    {footerLInks.map((link, index) => (
                        <div className='h-[90%]' key={index}>
                            <h1 className='font-bold'>{link.title}</h1>
                            <ul className='flex text-[0.80rem] mt-4  flex-col space-y-2'>
                                {link.links.map((link, index) => (
                                    <Link to={"/" + link.link}>
                                        <li className='hover:underline' key={index}>{link.name}</li>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <svg className="animate-bounce w-[20%] h-[100%]   flex items-center mt-10...">
                    <BsFillArrowUpCircleFill  className='text-[4rem] float-right  h-[20%] text-white '/>
                </svg>
            </div>
            <div className='w-[80%] bottom-0 text-white text-center mx-auto'>
                <p>&copy; mukeshametax. Allrights reserved</p>
            </div>
        </div>
    )
}

export default Footer