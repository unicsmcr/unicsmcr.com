import { useState } from "react";
import { Sidebar, Menu, SubMenu, MenuItem } from "react-pro-sidebar";
import BasicCalendar from "./calendar";

// Sidebar Component
export default function BasicSideBar() {
  const [SidebarCollapse, setSidebarCollapse] = useState(false);
  const sidebarToggleIcon = () => {
    //condition checking to change state from true to false and vice versa
    SidebarCollapse ? setSidebarCollapse(false) : setSidebarCollapse(true);
  };
  return (
    <Sidebar collapsed={SidebarCollapse}>
      <div className="closemenu" onClick={sidebarToggleIcon}>
        Collapse Sidebar
      </div>
      {/* Only show Calendar when not collapsed */}
      <div>{SidebarCollapse ? "Icon for Calendar" : <BasicCalendar />}</div>
      <Menu>
        {/* Space for filter options????? */}
        <SubMenu label="Filter">
          <MenuItem>Option 1</MenuItem>
          <MenuItem>Option 2</MenuItem>
          <MenuItem>Option 3</MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
}
