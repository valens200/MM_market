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
import { Button } from '@material-ui/core';
function Cart(): JSX.Element {
  const dispatch = useAppDispatch();
  const products = useAppSelector((store) => store.product.products)
  const categories = useAppSelector((store) => store.product.categories);
  const products2 = products.slice(0, 4);

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
      </div>
        <CartProduct />
      <div className='main h-[30vh] flex items-center  mb-4'>
        <div className='w-[50%]  h-[50%] text-white mx-auto'>
          <h1 className='text-center font-bold text-[2.5rem]'>MUKESHA METAX</h1>
          <p className='text-center'>Your strength is our concern </p>
          <p className='text-center mt-4  font-bold'>Your cart</p>
        </div>
      </div>
      <div className='w-[80%] mx-auto  mb-3  flex-wrap h-[100%] flex space-x-5  rounded flex-row justify-between'>
        {products2.map((ft, index) => (
          <div className='h-[40%] flex  hover:scale-100 mt-10   w-[30%]  hover:shadow-lg rounded flex-col space-y-5   border p-4 rounded' key={index}>
            <h1 className='font-bold' key={index}>{ft.name}</h1>
            <div className='h-[40%]  w-[100%]'>
              <img className='h-[100%] w-[100%]' src={ft.image} />
            </div>
            <div className='flex space-y-4 flex-col'>
              <p>{ft.description}</p>
              <div className='flex  items-bottom  w-[100%] flex-row space-x-3'>
                {/* <Rating name="size-large" defaultValue={2} size="large" /> */}
                <p className="text-black">{ft.cost}</p>
                <p className='text-black'>343490</p>
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
      <div className='h-[30vh] mt-[10vh]  bottom-0 relative w-[100%]'>
        <Footer />
      </div>
    </div>
  )
}

export default Cart 