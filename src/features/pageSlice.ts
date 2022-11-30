import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ReactComponentElement } from 'react'
import {BsFillArchiveFill } from "react-icons/bs"


interface CounterState {
  value: number
}

const initialState = { 
  shipingNavs: [{name:"Sign-In", active:true}, {name:"Shipping", active:false}, {name:"Payment", active:false}, {name:"Place Order", active:false}],
   clients : [
    {
      img:"",
      name:"construction",
      bio:"Popular contruction company loved my the cloud",
      message:" metax i used to provide weak bulding but now i'm safe",
    },
    {
      img:"",
      name:"Horizon construction",
      bio:"Popular contruction company loved my the cloud",
      message:" metax i used to provide weak bulding but now i'm safe"
    },
    {
      img:"",
      name:"main construction",
      bio:"Popular contruction company loved my the cloud",
      message:" metax i used to provide weak bulding but now i'm safe",
    }
  ],
    value: 0 ,
    features: [
        {
            icon:BsFillArchiveFill,
            name:"Strong and SMART tools",
            description:"There are many variations of passages of Lorem Ipsum available but the majority."
        },
        {
            icon:BsFillArchiveFill,
            name:"Strong and SMART tools",
            description:"There are many variations of passages of Lorem Ipsum available but the majority."
        },
        {
            icon:BsFillArchiveFill,
            name:"Strong and SMART tools",
            description:"There are many variations of passages of Lorem Ipsum available but the majority."
        }
    ]
}

const pageSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setFormInputs : (state, action : PayloadAction<object>) => {

    }
    
  },
})

export const {  } = pageSlice.actions
export const pageReducer = pageSlice.reducer;