import React from 'react'
import { useState, useEffect } from 'react'
import { TextField } from '@material-ui/core';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import axios from 'axios';
import { baseUrl } from '../assets/pagesData/data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../components/Loader';

function Message() {
    type Input = {
        name: string,
        type: string,
    }
    const [email, setEmail] = useState<string>("");
    const [fullName, setFullName] = useState<string>("");
    const [message, setMessage] = useState<string>("")
    const [isDataFull, setIsDataFull] = useState<boolean>(false)
    const [resultMessage, setResultMessage] = useState<string>();
    const [isLoading , setIsLoading ] = useState<boolean>(false);

    const [inputs, setInput] = useState<Input[]>([
        {
            name: "Your fullName",
            type: "text"
        },
        {
            name: "Your Email",
            type: "email"
        }
    ]);
    const changeData = (value: string, type: string) => {
        if (type == "email") {
            setEmail(value);
        } else {
            setFullName(value);
        }

    }
    let error = 0;
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const inputs = [email, fullName, message];
        for (let i: number = 0; i < inputs.length; i++) {
            if (inputs[i] == null || inputs[i] == "" || !inputs[i]) {
                toast.error("Inavlid inputs please fillout all fields", {    
                })
                error += 1;
                break;
               
            }
        }
        if(error > 0){
            return ;
        }
        try {
            setIsLoading(true);
            await axios.post(baseUrl + `/send/${email}`, {
                name: fullName,
                message: message
            }).then((response) => {
                if (response.status == 200) {
                    toast.success("Your message sent successfully! we respond soon.")
                }
                console.log(response)
                setIsLoading(false)
            }).catch((err) => {
                console.log(err);
            })

        } catch (error) {
            console.log(error);

        }
    }
    return (
        <div className=" w-[100%]   grid items-center h-screen text-white  ">
            <Nav />
            <div className='md:w-[40%] w-[96%]  rounded shadow-lg border  p-4   h-[65%] mx-auto'>
                <div className='w-[80%] mx-auto'>
            <ToastContainer className="text-white w-[20%] left-4" />
                    <form className='' onSubmit={handleSubmit} >
                        <div className='text-black text-center font-bold p-2'>
                            <p className='text-center text-[2rem] text-black font-bold '>Short URL</p>
                            <p>Send Us a feedback</p>
                        </div>
                        {inputs.map((input, index) => (
                            <div key={index} className=' mt-9 '>
                                  <TextField className='h-[80%]  w-[100%] focus:    outline-0 md:w-[100%] p-4' onChange={((e) => changeData(e.target.value, input.type))} id="outlined-basic" label={input.name} variant="outlined" />
                            </div>
                        ))}
                        <textarea onChange={(e) => setMessage(e.target.value)} name="" placeholder='Enter messge here' className='h-[15vh] p-2 w-[100%] mt-10 focus:outline-0 border-[#00008B] border text-black' id="" />
                        <div className='w-[100%] flex items-end '>
                            <button type="submit" className='bg-[#0B0B45]  w-[25%] rounded mt-3  h-[4vh] font-bold hover:bg-[#00008B] text-white '> {isLoading  ? <Loader /> : "Send"}</button>
                        </div>
                    </form>

                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Message