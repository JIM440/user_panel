const Description = ({ category }) => {
  return (
    <section id="description">
      <div className="container">
        <div>
          <h2>Overview</h2>
          <p>{category.overview}</p>
        </div>
        <div>
          <h2>Performance</h2>
          <p>{category.performance}</p>
        </div>
        <div>
          <h2>Design</h2>
          <p>{category.design}</p>
        </div>
        <div>
          <h2>Integration</h2>
          <p>{category.integration}</p>
        </div>
      </div>
    </section>
  );
};

export default Description;
