import HeaderBtn from '../../../commons/HeaderBtn';
import ProductContainer from './ProductContainer';
import search from '../../../assets/icons/Search.svg';

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
        <div className="search-filters">
          <div className="search-container">
            <img src={search} alt="" />
            <input type="search" placeholder="Search" />
            <button>
              <img src={search} alt="" />
            </button>
          </div>
          <div className="filters-container">
            <select name="" id="">
              <option value="">All Categories</option>
              <option value="">Watch</option>
              <option value="">iPhone</option>
              <option value="">iPad</option>
              <option value="">AirPods</option>
              <option value="">MacBooks</option>
            </select>
            <select name="" id="">
              <option value="last added">Last Added</option>
              <option value="">Newest First</option>
              <option value="">Oldest First</option>
            </select>
          </div>
        </div>
        <ProductContainer />
      </div>
    </>
  );
};

export default AllProducts;
