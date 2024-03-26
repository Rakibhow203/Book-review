import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";


const MainLayout = () => {
  return (
    <div>
      <div><Header></Header></div>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;