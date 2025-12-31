import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import sty from '../../assets/layout.module.css';

const AdminLayout = () => {
  return (
    <div className={sty.layout}>
      <Sidebar />
      <div className={sty.main}>
        <Topbar />
        <div className={sty.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
