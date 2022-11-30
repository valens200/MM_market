import React from 'react'
import Nav from '../components/Nav';
import { useAppDispatch, useAppSelector } from '../components/app';
import Footer from '../components/Footer';
import { IconButton } from '@material-ui/core';
import { Bool } from 'reselect/es/types';
import { setClicked } from '../features/productSlice';
import CartProduct from '../components/CartProduct';
import { selectedPost } from '../features/productSlice';
import { Parameter } from '../features/productSlice';
import { productButtons } from '../assets/pagesData/data';
import { productBUttons2 } from '../assets/pagesData/data';
import { Button } from '@material-ui/core';
import { Rating } from '@mui/material';
import { useState, useEffect } from 'react';
import Shiping from '../components/Shiping';
import { BsBasket, BsChevronLeft, BsArrowBarRight, BsChevronRight } from "react-icons/bs"
function Cart(): JSX.Element {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(3);
  const products = useAppSelector((store) => store.product.products)
  const categories = useAppSelector((store) => store.product.categories);
  const products2 = products.slice(0, 4);
  const selectedProduct = useAppSelector((store) => store.product.selectedProduct)

  const getClass = (index: number): string => {
    if (index % 2 == 0) {
      return "flex border z-100 hover:shadow-lg  md:h-[25vh] h-[30vh] flex-col space-x-4 md:flex-row-reverse";
    } else {
      return "flex border z-100 hover:shadow-lg  md:h-[25vh] h-[30vh] flex-col space-x-4 md:flex-row";
    }
  }

  const getClass2 = (clicked: boolean): string => {
    if (clicked) {
      return "border rounded-full text-black border border-black font-bold  p-2 bg-[yellow] w-[12%] h-[100%]";
    } else {
      return "border rounded-full p-2 w-[12%] h-[100%]";
    }
  }

  const dispatchMethodes = (pro: Parameter) => {
    dispatch(selectedPost(pro))
    console.log(pro);
    console.log("hello ")
  }
  return (
    <div className='h-screen z-100 bg-white'>
      <div className='h-[13vh]'>
        <Nav />
        <Shiping />
      </div>
      {/* <CartProduct /> */}
      <div className='main h-[30vh] flex items-center  mb-4'>
        <div className='w-[50%]  h-[50%] text-white mx-auto'>
          <h1 className='text-center font-bold text-[2.5rem]'>MUKESHA METAX</h1>
          <p className='text-center'>Your strength is our concern </p>
          <p className='text-center mt-4  font-bold'>Your cart</p>
        </div>
      </div>
      <div className='w-[50%] text-center mx-auto'>
        <h1 className="font-bold text-black">Shooping cart</h1>
      </div>
      <div className='md:w-[95%] mt-10 h-[70vh]  border  w-[95%] z-20 mx-auto  mb-3 flex-wrap-0    flex space-x-0 md:space-x-5  rounded flex-col md:flex-row'>
        <div className='text-black w-[70%]  overflow-scroll h-[100%] space-y-1  flex flex-col'>
          {products2.map((ft, index) => (
            <div className='flex space-x-8 border  h-[20%] w-[80%]  mx-auto justify-between p-r-4   flex-row'>
              <div className=' w-[40%] h-[100%] items-center space-x-3 flex '>
                <img className='h-[100%] w-[90%]' src={ft.image} />
                <div>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={() => {
                      setValue(value + 1);
                    }}
                  />
                  <p className="text-black font-bold text-[1.4rem]">{89009 + "$"}</p>
                </div>
              </div>
              <div className='flex   font-bold items-center  w-[60%] justify-around '>
                <div className="flex space-x-3">
                  <BsChevronLeft className='font-bold text-[2.3rem]' />
                  <p className='font-bold'>{32423423 + " $"}</p>
                  <BsChevronRight className='font-bold text-[2.3rem]' />

                </div>
                <div>
                  <p>{ft.cost}</p>
                </div>
                <div className='font-bold'>
                  <BsBasket className='font-bold text-black' />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='w-[30%] h-[100%] flex items-center'>
          <div className='h-[60%]  w-[70%] mx-auto'>
            <div className='w-[98%] border  p-4 flex flex-col space-y-3 mx-auto'>
              <h1>{"Subtotal : " + "(" + products2.length + " tools) :  $ " + 400505}</h1>
              <div className='flex w-[100%] bg-[yellow] text-black font-bold h-[5vh] flex-row'>
                <button className='w-[100%] h-[100%]'>Proceed to checkout </button>
                <BsArrowBarRight />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='   bottom-0 relative w-[100%]'>
        <Footer />
      </div>
    </div>
  )
}

export default Cart 