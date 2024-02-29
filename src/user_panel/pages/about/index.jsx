import Contact from './components/Contact';
import Header from './components/Header';
import Impact from './components/Impact';
import Mission from './components/Mission';
import NewsLetter from './components/NewsLetter';
import Partners from './components/Partners';
import ProductCatalogue from './components/ProductCatalogue';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Workplace from './components/Workplace';

const Cart = () => {
  return (
    <>
      {/* hero */}
      <Header />

      {/* mission and vision */}
      <Mission />

      {/* product catalogue */}
      <ProductCatalogue />

      {/* workplace */}
      <Workplace />

      {/* our team */}
      <Team />

      {/* impact */}
      <Impact />

      {/* testimonials */}
      <Testimonials />

      {/* partners */}
      <Partners />

      {/* newsletter */}
      <NewsLetter />

      {/* contact form */}
      <Contact />
    </>
  );
};

export default Cart;
