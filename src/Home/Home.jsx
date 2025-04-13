import Navber from "./Navber";
import { Outlet } from "react-router-dom";
import Fotter from "./Fotter";
import { Toaster } from "react-hot-toast";

const Home = () => {
  return (
    <>
      <Toaster position="top-right" />
      <Navber />
      <Outlet />
      <Fotter />
    </>
  );
};

export default Home;
