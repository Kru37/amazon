import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

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
            "X-RapidAPI-Key":
              "856e8b6e23msh54eaaaea3413e49p12afc8jsn82bf1e94a7cc",
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
