import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <Header />
      <Nav />
      <Outlet />
    </>
  );
}

export default Root;
