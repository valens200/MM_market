import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import amarati from "../assets/images/amarati.avif";
import amzapenzi from "../assets/images/amzapenzi.avif";
import hammer from "../assets/images/hammer.avif";
import ipenzi from "../assets/images/ipenzi.avif";
import sapo from "../assets/images/sapos.avif";
import span from "../assets/images/span.avif";
import { categories } from "../assets/pagesData/data";

interface CounterState {
  value: number;
}

type Product = {
  cost: number;
  image: string;
  name: string;
  description: string;
};

const initialState = {
  categories: [
    {
      name: "Masonry",
      clicked: true,
      id: 1,
    },
    {
      name: "Masonry",
      clicked: false,
      id: 2,
    },
    {
      name: "Masonry",
      clicked: false,
      id: 3,
    },
    {
      name: "Masonry",
      clicked: false,
      id: 4,
    },
    {
      name: "Masonry",
      clicked: false,
      id: 5,
    },
  ],
  value: 0,
  features: [
    // {
    //   image: ipenzi,
    //   name: "Spanners",
    //   description:
    //     "sum is simply dummy text of t dummy",
    // },
    // {
    //   image: sapo,
    //   name: "hammers",
    //   description:
    //     "sum is simply dummy text Lorem dard dummy",
    // },
    {
      image: amarati,
      name: "alltes",
      description:
        "sum is simply dummy text of  standard dummy",
    },
  ],
  products: [
    {
      cost: 2344,
      image: span,
      name: "Spanners",
      description:
        "sum is simply indry's standard dummy",
    },
    {
      cost: 2004,
      image: span,
      name: "Spanners",
      description:
        "sum is tandard dummy",
    },
    {
      cost: 2094,
      image: span,
      name: "Spanners",
      description:
        "sum is simply d Lorem stry's standard dummy",
    },
    {
      cost: 2094,
      image: span,
      name: "Spanners",
      description:
        "sum is simply dummy text of the printing and typesetting indstandard dummy",
    },
    {
      cost: 1894,
      image: hammer,
      name: "hammers",
      description:
        "sum is simply dummy text of the printing an standard dummy",
    },
    {
      cost: 1894,
      image: hammer,
      name: "hammers",
      description:
        "sum is simply dummy text of the printing an industry's standard dummy",
    },
    {
      cost: 1894,
      image: hammer,
      name: "hammers",
      description:
        "sum is simply dummy t has been the industry's standard dummy",
    },
    {
      cost: 29004,
      image: amzapenzi,
      name: "alltes",
      description:
        "sum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    },
  ],
  selectedProduct: {cost:0, image: "", name: "", description: "" },
};

export type Parameter = {
  cost:number;
  image: string;
  name: string;
  description: string;
};

const productSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setFormInputs: (state, action: PayloadAction<object>) => {},
    setCategory: (state, action: PayloadAction<{ name: string }>) => {},
    setClicked: (state, action: PayloadAction<number>) => {
      let category = state.categories.filter(
        (category) => category.id == action.payload
      );
      category[0].clicked = true;
      let otherCategories = state.categories.filter(
        (category) => category.id != action.payload
      );
      otherCategories.forEach((category) => {
        category.clicked = false;
      });
    },
    selectedPost: (state, action: PayloadAction<Parameter>) => {
      state.selectedProduct = action.payload;
      console.log(state.selectedProduct);
      console.log(" [payload ", typeof action.payload);
    },
  },
});

export const { setClicked, selectedPost } = productSlice.actions;
export const productReducer = productSlice.reducer;
