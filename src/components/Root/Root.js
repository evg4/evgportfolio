import Nav from "../Nav/Nav"; 
import { Outlet } from "react-router-dom";

function Root() {
    return (
    <>
        <Nav/>
        <Outlet/>
    </>)
}

export default Root;