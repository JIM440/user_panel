import { useEffect, useState } from 'react';
import Header from '../../../commons/Header';
import TextInputValue from '../../../commons/TextInputValue';
import { useParams, useHistory, useNavigate } from 'react-router-dom';
import NotFound from '../../NotFound';
import updateData from '../../../utils/async_await/put';
import Loader from '../../../layout/Loader';
import fetchData from '../../../utils/async_await/Get';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditHeaderSlide = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  // const headerSlides = [
  //   {
  //     id: 1,
  //     name: 'Apple Watch Series 9',
  //     url: 'url to apple watch',
  //     description: 'The Next Level Adventure',
  //     position: '1',
  //     image:
  //       'https://www.apple.com/v/watch/bk/images/overview/series-9/tile_s9_avail__c104b8nuoec2_large.jpg',
  //   },
  //   {
  //     id: 2,
  //     name: 'iPad Pro',
  //     url: 'url to iPad Pro',
  //     description: 'Change your life with just a click😂',
  //     position: '2',
  //     image:
  //       'https://www.apple.com/v/ipad/home/ci/images/overview/hero/ipad_pro_hero__bh3eq6sqfjw2_large.jpg',
  //   },
  //   {
  //     id: 3,
  //     name: 'MacBook Pro',
  //     url: 'url to macbook',
  //     description: 'Macbook na book',
  //     position: '3',
  //     image:
  //       'https://www.apple.com/newsroom/images/2023/10/apple-unveils-new-macbook-pro-featuring-m3-chips/article/Apple-MacBook-Pro-2up-231030_Full-Bleed-Image.jpg.large.jpg',
  //   },
  // ];
  const [editSlide, setEditSlide] = useState(null);
  useEffect(() => {
    fetch(`https://appleproductsbackend.vercel.app/v1/hero/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setEditSlide(data);
        setIsLoading(false);
        InitialiseVariables(data);
        setIdExists(data.length !== 0 ? true : false);
      })
      .catch((error) => console.log('Error:', error));
  }, []);

  fetchData(`https://appleproductsbackend.vercel.app/v1/hero/${id}`);

  const [displayLoader, setDisplayLoader] = useState('hide');
  const [idExists, setIdExists] = useState(true);
  // const [previewImage, setPreviewImage] = useState(editSlide.image);
  const [previewImage, setPreviewImage] = useState('');
  const [productName, setProductName] = useState('');
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
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

    const apiUrl = `/${id}`;

    const data = {
      product_name: productName,
      description: description,
      category_name: category,
      slide_position: position,
    };

    setDisplayLoader('show');
    await updateData(apiUrl, data);
    setDisplayLoader('hide');
    setTimeout(() => {
      navigate('/admin/content/home');
    }, 2000);
  };

  const InitialiseVariables = (data) => {
    setProductName(data.product_name);
    setDescription(data.description);
    setCategory(data.category_name);
    setPosition(data.slide_position);
  };

  if (isLoading) {
    return <Loader />;
  }
  if (!idExists) {
    return <NotFound />;
  }
  return (
    <>
      <Loader display={`${displayLoader}`} />
      {/* header */}
      <Header text="Edit Header Slide" />
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
                  {previewImage && <img src={previewImage} alt="author" />}
                </div>
                <span>Header Image</span>
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
                value={productName}
                change={(e) => {
                  setProductName(e.target.value);
                }}
              />
              <TextInputValue
                name="Description"
                label="description"
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
                  const value = e.target.value;
                  setPosition(value.replace(/\D/g, ''));
                }}
              />
            </div>
          </fieldset>
          <button className="btn" type="submit">
            Edit Slider
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

export default EditHeaderSlide;
