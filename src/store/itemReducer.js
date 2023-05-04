import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";
const secretKey = import.meta.env.SECRET_KEY;
const initialState = {
  items: [],
  currentItem: {},
};

const itemReducer = createSlice({
  name: "item",
  initialState,
  reducers: {
    replaceItem: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const itemAction = itemReducer.actions
export const getItems = (item = 'xbox') => {
  return (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
         `https://amazon23.p.rapidapi.com/product-search?query=${item}&country=IN`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":{secretKey},
            "X-RapidAPI-Host": "amazon23.p.rapidapi.com",
          },
        }
      );
      if(!response.ok){
        throw json({status: 500 , message: 'Couldn\'t fetch data'})
      }else{
        const data = await response.json()
        console.log(data)
        dispatch(itemAction.replaceItem(data.result))
      }
    };
    fetchData()
  };
};
export default itemReducer;
