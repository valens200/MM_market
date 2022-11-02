import React from 'react'
import Nav from '../components/Nav';
import { useAppDispatch, useAppSelector } from '../components/app';
import Footer from '../components/Footer';
import { categories } from '../assets/pagesData/data';
import { IconButton } from '@material-ui/core';
import { Bool } from 'reselect/es/types';
function Products(): JSX.Element {

  const dispatch = useAppDispatch();
  const products = useAppSelector((store) => store.product.products)
  const products2 = products.slice(0, 4);

  const getClass = (index: number): string => {
    if (index % 2 == 0) {
      return "flex border hover:shadow-lg p-2 md:h-[25vh] h-[30vh] flex-col space-x-4 md:flex-row-reverse";
    } else {
      return "flex border hover:shadow-lg p-2 md:h-[25vh] h-[30vh] flex-col space-x-4 md:flex-row";
    }
  }

  const getClass2 = (clicked : boolean) : string =>  {
    if(clicked){
      return "border rounded-full bg-[yellow] w-[10%] h-[62%]";
    }else{
      return "border rounded-full w-[10%] h-[62%]";
    }
  }
  return (
    <div className='h-screen'>
      <div className='h-[9vh]'>
        <Nav />
      </div>
      <div className='main h-[30vh] flex items-center  mb-4'>
        <div className='w-[50%]  h-[50%] text-white mx-auto'>
          <h1 className='text-center font-bold text-[2.5rem]'>MUKESHA METAX</h1>
          <p className='text-center'>Your strength is our concern </p>
        </div>
      </div>
      <div className=' flex items-center h-[12%]'>
        <div className='h-[50%] w-[80%] mx-auto  flex  space-x-6 justify-center '>
          {categories.map((category, index) => (
            <button className={getClass2(category.clicked)} key={index}>{category.name}</button>
          ))}
        </div>
      </div>
      <div className='flex  w-[60%] mx-auto flex-col space-y-9'>
        {products2.map((pro, index) => (
          <div className={getClass(index)}>
            <div className='h-[100%] w-[95%] mx-auto md:mx-0 md:w-[50%]'>
              <img className='h-[100%] w-[100%]' src={pro.image} alt="" />
            </div>
            <div className='md:w-[50%] w-[95%] h-[100%] mx-auto  flex  items-center'>
              <div className='h-[60%]'>

                <h1>{pro.name}</h1>
                <p>{pro.description}</p>
                <div className='w-[100%] flex flex-row space-x-8 mt-6'>
                  <button className='border w-[30%]  hover:bg-black-100 bg-[black] text-white rounded h-[4vh] text-center'>{"Add to cart"}</button>
                  <button className='border w-[30%]  hover:bg-black hover:text-white rounded h-[4vh] text-center'>Add to wish list</button>
                </div>
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

export default Products 