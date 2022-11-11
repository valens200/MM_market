import React from 'react'
import ReactDOM from 'react-dom'
import { useAppDispatch, useAppSelector } from './app'
import { useState, useEffect } from 'react'
import { selectedPost } from '../features/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, store } from '../store'
import { Button } from '@material-ui/core'
import { productButtons } from '../assets/pagesData/data'
function CartProduct(): React.ReactPortal {
  const dispatch = useDispatch();
  const selectedProduct = useAppSelector((store) => store.product.selectedProduct)
  console.log("selected posts", selectedProduct)
  return ReactDOM.createPortal(<div className='h-[40vh] float-right rounded sticky  top-0 -translate-y-[80vh] w-[30%]   bg-white  border '>
    <div className='w-[100%] mx-auto  mb-3  flex-wrap h-[100%] flex space-x-5   flex-row justify-between'>
      <div className='h-[100%] flex  hover:scale-100 mt-10   w-[100%]  hover:shadow-lg rounded flex-col space-y-5    p-4 rounded'>
        <h1 className='font-bold'>{selectedProduct.name}</h1>
        <div className='h-[40%]  w-[100%]'>
          <img className='h-[100%] w-[100%]' src={selectedProduct.image} />
        </div>
        <div className='flex space-y-4 flex-col'>
          <p>{selectedProduct.description}</p>
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
    </div>

  </div>, document.getElementById("cart")!)
}

export default CartProduct