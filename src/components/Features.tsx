import React from 'react'
import { JsxAttribute } from 'typescript'
import { useSelector, useDispatch } from 'react-redux'
import { useAppSelector, useAppDispatch } from './app';
import { RootState } from '../store';

function Features(): JSX.Element {

    const moveNext = () => {

    }

    const movePrevious = () => {

    }

    const dispatch = useAppDispatch();
    const features = useAppSelector((store) => store.product.features)
    return (
        <div className='w-[80%] mx-auto  mb-3  h-[100%] flex space-x-5 rounded flex-row justify-between'>
            {features.map((ft, index) => (
                <div className='h-[100%] flex hover:shadow-lg rounded flex-col space-y-4   border p-4 rounded' key={index}>
                    <h1 className='font-bold' key={index}>{ft.name}</h1>
                    <div className='h-[60%] w-[100%]'>
                        <img className='h-[90%] w-[100%]' src={ft.image} />
                    </div>
                    <div>
                        <p>{ft.description}</p>
                        <button className='float-right  h-[34%] w-[30%] border rounded '>View details</button>
                    </div>


                </div>
            ))}
        </div>
    )
}

export default Features