import React from 'react'
import { useAppDispatch, useAppSelector } from './app';
import { selectedPost } from '../features/productSlice';
import { productButtons } from '../assets/pagesData/data';
import { Button } from '@mui/material';
import { useRef } from 'react';
import { FiEye } from "react-icons/fi";
function Otherproducts() {
    const products = useAppSelector((store) => store.product.products)
    const categories = useAppSelector((store) => store.product.categories);
    const products2 = products.slice(0, 6);

    const myRef = useRef<HTMLDivElement>(null);
    const clicked = () => {
        myRef.current?.classList.add("-translate-x-10")
    }

    const dispatch = useAppDispatch();
    const features = useAppSelector((store) => store.product.features)
    return (
        <div className='h-[100%]  md:mt-[10%] featured w-[100%]'>
            <div ref={myRef} className=' mx-auto  mb-3  h-[100%] flex space-x-5  rounded flex-row justify-between'>
                {products2.map((ft, index) => (
                    <div onClick={() => dispatch(selectedPost(ft))} className='flex  hover:scale-100 mydiv hover:shadow-lg rounded flex-col space-y-5   border p-4 rounded' key={index}>
                        <h1 className='font-bold' key={index}>{ft.name}</h1>
                        <div className='h-[40%]  w-[100%]'>
                            <img className='h-[100%] w-[100%]' src={ft.image} />
                        </div>
                        <div className='flex space-y-4 flex-col'>
                            <p>{ft.description}</p>
                            <div className='flex   items-center items-bottom  w-[100%] flex-row space-x-3'>
                                <FiEye />
                                {productButtons.map((btn, index) => (
                                    <div className='  h-[94%]  space-x-1 bottom-0 p-2 border rounded  flex'>
                                        <i >{<btn.icon />}</i>
                                        <button className='w-[100%]'>{btn.name}</button>
                                    </div>
                                ))}
                                <Button className='invisible w-[1%]' variant="outlined">hello</Button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Otherproducts