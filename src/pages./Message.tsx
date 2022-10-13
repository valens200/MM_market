import React from 'react'
import { useState , useEffect } from 'react'
import { TextField } from '@material-ui/core';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
function Message() {

    type Input = {
        name: string,
        type:string,
    }
    const [ inputs , setInput ] = useState<Input[]>([
        {
            name:"Your fullName",
            type:"text"
        },
        {
            name:"Your Email",
            type:"email"
        }
    ]);
  return (
    <div className=" w-[100%]  grid items-center h-screen text-white  ">
        <Nav />
      <div className='w-[40%] rounded border border-[0.01rem] border-[#00008B] p-4   h-[60%] mx-auto'>
        <div className='w-[80%] mx-auto'>
            <form >
                <div className='text-black text-center font-bold p-2'>
                <p className='text-center text-[2rem] text-black font-bold '>Short URL</p>
                    <p>Send Us a feedback</p>
                </div>
                {inputs.map((input, index) => (
                    <div className='border mt-9 '>
                        <TextField fullWidth  label={input.name} id="fullWidth" />
                    </div>
                ))}
                <textarea name="" placeholder='Enter messge here' className='h-[15vh] p-2 w-[100%] mt-10 focus:outline-0 border-[#00008B] border text-black' id="" />
                <div className='w-[100%] flex items-end '>
                <button className='bg-[#0B0B45]  w-[25%] rounded mt-3  h-[4vh] font-bold hover:bg-[#00008B] '>Send</button>
                </div>
            </form>

        </div>

        </div>
        <Footer />  
    </div>
  )
}

export default Message