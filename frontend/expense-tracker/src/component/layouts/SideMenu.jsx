import React,{ useContext } from 'react';
import { SIDE_MENU_DATA } from '../../utils/data';
import { UserContext } from '../../context/userContext';
import { useNavigate } from 'react-router-dom';
import CharAvatar from '../Cards/CharAvatar';
//activemenu-active menu used to higlight
//user object user info
const SideMenu=({activeMenu})=>{
  const {user,clearUser}=useContext(UserContext);
  const navigate=useNavigate();

  const handleClick=(route)=>{
    if(route==="/logout"){
      handleLogout();
      return;
    }
    navigate(route);
  };

  const handleLogout=()=>{
    localStorage.clear();
    clearUser();
    navigate("/login");
  }
  
  return <div className="w-64 h-[calc(100vh-61px)] bg-white border-r border-gray-200/50 p-5 sticky top-[61px] z-20">
    <div className="flex flex-col items-center justify-center gap-3 mt-3 mb-7">
      {user?.profileImageUrl?(
        <img
          src={user?.profileImageUrl || ""}
          alt="Profile Image"
          className="w-20 h-20 bg-slate-400 rounded-full"
        />):(<CharAvatar
            fullName={user?.fullName}
            width="w-20"
            height="h-20"
            style="text-xl"/>
            )}

      <h5 className="text-gray-950 font-medium leading-6">
        {user?.fullName || ""}
      </h5>
    </div>

  {SIDE_MENU_DATA.map((item, index) => {
  const isActive = activeMenu === item.label;

  return (
    <button
      key={`menu_${index}`}
      onClick={() => handleClick(item.path)}
      className={`w-full mb-3 rounded-lg px-2 text-[15px] flex items-center justify-start`}
    >
      <div
        className={`flex items-center w-full rounded-xl transition-all px-4 py-2
          ${isActive ? "bg-violet-600 text-white font-medium" : "text-black hover:bg-gray-100"}
        `}
      >
        <item.icon className={`text-xl mr-4 ${isActive ? "text-white" : "text-black"}`} />
        {item.label}
      </div>
    </button>
  );
})}

  </div>;
};
export default SideMenu;