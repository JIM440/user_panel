import LawEnforcement from '../../commons/LawEnforcement';
import Description from './components/Description';
import Header from './components/Header';
import Products from './components/Products';

const Category = () => {
  return (
    <>
      {/* header */}
      <Header />

      {/* description */}
      <Description />

      {/* choose macbook */}
      <Products />

      {/* law enforcement */}
      <LawEnforcement />
    </>
  );
};

export default Category;
