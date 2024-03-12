import Header from '../../../commons/Header';
import TextAreaValue from '../../../commons/TextAreaValue';
import TextInputValue from '../../../commons/TextInputValue';

const EditCategory = () => {
  return (
    <>
      <Header text="Edit Category" />
      <div className="container">
        <form action="" className="add-category-product">
          <fieldset>
            <h3>Category Info</h3>
            <div className="form-even-columns">
              <TextInputValue
                label="Category Name"
                placeholder="Category Name"
              />
              <TextInputValue
                label="Category Hero Title"
                placeholder="Category Hero Title"
              />
              <TextInputValue
                label="Category Hero Description"
                placeholder="Category Hero Description"
              />
              <div className="category-images product-images">
                <label className="" htmlFor="category-featured-image">
                  <div className="img">
                    <img src="" alt="" />
                  </div>
                  <span>Category Featured Image</span>
                  <input
                    type="file"
                    name="category-featured-image"
                    id="category-featured-image"
                  />
                </label>
                <label htmlFor="category-hero-image">
                  <div className="img">
                    <img src="" alt="" />
                  </div>
                  <span>Category Hero Image</span>
                  <input
                    type="file"
                    name="category-hero-image"
                    id="category-hero-image"
                  />
                </label>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <h3>Category Details</h3>
            <div className="form-even-columns">
              <TextAreaValue label="Overview" placeholder="Overview" />
              <TextAreaValue label="Performance" placeholder="Performance" />
              <TextAreaValue label="Design" placeholder="Design" />
              <TextAreaValue label="Integration" placeholder="Integration" />
            </div>
          </fieldset>
          <button type="submit" className="btn">
            Add Category
          </button>
        </form>
      </div>
    </>
  );
};

export default EditCategory;
