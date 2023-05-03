import { Outlet } from "react-router-dom"
import NavBar from "../layout/nav/NavBar"


const RootLayout = () => {
  return (
    <>
    <NavBar/>
    <main>
        <Outlet/>
    </main>
    </>
  )
}

export default RootLayout