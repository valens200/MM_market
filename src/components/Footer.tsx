import React from 'react'
import { footerLinks } from '../assets/pagesData/data'
import { footerLInks } from '../assets/pagesData/data'
import { TextField } from '@material-ui/core'
import { sendEMailInputs } from '../assets/pagesData/data'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <div className='w-[100%] h-[100%]  bg-[#0D2241] '>
            <div className='flex flex-row  justify-between w-[90%] mx-auto items-center p-4'>
                <div className='w-[50%] h-[90%]  text-white justify-between  items-center  flex flex-row '>
                    {footerLInks.map((link, index) => (
                        <div className='h-[90%]' key={index}>
                            <h1>{link.title}</h1>
                            <ul className='flex flex-col space-y-2'>
                                {link.links.map((link, index) => (
                                    <Link to={"/" + link.link}>
                                        <li className='hover:underline' key={index}>{link.name}</li>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className='w-[50%]  text-white'>
                    <p className='text-center'>Contact us</p>
                    <form className='flex flex-col space-y-4'>
                        {sendEMailInputs.map((input, index) => (
                            <div key={index} className='text-white w-[60%] mx-auto  '>
                                <TextField
                                    className="h-[100%]  text-white rounded-r-0   md:w-[100%] p-4"
                                    label={input.name}
                                    type={input.type}
                                    id="outlined-basic"
                                    variant="outlined"
                                />
                            </div>
                        ))}
                        <div className='w-[60%] h-[5vh] mx-auto text-center'>
                            <input type="submit" value="send" className='border h-[100%] w-[100%]' />
                        </div>

                    </form>

                </div>
            </div>
            <div className='w-[80%] text-white text-center mx-auto'>
                <p>&copy; mukeshametax. Allrights reserved</p>
            </div>
        </div>
    )
}

export default Footer