import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import MainContent from "./pages/MainContent";
import SingleProduct , {loader as singleProductLoader} from "./pages/SingleProduct";
import Error from "./pages/Error";
import Cart from "./pages/Cart";

const routes = createBrowserRouter([
    {
        path:'/' , 
        element: <RootLayout/> ,
        errorElement: <Error/>,
        children: [
            {index:true , element: <MainContent/>},
            {path:':id' , element: <SingleProduct/> , loader: singleProductLoader},
            {path:'cart' , element: <Cart/>}
        ]
        
    }
])

export default routes