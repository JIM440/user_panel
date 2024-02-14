import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

// pages
import About from './pages/about/index';
import Home from './pages/home/index';
import Cart from './pages/cart/index';
import Contact from './pages/contact/index';
import Category from './pages/product_category/index';
import Detail from './pages/product_detail/index';
import Overview from './pages/product_overview/index';
import Login from './pages/login';
import Register from './pages/register';
import NotFound from './pages/notFound';
import OrderPage from './pages/contact/components/OrderPage';
import General from './pages/contact/components/General';

// layout
import RootLayout from './layout/RootLayout';
import Products from './pages/cart/components/Products';

// creating various routers

const router = createBrowserRouter(
  createRoutesFromElements(
    // rootlayout
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="category" element={<Category />} />
      <Route path="detail" element={<Detail />} />
      <Route path="overview" element={<Overview />} />
      <Route path="cart" element={<Cart />} />
      {/* contact */}
      <Route path="contact" element={<Contact />}>
        <Route path="general" element={<General />} />
        <Route path="order" element={<OrderPage />} />
      </Route>
      {/* login and register */}
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      {/* products */}
      <Route path="products" element={<Products />} />
      {/* notfound */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
