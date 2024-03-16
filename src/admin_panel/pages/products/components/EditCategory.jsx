import { useState } from 'react';
import Header from '../../../commons/Header';
import TextAreaValue from '../../../commons/TextAreaValue';
import TextInputValue from '../../../commons/TextInputValue';
import performFetchPut from '../../../utils/Fetch/PerformFetchPut';
import { useParams } from 'react-router-dom';

const EditCategory = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([
    {
      id: '1',
      name: 'iPhone',
      image:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-12-pro-blue-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1635202834000',
      date_added: new Date('2012-02-02'),
    },
    {
      id: '2',
      name: 'iPad',
      image:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-ipad-air-wifi-green-2021?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1644268592092',
      date_added: new Date('2012-01-02'),
    },
    {
      id: '3',
      name: 'MacBook',
      image:
        'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP854/mbp14-silver2.png',
      date_added: new Date('2012-04-02'),
    },
    {
      id: '4',
      name: 'Apple Watch',
      image:
        'https://i5.walmartimages.com/asr/3580b718-154d-427d-898c-05b3e46332ba.779952d7e83af1cd4883757c516eb7b5.png',
      date_added: new Date('2012-06-02'),
    },
    {
      id: '5',
      name: 'AirPods',
      image:
        'https://images.macrumors.com/t/2oOomFnia-hmIfwvXVejKx3mNEE=/1600x/article-new/2019/10/airpods-pro-roundup.jpg',
      date_added: new Date('2012-07-02'),
    },
  ]);
  const category = products.find(
    (product) => product.name.toLowerCase() === id
  );

  const [categoryName, setCategoryName] = useState(category.name);
  const [categoryHeroTitle, setCategoryHeroTitle] = useState('');
  const [categoryHeroDescription, setCategoryHeroDescription] = useState('');
  const [categoryOverview, setCategoryOverview] = useState('');
  const [categoryPerformance, setCategoryPerformance] = useState('');
  const [categoryDesign, setCategoryDesign] = useState('');
  const [categoryIntegration, setCategoryIntegration] = useState('');
  const [previewImageFeatured, setPreviewImageFeatured] = useState('');
  const [previewImageHero, setPreviewImageHero] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      categoryName: categoryName,
      categoryHeroTitle: categoryHeroTitle,
      categoryHeroDescription: categoryHeroDescription,
      categoryOverview: categoryOverview,
      categoryPerformance: categoryPerformance,
      categoryIntegration: categoryIntegration,
      categoryDesign: categoryDesign,
      featuredImage: previewImageFeatured,
      heroImage: previewImageHero,
    };
    const url = `api/product/category/edit/${id}`;

    performFetchPut(url, data);
    alert(`Category Edited: ${categoryName}`);
    // setCategoryName('');
    // setCategoryHeroTitle('');
    // setCategoryHeroDescription('');
    // setCategoryOverview('');
    // setCategoryPerformance('');
    // setCategoryDesign('');
    // setCategoryIntegration('');
    // setPreviewImageFeatured('');
    // setPreviewImageHero('');
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
  return (
    <>
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
                    required
                    onChange={handleFeatureImageChange}
                  />
                </label>
                <label htmlFor="category-hero-image">
                  <div className="img">
                    {previewImageHero && (
                      <img src={previewImageFeatured} alt="author" />
                    )}
                  </div>
                  <span>Category Hero Image</span>
                  <input
                    type="file"
                    name="category-hero-image"
                    accept="image/*"
                    id="category-hero-image"
                    required
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
    </>
  );
};

export default EditCategory;
