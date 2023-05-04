import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import MainContent from "./pages/MainContent";
import SingleProduct , {loader as singleProductLoader}from "./pages/SingleProduct";

const routes = createBrowserRouter([
    {
        path:'/' , 
        element: <RootLayout/> ,
        children: [
            {index:true , element: <MainContent/>},
            {path:'/:id' , element: <SingleProduct/> , loader: {singleProductLoader}}
        ]
        
    }
])

export default routes