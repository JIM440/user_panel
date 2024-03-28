import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../../layout/Loader';
// components
import NotFound from '../../NotFound';
import Header from '../../../commons/Header';
import TextAreaValue from '../../../commons/TextAreaValue';
import TextInputValue from '../../../commons/TextInputValue';
// fxns
import updateData from '../../../utils/async_await/put';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [displayLoader, setDisplayLoader] = useState('hide');
  const [category, setCategory] = useState(null);
  const [idExists, setIdExists] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryName, setCategoryName] = useState('');
  const [categoryHeroTitle, setCategoryHeroTitle] = useState('');
  const [featuredProductName, setFeaturedProductName] = useState('');
  const [categoryHeroDescription, setCategoryHeroDescription] = useState('');
  const [categoryOverview, setCategoryOverview] = useState('');
  const [categoryPerformance, setCategoryPerformance] = useState('');
  const [categoryDesign, setCategoryDesign] = useState('');
  const [categoryIntegration, setCategoryIntegration] = useState('');
  const [previewImageFeatured, setPreviewImageFeatured] = useState('');
  const [previewImageHero, setPreviewImageHero] = useState('');

  useEffect(() => {
    // const api = 'https://appleproductsbackend.vercel.app/v1/category/65f94817b547b219d8b049c9';
    const url = `https://appleproductsbackend.vercel.app/v1/category/byName/${id
      .toLowerCase()
      .replace(/\s/g, '')}/`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setIdExists(true);
          performInitialiase(data);
          setCategory(data);
          // console.log(data.message);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.log('error:', err);
      });
  }, [id]);

  const performInitialiase = (data) => {
    setCategoryName(data.categoryName);
    setCategoryHeroTitle(data.heroTitle);
    setFeaturedProductName(data.featuredProductName);
    setCategoryHeroDescription(data.heroDescription);
    setCategoryOverview(data.overview);
    setCategoryPerformance(data.performance);
    setCategoryDesign(data.design);
    setCategoryIntegration(data.integration);
    setPreviewImageFeatured(data.featuredImage);
    setPreviewImageHero(data.heroImage);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      categoryName: categoryName,
      heroTitle: categoryHeroTitle,
      heroDescription: categoryHeroDescription,
      featuredProductName: featuredProductName,
      overview: categoryOverview,
      performance: categoryPerformance,
      integration: categoryIntegration,
      design: categoryDesign,
      // featuredImage: previewImageFeatured,
      // heroImage: previewImageHero,
    };
    const url = `v1/category/${category.id}`;
    setDisplayLoader('show');

    await updateData(url, data, 'Category Edited Successfully');
    setDisplayLoader('hide');
    setTimeout(() => {
      navigate('/admin/products/categories');
    }, 2000); // setTimeout(() => {
    //   navigate('/admin/products/categories/');
    // }, 1000);
  };

  const handleFeatureImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setPreviewImageFeatured(reader.result);
    };

    if (file && file.type.startsWith('image/')) {
      reader.readAsDataURL(file);
    }
  };

  const handleHeroImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setPreviewImageHero(reader.result);
    };

    if (file && file.type.startsWith('image/')) {
      reader.readAsDataURL(file);
    }
  };

  // if category doesnt exist go to not found page
  if (isLoading) {
    return <Loader />;
  }
  // console.log(idExists);
  if (!idExists) {
    return <NotFound />;
  }
  return (
    <>
      <Loader display={`${displayLoader}`} />
      <Header text="Edit Category" />
      <div className="container">
        <form
          action=""
          className="add-category-product"
          onSubmit={handleSubmit}
        >
          <fieldset>
            <h3>Category Info</h3>
            <div className="form-even-columns">
              <TextInputValue
                label="Category Name"
                placeholder="Category Name"
                value={categoryName}
                change={(e) => {
                  setCategoryName(e.target.value);
                }}
              />
              <TextInputValue
                label="Category Hero Title"
                placeholder="Category Hero Title"
                value={categoryHeroTitle}
                change={(e) => {
                  setCategoryHeroTitle(e.target.value);
                }}
              />
              <TextInputValue
                label="Category Hero Description"
                placeholder="Category Hero Description"
                value={categoryHeroDescription}
                change={(e) => {
                  setCategoryHeroDescription(e.target.value);
                }}
              />
              <TextInputValue
                label="Category Featured Product Name"
                placeholder="Category Featured Product Name"
                value={featuredProductName}
                change={(e) => {
                  setFeaturedProductName(e.target.value);
                }}
              />
              <div className="category-images product-images">
                <label className="" htmlFor="category-featured-image">
                  <div className="img">
                    {previewImageFeatured && (
                      <img src={previewImageFeatured} alt="author" />
                    )}
                  </div>
                  <span>Category Featured Image</span>
                  <input
                    type="file"
                    name="category-featured-image"
                    accept="image/*"
                    id="category-featured-image"
                    onChange={handleFeatureImageChange}
                  />
                </label>
                <label htmlFor="category-hero-image">
                  <div className="img">
                    {previewImageHero && (
                      <img src={previewImageHero} alt="author" />
                    )}
                  </div>
                  <span>Category Hero Image</span>
                  <input
                    type="file"
                    name="category-hero-image"
                    accept="image/*"
                    id="category-hero-image"
                    onChange={handleHeroImageChange}
                  />
                </label>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <h3>Category Details</h3>
            <div className="form-even-columns">
              <TextAreaValue
                label="Overview"
                placeholder="Overview"
                value={categoryOverview}
                change={(e) => {
                  setCategoryOverview(e.target.value);
                }}
              />
              <TextAreaValue
                label="Performance"
                placeholder="Performance"
                value={categoryPerformance}
                change={(e) => {
                  setCategoryPerformance(e.target.value);
                }}
              />
              <TextAreaValue
                label="Design"
                placeholder="Design"
                value={categoryDesign}
                change={(e) => {
                  setCategoryDesign(e.target.value);
                }}
              />
              <TextAreaValue
                label="Integration"
                placeholder="Integration"
                value={categoryIntegration}
                change={(e) => {
                  setCategoryIntegration(e.target.value);
                }}
              />
            </div>
          </fieldset>
          <button type="submit" className="btn">
            Edit Category
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

export default EditCategory;
