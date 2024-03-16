import { useState } from 'react';
import Header from '../../../commons/Header';
import TextAreaValue from '../../../commons/TextAreaValue';
import TextInputValue from '../../../commons/TextInputValue';
import performFetchPut from '../../../utils/Fetch/PerformFetchPut';
import { useNavigate, useParams } from 'react-router-dom';
import NotFound from '../../NotFound';

const EditCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const products = [
    {
      id: '1',
      name: 'iPhone',
      image:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-12-pro-blue-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1635202834000',
      date_added: new Date('2012-02-02'),
      design: 'Sleek and modern design',
      performance: 'High-performance processor',
      integration: 'Seamless integration with other Apple devices',
      overview: 'The latest iPhone model with advanced features',
      heroTitle: 'iPhone 12 Pro',
      heroDescription: 'Experience the power of innovation with iPhone 12 Pro.',
    },
    {
      id: '2',
      name: 'iPad',
      image:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-ipad-air-wifi-green-2021?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1644268592092',
      date_added: new Date('2012-01-02'),
      design: 'Slim and lightweight design',
      performance: 'Fast and responsive performance',
      integration: 'Seamless compatibility with Apple Pencil and accessories',
      overview: 'A versatile tablet for work and play',
      heroTitle: 'iPad Air',
      heroDescription:
        'Discover the power of iPad Air for creativity and productivity.',
    },
    {
      id: '3',
      name: 'MacBook',
      image:
        'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP854/mbp14-silver2.png',
      date_added: new Date('2012-01-02'),
      design: 'Slim and lightweight design',
      performance: 'Fast and responsive performance',
      integration: 'Seamless compatibility with Apple Pencil and accessories',
      overview: 'A versatile tablet for work and play',
      heroTitle: 'MacBook',
      heroDescription:
        'Discover the power of MacBook for creativity and productivity.',
    },
    // Add similar properties for the remaining products
  ];
  const category = products.find(
    (product) => product.name.toLowerCase() === id
  );
  const idExists = category ? true : false;

  // if category doesnt exist go to not found page
  // if (!idExists) {
  //   return <NotFound />
  // }

  const [categoryName, setCategoryName] = useState(category.name);
  const [categoryHeroTitle, setCategoryHeroTitle] = useState(
    category.heroTitle
  );
  const [categoryHeroDescription, setCategoryHeroDescription] = useState(
    category.heroDescription
  );
  const [categoryOverview, setCategoryOverview] = useState(category.overview);
  const [categoryPerformance, setCategoryPerformance] = useState(
    category.performance
  );
  const [categoryDesign, setCategoryDesign] = useState(category.design);
  const [categoryIntegration, setCategoryIntegration] = useState(
    category.integration
  );
  const [previewImageFeatured, setPreviewImageFeatured] = useState(
    category.image
  );
  const [previewImageHero, setPreviewImageHero] = useState(category.image);

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
    setTimeout(() => {
      navigate('/admin/products/categories/');
    }, 1000);
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
