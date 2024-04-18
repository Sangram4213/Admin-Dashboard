import { FaRegBell } from "react-icons/fa";
import AdminSideBar from "../components/AdminSideBar";
import {BsSearch} from 'react-icons/bs';


const Dashboard = () => {
  return (
    <div className="adminContainer">
        <AdminSideBar/>
        <main className="dashboard">
          <div className="bar">
             <BsSearch/>
             <input type="text" placeholder="Search for data, users, docs"/>
             <FaRegBell/>
          </div>
        </main>
    </div>
  )
}

export default Dashboard;