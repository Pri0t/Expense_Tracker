import React,{useContext} from 'react';
import { UserContext } from '../../context/userContext';
import Navbar from "./Navbar";
import SideMenu from './SideMenu';
const DashboardLayout=({children,activeMenu})=>{
  const {user}=useContext(UserContext);
  return (
   <div>
    <Navbar activeMenu={activeMenu} />
    <div className="flex">
      {user && (
        <div className="max-[1080px]:hidden">
          <SideMenu activeMenu={activeMenu} />
        </div>
      )}
      <div className="flex-grow">{children}</div>
    </div>
  </div>

  );
};
export default DashboardLayout;