import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import MainContent from "./pages/MainContent";

const routes = createBrowserRouter([
    {
        path:'/' , 
        element: <RootLayout/> ,
        children: [
            {index:true , element: <MainContent/>}
        ]
        
    }
])

export default routes