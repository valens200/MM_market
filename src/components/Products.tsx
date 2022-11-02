import React from 'react'
import { useAppDispatch, useAppSelector } from './app'
function Products(): JSX.Element {

    const dispatch = useAppDispatch();
    const products = useAppSelector((store) => store.product.products)
    const products2 = products.slice(0, 4);

    const getClass = (index: number) : string => {
        if(index % 2 == 0){
            return "flex border hover:shadow-lg p-2 md:h-[25vh] h-[30vh] flex-col space-x-4 md:flex-row-reverse";
        }else{
            return "flex border hover:shadow-lg p-2 md:h-[25vh] h-[30vh] flex-col space-x-4 md:flex-row";
        }
    }
    return (
        <div className='flex flex-col h-[100%] space-y-9'>
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
                                <button className='border w-[30%]  hover:bg-black-100 bg-[black] text-white rounded h-[4vh] text-center'>Add to cart</button>
                                <button className='border w-[30%]  hover:bg-black hover:text-white rounded h-[4vh] text-center'>Add to wish list</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Products