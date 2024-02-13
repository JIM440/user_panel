import ProductCatalogue from '../../../commons/Product-catalogue';

const RelatedProducts = () => {
  return (
    <section id="related-products">
      <div className="container">
        <h2>Related Products</h2>
        <ProductCatalogue className="overflow" />
      </div>
    </section>
  );
};

export default RelatedProducts;
