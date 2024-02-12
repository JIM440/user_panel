import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";


// pages
import Home from './pages/home/index'
import About from './pages/about/index'
import Cart from './pages/cart/index'
import Contact from './pages/contact/index'
import Category from './pages/product_category/index'
import Detail from './pages/product_detail/index'
import Overview from './pages/product_overview/index'
import Login from "./pages/login";
import Register from "./pages/register";
import NotFound from "./pages/notFound";

// layout
import RootLayout from "./layout/RootLayout";



// creating various routers

const router = createBrowserRouter(
  createRoutesFromElements(
    // rootlayout
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='category' element={<Category />} />
      <Route path='detail' element={<Detail />} />
      <Route path='overview' element={<Overview />} />
      <Route path='cart' element={<Cart />} />
      <Route path='contact' element={<Contact />} />
      <Route path='register' element={<Register />} />
      <Route path='login' element={<Login />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
