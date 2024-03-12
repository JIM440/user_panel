import { useState } from 'react';
import Header from '../../../commons/Header';
import TextInputValue from '../../../commons/TextInputValue';

const AddHeaderSlide = () => {
  const [previewImage, setPreviewImage] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setPreviewImage(reader.result);
    };

    if (file && file.type.startsWith('image/')) {
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      {/* header */}
      <Header text="Add Header Slide" />
      {/*  */}
      <div className="container">
        <form className="add-header-slider-form" action="">
          <fieldset className="add-header-slide">
            <div>
              <label htmlFor="image">
                <div className="img">
                  {previewImage && (
                    <img
                      src={previewImage}
                      alt="author"
                      width="200px"
                      height="200px"
                    />
                  )}
                </div>
                <span>Slider Image</span>
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
            </div>
            <div>
              <TextInputValue
                name="product_name"
                label="Product name"
                placeholder="Product name"
              />
              <TextInputValue
                name="Description"
                label="description"
                placeholder="Description"
              />
              <TextInputValue
                name="category"
                label="Category"
                placeholder="Category"
              />
              <TextInputValue
                name="URL"
                label="URL"
                placeholder="url to product"
              />
              <TextInputValue
                name="position"
                label="Position"
                placeholder="Position"
              />
            </div>
          </fieldset>
          <button className="btn" type="submit">
            Add Slider
          </button>
        </form>
      </div>
    </>
  );
};

export default AddHeaderSlide;
