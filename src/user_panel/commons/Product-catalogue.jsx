import { Link } from 'react-router-dom';
import watch from '../assets/images/products/ipad.jpg';

const ProductCatalogue = ({ className, product }) => {
  return (
    <>
      <div className={`product-container ${className}`}>
        {product.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image">
              <img
                src="https://alephksa.com/cdn/shop/files/Apple_Watch_Series_9_LTE_41mm_Graphite_Stainless_Steel_Midnight_Sport_Band_PDP_Image_Position-1__en-ME_1445x.jpg?v=1698972694"
                width="268px"
                height="256px"
                alt=""
              />
            </div>
            <h3 className="name">{product.name}</h3>
            <p className="description">
              {product.description.long_description}
            </p>
            <div className="btn-container">
              <Link
                to={`/overview/${product.name
                  .toLowerCase()
                  .replace(/\s/g, '')}`}
                className="link"
              >
                <span>Learn More</span>
                <i className="bx bx-chevron-right"></i>
              </Link>
              <Link
                to={`/buy/${product.name.toLowerCase().replace(/\s/g, '')}`}
                className="btn"
              >
                Buy
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductCatalogue;
