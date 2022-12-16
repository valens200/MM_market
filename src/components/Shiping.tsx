import React from 'react'
import ReactDOM from 'react-dom'
import { useAppDispatch, useAppSelector } from './app'
import { shipingAddress } from '../assets/pagesData/data';
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import {  LinearProgress }  from '@mui/material';
import { buffer } from 'stream/consumers';
function Shiping() {
    const shipingNavs = useAppSelector((store) => store.page.shipingNavs);
    const getClassName = (active: boolean) => {
        if (active) {
            return "border-b-[yellow]  border-x-0 border-t-0  border h-[70%] border-[0.4rem] w-[20%] ";
        } else {
            return " h-[70%] w-[20%]";
        }
    }

    const ship = () => {

    }
    return ReactDOM.createPortal(<div className='bg-white  rounded h-[80vh] pb-5  shadow-2xl   z-20 w-[46%] mx-auto ml-[20%]  fixed top-20'>
        <div className='w-[90%] mx-auto flex flex-row justify-between items-center border-t-0 border-x-0  h-[14%]'>
            {/* {shipingNavs.map((nav, index) => (
                <p className={getClassName(nav.active)} key={index}>{nav.name}</p>
            ))} */}

        </div>
        <div className='w-[100%]'>
            <div className="border bg-white  rounded  pb-4  text-black">
                <form
                    onSubmit={(e) => ship()}
                    className="md:w-[80%] grid items-center mx-auto"
                >
                    <div className="w-[90%] invisible mx-auto">
                        <p className="text-center font-sans">
                           Plese enter your credentials to ship
                        </p>
                    </div>
                    <div className="w-[65%] mx-auto">
                        <div className="flex grid  items-center flex-col space-y-10">
                            <LinearProgress variant="buffer" value={50}  />
                            {shipingAddress.map((input, index) => (
                                <div key={index} className="w-[100%] h-[5vh] ">
                                    <TextField
                                        className="h-[100%] rounded-r-0   md:w-[100%] p-4"
                                        label={input.name}
                                        type={input.type}
                                        id="outlined-basic"
                                        variant="outlined"
                                    />
                                </div>
                            ))}
                            <div className="w-[100%] text-center bg-black text-white  h-[5vh] border">
                                <input
                                    type="submit"
                                    className="text-center focus:outline-0 p-2 w-[100%] h-[100%] bg-black p-2 "
                                    value="Continue with email"
                                />
                            </div>
                            <div className="flex ">
                                <p className="w-[45%] border-b"></p>
                                <p className="text-center w-[10%]">OR</p>
                                <p className="w-[45%] border-b "></p>
                            </div>
                            <div className="w-[100%] text-center text-white  h-[6vh] border">
                                <div className="text-center flex  hover:cursor-pointer flex-row justify-center space-x-3 text-black items-center focus:outline-0 p-2 w-[100%] h-[100%] border p-2 ">
                                    <p>ship  with google</p>
                                    <img
                                        className="h-[80%]"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ZGkl4huaCg0a5dWTyDjdWVqAdnW8zu1SR8qB3IhKadu100J94qcpf2OHT0EhXHYShrQ&usqp=CAU"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                
            </div>
        </div>
    </div>, document.getElementById("shiping")!
    )
}

export default Shiping  