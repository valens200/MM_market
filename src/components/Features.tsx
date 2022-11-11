import React from 'react'
import { JsxAttribute } from 'typescript'
import { useSelector, useDispatch } from 'react-redux'
import { useAppSelector, useAppDispatch } from './app';
import { RootState } from '../store';
import { productButtons } from '../assets/pagesData/data';
import { Button } from '@material-ui/core';

function Features(): JSX.Element {
    const products = useAppSelector((store) => store.product.products)
    const categories = useAppSelector((store) => store.product.categories);
    const products2 = products.slice(0, 6);

    const moveNext = () => {

    }
    const movePrevious = () => {

    }

    const dispatch = useAppDispatch();
    const features = useAppSelector((store) => store.product.features)
    return (
        <div className='w-[80%] mx-auto  mb-3  flex-wrap h-[100%] flex space-x-5  rounded flex-row justify-between'>
            {products2.map((ft, index) => (
                <div className='h-[61%] flex  hover:scale-100 mt-10   w-[30%]  hover:shadow-lg rounded flex-col space-y-5   border p-4 rounded' key={index}>
                    <h1 className='font-bold' key={index}>{ft.name}</h1>
                    <div className='h-[40%]  w-[100%]'>
                        <img className='h-[100%] w-[100%]' src={ft.image} />
                    </div>
                    <div className='flex space-y-4 flex-col'>
                        <p>{ft.description}</p>
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
    )
}

export default Features