import React from 'react'
import { useAppDispatch, useAppSelector } from './app'
function Products(): JSX.Element {

    const dispatch = useAppDispatch();
    const products = useAppSelector((store) => store.product.products)
    return (
        <div className='flex flex-col h-[100%] space-y-9'>
            <div className='flex border  md:h-[25vh] h-[30vh] flex-col space-x-4 md:flex-row'>
                <div className='h-[100%] w-[95%] mx-auto md:mx-0 md:w-[50%]'>
                    <img className='h-[100%] w-[100%]' src={products[0].image} alt="" />
                </div>
                <div className='md:w-[50%] w-[95%] h-[100%] mx-auto  flex  items-center'>
                    <div className='h-[60%]'>

                        <h1>{products[0].name}</h1>
                        <p>{products[0].description}</p>
                        <div className='w-[100%] flex flex-row space-x-8 mt-6'>
                            <button className='border w-[20%]  hover:bg-black-100 bg-[black] text-white rounded h-[4vh] text-center'>Add to cart</button>
                            <button className='border w-[20%]  hover:bg-black hover:text-white rounded h-[4vh] text-center'>Add to wish list</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex border space-x h-[25vh] flex-row'>
                <div className='w-[50%] h-[100%] flex  items-center'>
                    <div className='h-[60%] w-[90%] mx-auto'>

                        <h1>{products[2].name}</h1>
                        <p>{products[2].description}</p>
                        <div className='w-[100%] flex flex-row space-x-8 mt-6'>
                            <button className='border w-[20%]  hover:bg-black-100 bg-[black] text-white rounded h-[4vh] text-center'>Add to cart</button>
                            <button className='border w-[20%]  hover:bg-black hover:text-white rounded h-[4vh] text-center'>Add to wish list</button>
                        </div>
                    </div>
                </div>
                <div className='h-[100%] w-[50%]'>
                    <img className='h-[100%] w-[100%]' src={products[2].image} alt="" />
                </div>
            </div>
            <div className='flex  space-x-4 border md:h-[25vh] h-[30vh] flex-col md:flex-row'>
                <div className='h-[100%] w-[95%] mx-auto md:mx-0 md:w-[50%]'>
                    <img className='h-[100%] w-[100%]' src={products[1].image} alt="" />
                </div>
                <div className='md:w-[50%] w-[95%] h-[100%] mx-auto  flex  items-center'>
                    <div className='h-[60%]'>

                        <h1>{products[1].name}</h1>
                        <p>{products[1].description}</p>
                        <div className='w-[100%] flex flex-row space-x-8 mt-6'>
                            <button className='border w-[20%]  hover:bg-black-100 bg-[black] text-white rounded h-[4vh] text-center'>Add to cart</button>
                            <button className='border w-[20%]  hover:bg-black hover:text-white rounded h-[4vh] text-center'>Add to wish list</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex border space-x-4 h-[25vh] flex-row'>
                <div className='w-[50%] h-[100%] flex  items-center'>
                    <div className='h-[60%] w-[90%] mx-auto'>
                        <h1>{products[2].name}</h1>
                        <p>{products[2].description}</p>
                        <div className='w-[100%] flex flex-row space-x-8 mt-6'>
                            <button className='border w-[20%]  hover:bg-black-100 bg-[black] text-white rounded h-[4vh] text-center'>Add to cart</button>
                            <button className='border w-[20%]  hover:bg-black hover:text-white rounded h-[4vh] text-center'>Add to wish list</button>
                        </div>
                    </div>
                </div>
                <div className='h-[100%] w-[50%]'>
                    <img className='h-[100%] w-[100%]' src={products[2].image} alt="" />
                </div>
            </div>
            <div className='flex border space-x-4  h-[25ch] flex-row'>
                <div className='h-[100%] w-[95%] mx-auto md:mx-0 md:w-[50%]'>
                    <img className='h-[100%] w-[100%]' src={products[0].image} alt="" />
                </div>
                <div className='md:w-[50%] w-[95%] h-[100%] mx-auto  flex  items-center'>
                    <div className='h-[60%]'>
                        <h1>{products[0].name}</h1>
                        <p>{products[0].description}</p>
                        <div className='w-[100%] flex flex-row space-x-8 mt-6'>
                            <button className='border w-[20%]  hover:bg-black-100 bg-[black] text-white rounded h-[4vh] text-center'>Add to cart</button>
                            <button className='border w-[20%]  hover:bg-black hover:text-white rounded h-[4vh] text-center'>Add to wish list</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products