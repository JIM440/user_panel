import { useState } from 'react';
import Header from '../../../commons/Header';
import TextInputValue from '../../../commons/TextInputValue';
import postData from '../../../utils/async_await/post';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../../layout/Loader';
import { useNavigate } from 'react-router-dom';

const AddHeaderSlide = () => {
  const navigate = useNavigate();
  const [displayLoader, setDisplayLoader] = useState('hide');
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiUrl = 'v1/hero';

    const data = {
      product_name: productName,
      category_name: category,
      description: description,
      slide_position: position,
    };

    setDisplayLoader('show');
    postData(apiUrl, data, 'Hero slide deleted successfully');
    setDisplayLoader('hide');
    setTimeout(() => {
      navigate('/admin/content/about');
    }, 2000);
  };

  return (
    <>
      <Loader display={`${displayLoader}`} />
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </>
  );
};

export default AddHeaderSlide;
