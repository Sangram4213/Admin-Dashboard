import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Transaction = lazy(() => import("./pages/Transaction"));
const Customers = lazy(() => import("./pages/Customers"));
const NewProduct = lazy(() => import("./pages/management/NewProduct"));
const ProductManagement = lazy(() => import("./pages/management/ProductManagement"));
const TransactionManagement= lazy(() => import("./pages/management/TransactionManagement"));
const BarCharts = lazy(()=>import("./pages/charts/BarCharts"));
const LineCharts = lazy(()=>import("./pages/charts/LineCharts"));
const PieCharts = lazy(()=>import("./pages/charts/PieCharts"));


const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/transaction" element={<Transaction />} />
          <Route path="/admin/customer" element={<Customers />} />

          {/* Charts */}

          <Route path="/admin/chart/bar" element={<BarCharts/>}/>
          <Route path="/admin/chart/line" element={<LineCharts/>}/>
          <Route path="/admin/chart/pie" element={<PieCharts/>}/>
        
          {/* Apps */}

          {/*  Management */}
          <Route path="/admin/product/new" element={<NewProduct/>}/>
          <Route path="/admin/product/:id" element={<ProductManagement/>}/>
          <Route path="/admin/transaction/:id" element={<TransactionManagement/>}/>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
