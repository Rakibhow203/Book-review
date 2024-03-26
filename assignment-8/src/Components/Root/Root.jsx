import { Outlet } from "react-router-dom";

import Header from "../Header/Header";



const Root = () => {
  return (
    <div>
      
      <div>

        <Header></Header>
        <outlet></outlet>
        
      </div>
    </div>
  );
};

export default Root;