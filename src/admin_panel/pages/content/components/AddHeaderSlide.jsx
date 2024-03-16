import { useState } from 'react';
import Header from '../../../commons/Header';
import TextInputValue from '../../../commons/TextInputValue';
import PerformFetchPost from '../../../utils/Fetch/PerformFetchPost';

const AddHeaderSlide = () => {
  const [previewImage, setPreviewImage] = useState('');

  const [productName, setProductName] = useState('');
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [url, setUrl] = useState('');
  const [position, setPosition] = useState('');
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

  const handleSubmit = (event) => {
    event.preventDefault();

    const apiUrl = 'api/content/home/add';

    const data = {
      product_name: productName,
      image: previewImage,
      description: description,
      category: category,
      url: url,
      position: position,
    };

    console.log(data);
    alert(
      `You added the header slide with the product name as ${data.product_name}`
    );

    PerformFetchPost(apiUrl, data);
    setProductName('');
    setProductName('');
    setDescription('');
    setCategory('');
    setUrl('');
    setPosition('');
    setPreviewImage('');
  };

  return (
    <>
      {/* header */}
      <Header text="Add Header Slide" />
      {/*  */}
      <div className="container">
        <form
          className="add-header-slider-form"
          action=""
          onSubmit={handleSubmit}
        >
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
                  required
                  onChange={handleImageChange}
                />
              </label>
            </div>
            <div>
              <TextInputValue
                name="product_name"
                label="Product name"
                placeholder="Product name"
                value={productName}
                change={(e) => {
                  setProductName(e.target.value);
                }}
              />
              <TextInputValue
                name="Description"
                label="Description"
                placeholder="Description"
                value={description}
                change={(e) => {
                  setDescription(e.target.value);
                }}
              />
              <TextInputValue
                name="category"
                label="Category"
                placeholder="Category"
                value={category}
                change={(e) => {
                  setCategory(e.target.value);
                }}
              />
              <TextInputValue
                name="URL"
                label="URL"
                placeholder="url to product"
                value={url}
                change={(e) => {
                  setUrl(e.target.value);
                }}
              />
              <TextInputValue
                name="position"
                label="Position"
                placeholder="Position"
                value={position}
                change={(e) => {
                  setPosition(e.target.value);
                }}
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
