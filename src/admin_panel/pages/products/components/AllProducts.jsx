import HeaderBtn from '../../../commons/HeaderBtn';
import ProductContainer from './ProductContainer';
const AllProducts = () => {
  return (
    <>
      <HeaderBtn
        text="All Products"
        url="/admin/product/add"
        urlText="Add Product"
      />
      <div className="container">
        {/* search and filter */}
        <ProductContainer />
      </div>
    </>
  );
};

export default AllProducts;
