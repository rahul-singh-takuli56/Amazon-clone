import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import { productsData } from "./api/api";
import Signin from "./pages/Signin";
import Cart from "./pages/Cart";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} loader={productsData}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Route>
    )
  );
  return (
    <div className="font-bodyFont bg-gray-100">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
