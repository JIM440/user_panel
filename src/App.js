import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

// user pages
import About from './user_panel/pages/about/index';
import Home from './user_panel/pages/home/index';
import Cart from './user_panel/pages/cart/index';
import Contact from './user_panel/pages/contact/index';
import Category from './user_panel/pages/product_category/index';
import Detail from './user_panel/pages/product_detail/index';
import Overview from './user_panel/pages/product_overview/index';
import Login from './user_panel/pages/login';
import Register from './user_panel/pages/register';
import NotFound from './user_panel/pages/notFound';
import OrderPage from './user_panel/pages/contact/components/OrderPage';
import General from './user_panel/pages/contact/components/General';

// user layouts
import RootLayout from './user_panel/layout/RootLayout';
import ProductsCart from './user_panel/pages/cart/components/Products';

// admin pages
import Dashboard from './admin_panel/pages/dashboard/index';
// content
import ContentManagement from './admin_panel/pages/content/index';
import AboutContent from './admin_panel/pages/content/components/About';
import EditTestimonial from './admin_panel/pages/content/components/EditTestimonial';
import AddTestimonial from './admin_panel/pages/content/components/AddTestimonial';
import HomeContent from './admin_panel/pages/content/components/Home';
// customers
import Customers from './admin_panel/pages/customers/index';
import AllCustomers from './admin_panel/pages/customers/components/AllCustomers';
import Chat from './admin_panel/pages/customers/components/Chat';
// Products
import Products from './admin_panel/pages/products/index';
import AllProducts from './admin_panel/pages/products/components/AllProducts';
import ProductCategories from './admin_panel/pages/products/components/ProductCategories';
import AddProduct from './admin_panel/pages/products/components/AddProduct';
import LoginAdmin from './admin_panel/pages/login/index';
import RegisterAdmin from './admin_panel/pages/register/index';
// admin layouts
import AdminRootLayout from './admin_panel/layout/RootLayout';

// creating various routers

const router = createBrowserRouter(
  createRoutesFromElements(
    // rootlayout
    <>
      <Route path="/" element={<RootLayout />}>
        {/* ==============================
      ==========user Routes=============
      ============================== */}
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
        {/* products */}
        <Route path="products" element={<ProductsCart />} />
      </Route>
      {/* login and register */}
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />

      {/* ==============================
      ==========Admin Routes============
      ============================== */}
      <Route path="/admin" element={<AdminRootLayout />}>
        <Route index element={<Dashboard />} />
        {/* products */}
        <Route path="product" element={<Products />}>
          <Route path="all" element={<AllProducts />}></Route>
          <Route path="categories" element={<ProductCategories />}></Route>
          <Route path="add" element={<AddProduct />}></Route>
        </Route>
        {/* orders */}
        <Route path="orders" element={<h1>Orders</h1>} />

        {/* customers */}
        <Route path="customers" element={<Customers />}>
          <Route path="all" element={<AllCustomers />} />
          <Route path="chat" element={<Chat />} />
        </Route>

        {/* analytics */}
        <Route path="analytics" element={<h1>analytics</h1>} />

        {/* content */}
        <Route path="content" element={<ContentManagement />}>
          <Route path="home" element={<HomeContent />} />
          {/* about */}
          <Route path="about" element={<AboutContent />} />
          <Route path="about/add" element={<AddTestimonial />} />
          <Route path="about/edit" element={<EditTestimonial />} />
        </Route>

        {/* reviews */}
        <Route path="reviews" element={<h1>reviews</h1>} />
        {/* promotions */}
        <Route path="promotions" element={<h1>promotions</h1>} />
      </Route>
      {/* admin login and register */}
      <Route path="/admin/login" element={<LoginAdmin />} />
      <Route path="/admin/register" element={<RegisterAdmin />} />

      {/* notfound */}
      <Route path="*" element={<NotFound />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
