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
function CartProduct(): React.ReactPortal {
  const dispatch = useDispatch();
  const [value, setValue] = useState(3);
  const selectedProduct = useAppSelector((store) => store.product.selectedProduct)
  console.log("selected posts", selectedProduct)
  return ReactDOM.createPortal(<div className='h-[55vh] md:float-right rounded sticky md:shadow-0 shadow-lg sticky  top-40 -translate-y-[80vh] w-[94%] mx-auto md:w-[30%]   bg-white  border '>
    <div className='w-[100%] mx-auto  mb-3  flex-wrap h-[100%] flex space-x-5   flex-row justify-between'>
      <div className='h-[100%] flex  hover:scale-100 space-y-6  w-[100%]  hover:shadow-lg rounded flex-col  rounded'>
        <div className='h-[40%]  w-[100%]'>
          <img className='h-[100%] w-[100%]' src={selectedProduct.image} />
        </div>
        <div className='flex w-[90%] mx-auto space-y-4 flex-col'>
          <h1 className='font-bold text-[1.4rem]'>{selectedProduct.name}</h1>
          <p>{selectedProduct.description}</p>
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
    </div>

  </div>, document.getElementById("cart")!)
}

export default CartProduct