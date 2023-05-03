import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";

const routes = createBrowserRouter([
    {
        path:'/' , 
        element: <RootLayout/> 
        
    }
])

export default routes