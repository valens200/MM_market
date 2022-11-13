import React from 'react'
import { useAppDispatch, useAppSelector } from './app'
function Chooseus() {

    const dispatch = useAppDispatch();
    const features = useAppSelector((store) => store.page.features);
    console.log("features", features);
    return (
        <div className='md:w-[60%] w-[100%] h-[100%] mx-0 md:mx-auto text-white'>
            <div className='text-center  p-4 '>
                <h1 className='font-bold text-[1.5rem]'>Why choose Us</h1>
                <p>There are many variations of passages of Lorem Ipsum available but the</p>
                <p>this in majority have suffered alteration in some</p>
            </div>
            <div className='bg-white flex  md:flex-row flex-col h-[30%] w-[100%] md:w-[60%] items-center  mx-auto absolute  translate-y-10 z-20'>
                {features.map((ft, index) => (
                    <div className=' text-black p-3 flex flex-col space-y-8 p-2 shadow-lg p-4  h-[80%] text-center items-center border-y-0  border-r border'>
                        <p className='text-center text-[2.4rem]'>{< ft.icon />}</p>
                        <div >
                            <h1 className='font-bold'>{ft.name}</h1>
                            <p className='text-[grey]'>{ft.description}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Chooseus