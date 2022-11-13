import React from 'react'
import ReactDOM from 'react-dom'
import { useAppDispatch, useAppSelector } from './app'
import { useState, useEffect } from 'react'
import { selectedPost } from '../features/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, store } from '../store'
import { Button } from '@material-ui/core'
import { productButtons } from '../assets/pagesData/data'
import Rating from '@mui/material/Rating';
import { navLinks } from '../assets/pagesData/data'
import { BsXLg, BsXSquareFill } from "react-icons/bs"
function ShortNav(): React.ReactPortal {
    const dispatch = useDispatch();
    const [value, setValue] = useState(3);
    const selectedProduct = useAppSelector((store) => store.product.selectedProduct)
    console.log("selected posts", selectedProduct)

    const getClass = (link: string) => {
        if (link == 'Login') {
            return "hover:cursor-pointer border w-[8vw] h-[80%] font-bold pt-1 text-center items-center rounded "
        } else if (link == "Get started") {
            return "hover:cursor-pointer bg-[blue] h-[80%] w-[14%] font-bold pt-1 text-center items-center rounded  ";
        } else {
            return "hover:cursor-pointer font-bold hover:underline"
        }
    }
    return ReactDOM.createPortal(<div className='h-[40vh] p-2 md:hidden  bg-white z-20  float-right rounded fixed  top-[3%]  w-[40%]  mx-auto  bg-white  border '>
        <div className='w-[100%] mx-auto  mb-3  h-[100%] flex    flex-col space-y-10'>
            <div className='w-[60%] mx-auto'>
                <div className='flex'>
                    <div className='w-[90%]'></div>
                    <div className='w-[10%]'>
                        <BsXSquareFill className='text-[2.4rem]' />
                    </div>
                </div>

                <div className='flex flex-col space-y-4 '>
                    {navLinks.map((link, index) => (
                        <a href={"/" + link.link}><p className={getClass(link.name)} key={index}>{link.name}</p></a>
                    ))}
                </div>

            </div>

        </div>

    </div>, document.getElementById("cart")!)
}

export default ShortNav