import React from 'react'
import ReactDOM from 'react-dom'
import { useAppDispatch, useAppSelector } from './app'
import { useState, useEffect } from 'react'
function CartProduct() : React.ReactPortal {
  const selectedProduct = useAppSelector((store) => store.product.selectedProduct)
  return ReactDOM.createPortal(<div className='h-[60vh]  -translate-y-[99%] w-[60%]  mx-auto bg-white border '>
    <div>
      <p>{ selectedProduct == {} ? null : selectedProduct.name}</p>
    </div>
  </div>, document.getElementById("cart")!)
}

export default CartProduct