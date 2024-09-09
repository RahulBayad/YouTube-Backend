import { MdInvertColors } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


export const SidebarLinks = ({to="#", icon:Icon, label,size, class:css })=>{
  const menuVal = useSelector((state) => state.menu.toggle);
    return( 
    <NavLink 
      to={to} 
      className="flex items-center  gap-5 px-2 py-[6.1px] rounded-lg  
      hover:bg-gray-200 hover:shadow-sm cursor-pointer"
    >
      <Icon size={size}  className={` flex-shrink-0 ${css}`}/>
      <span className={`font-normal lg:block  ${ menuVal ? "block" : "hidden"} `}>{label}</span>
    </NavLink>
    )
}