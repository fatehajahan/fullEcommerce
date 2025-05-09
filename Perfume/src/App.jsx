import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import './App.css'
import Home from "./mainPage/Home/Home"
import Navbar from "./components/Home/Navbar/Navbar";
import BroughtPage from "./mainPage/BroughtPageBlue/BroughtPage";
import BroughtPageOrange from "./mainPage/BroughtPageOrange/BroughtPageOrange";
import Contact from "./components/Contact/Contact";
import { useState } from "react";
import AddCart from "./mainPage/AddCart/AddCart";
import ViewCart from "./mainPage/ViewCart/ViewCart";
import Registration from "./mainPage/Registration/Registration";
import Login from "./mainPage/Login/Login";
import Sidebar from "./Admin/Sidebar";
import Header from "./Admin/Header";
import AdminDashboard from "./Admin/AdminDashboard/AdminDashboard";
import CreateCategory from "./Admin/Categories/CreateCategory";
import CategoryList from "./Admin/Categories/CategoryList";
import CreateProduct from "./Admin/Products/CreateProduct";
import CategoryUpdate from "./Admin/Categories/CategoryUpdate";
import CreateSubCategory from "./Admin/SubCategory/CreateSubCategory";

const Layout = () => {
  const [cartOpen, setCartOpen] = useState(false)
  console.log("Layout is rendering, setCartOpen exists:", typeof setCartOpen);

  return (
    <>
      <Navbar setCartOpen={setCartOpen} />
      <AddCart cartOpen={cartOpen} setCartOpen={setCartOpen} />
      <Outlet />
      {cartOpen && (
        <div
          className="fixed inset-0 bg-[#00000049]"
          onClick={() => {
            setCartOpen(false)
            setDropdown(false)
          }}
        ></div>
      )}
    </>
  );
};

const LayoutForAdmin = () => {
  return (
    <div className="flex flex-col h-screen w-full">
      <Header />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* Public/User Layout */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/bluePerfume" element={<BroughtPage />} />
        <Route path="/orangePerfume" element={<BroughtPageOrange />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mycart" element={<ViewCart />} />
      </Route>

      {/* Public Routes outside layout */}
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />

      {/* Admin Layout */}
      <Route element={<LayoutForAdmin />}>
        <Route path="/adminPanel" element={<AdminDashboard />} />
        <Route path="/createcategory" element={<CreateCategory />} />
        <Route path="/categorylist" element={<CategoryList />} />
        <Route path="/createproduct" element={<CreateProduct />} />
        <Route path="/updatecategory/:id" element={<CategoryUpdate />} />
        <Route path="/createsubcategory" element={<CreateSubCategory />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
