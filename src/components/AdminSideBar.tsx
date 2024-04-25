import { RiDashboardFill, RiShoppingBag3Fill,RiCoupon3Fill } from "react-icons/ri";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { Link, useLocation, Location } from "react-router-dom";
import { IconType } from "react-icons";
import {FaChartBar,FaChartPie,FaChartLine,FaStopwatch,FaGamepad} from 'react-icons/fa'

const AdminSideBar = () => {
  const location = useLocation();
  console.log(location);

  return (
    <aside>
      <h2>Logo.</h2>

      <DivOne location={location}/>
     
     <DivTwo location={location}/>

     <DivThree location={location}/>
    </aside>
  );
};

const DivOne =({location}:{location:Location})=>(
  <div>
        <h5>Dashboard</h5>
        <ul>
          <Li
            url="/admin/dashboard"
            Icon={RiDashboardFill}
            text="Dashboard"
            location={location}
          />
          <Li
            url="/admin/products"
            Icon={RiShoppingBag3Fill}
            text="Product"
            location={location}
          />
          <Li
            url="/admin/customer"
            Icon={IoIosPeople}
            text="Customer"
            location={location}
          />
          <Li
            url="/admin/transaction"
            Icon={AiFillFileText}
            text="Transaction"
            location={location}
          />
        </ul>
      </div>
)

const DivTwo =({location}:{location:Location})=>(
  <div>
        <h5>Charts</h5>
        <ul>
          <Li
            url="/admin/chart/bar"
            Icon={FaChartBar}
            text="Bar"
            location={location}
          />
          <Li
            url="/admin/chart/pie"
            Icon={FaChartPie}
            text="Pie"
            location={location}
          />
          <Li
            url="/admin/chart/line"
            Icon={FaChartLine}
            text="Line"
            location={location}
          />
        </ul>
      </div>
)

const DivThree =({location}:{location:Location})=>(
  <div>
        <h5>Apps</h5>
        <ul>
          <Li
            url="/admin/app/stopwatch"
            Icon={FaStopwatch}
            text="Stopwatch"
            location={location}
          />
          <Li
            url="/admin/app/coupon"
            Icon={RiCoupon3Fill}
            text="Coupon"
            location={location}
          />
          <Li
            url="/admin/app/toss"
            Icon={FaGamepad}
            text="Game"
            location={location}
          />
        </ul>
      </div>
)

type LinkProps = {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
};

const Li = ({ url, text, location, Icon }: LinkProps) => (
  <li
    style={{
      backgroundColor: location.pathname.includes(url)
        ? "rgba(0,115,255,0.1)"
        : "white",
    }}
  >
    <Link to={url}>
      <Icon />
      {text}
    </Link>
  </li>
);

export default AdminSideBar;
