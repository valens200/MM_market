import React from 'react'
import Nav from '../components/Nav';
import { useAppDispatch, useAppSelector } from '../components/app';
import Footer from '../components/Footer';
import { IconButton } from '@material-ui/core';
import { Bool } from 'reselect/es/types';
import CartProduct from '../components/CartProduct';
import { setClicked } from '../features/productSlice';
import { productButtons } from '../assets/pagesData/data';
import { Button } from '@material-ui/core';
import { selectedPost } from '../features/productSlice';
import { useState, useEffect } from 'react';
// import { useAppDispatch, useAppSelector } from '../components/app';
import { Rating } from '@mui/material';
function Products(): JSX.Element {
  const dispatch = useAppDispatch();
  const products = useAppSelector((store) => store.product.products)
  const categories = useAppSelector((store) => store.product.categories);
  const [value, setValue] = useState(3);
  const selectedProduct = useAppSelector((store) => store.product.selectedProduct)
  const products2 = products.slice(0, 4);
  const getClass = (index: number): string => {
    if (index % 2 == 0) {
      return "flex border hover:shadow-lg  md:h-[25vh] h-[30vh] flex-col space-x-4 md:flex-row-reverse";
    } else {
      return "flex border hover:shadow-lg  md:h-[25vh] h-[30vh] flex-col space-x-4 md:flex-row";
    }
  }

  const getClass2 = (clicked: boolean): string => {
    if (clicked) {
      return "border rounded-full text-black border border-black font-bold  p-2 bg-[yellow] w-[12%] h-[100%]";
    } else {
      return "border rounded-full p-2 w-[12%] h-[100%]";
    }
  }
  return (
    <div className='h-screen'>
      <div className='h-[10vh]'>
        <Nav />
      </div>
      <CartProduct />
      <div className='main h-[30vh]  w-[100%]  flex items-center  mb-4'>
        <div className='w-[50%]  h-[50%] text-white mx-auto'>
          <h1 className='text-center font-bold text-[2.5rem]'>MUKESHA METAX</h1>
          <p className='text-center'>Your strength is our concern </p>
        </div>
      </div>
      <div className=' z-20 flex items-center h-[12%]'>
        <div className='h-[40%] w-[80%] mx-auto  flex  space-x-6 justify-center '>
          {categories.map((category, index) => (
            <button onClick={() => dispatch(setClicked(category.id))} className={getClass2(category.clicked)} key={index}>{category.name}</button>
          ))}
        </div>
      </div>
      <div className='md:w-[80%] w-[95%] z-20 mx-auto  mb-3 flex-wrap-0  md:flex-wrap  flex space-x-0 md:space-x-5  rounded flex-col md:flex-row justify-between'>
        {products2.map((ft, index) => (
          <div onClick={() => dispatch(selectedPost(ft))} className='h-[44vh] flex  hover:scale-100 mt-10  w-[100%]  md:w-[30%]  hover:shadow-lg rounded flex-col space-y-5   border p-4 rounded' key={index}>
            <h1 className='font-bold' key={index}>{ft.name}</h1>
            <div className='h-[40%]  w-[100%]'>
              <img className='h-[100%] w-[100%]' src={ft.image} />
            </div>
            <div className='flex space-y-4 flex-col'>
              <p>{ft.description}</p>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={() => {
                  setValue(value + 1);
                }}
              />
              <p className="text-black font-bold text-[1.4rem]">{selectedProduct.cost + "$"}</p>
              <div className='flex  items-bottom  w-[100%] flex-row space-x-3'>
                {productButtons.map((btn, index) => (
                  <div className='  h-[94%] w-[40%]  space-x-2 bottom-0 p-2 border rounded  flex'>
                    <i >{<btn.icon />}</i>
                    <button>{btn.name}</button>
                  </div>
                ))}
                <Button variant='outlined' >Available</Button>
              </div>

            </div>

          </div>
        ))}
      </div>
      <div className='mt-[10vh]  bottom-0 relative w-[100%]'>
        <Footer />
      </div>
    </div>
  )
}

export default Products 