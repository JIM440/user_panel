import { useEffect, useState } from 'react';
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
      featuredImage:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-12-pro-blue-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1635202834000',
      heroImage:
        'https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large.jpg',
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
      featuredImage:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-ipad-air-wifi-green-2021?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1644268592092',
      heroImage:
        'https://files.refurbed.com/ii/ipad-pro-5-12-9-2021-1643961980.jpg?t=fitdesign&h=600&w=800',
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
      date_added: new Date('2012-01-02'),
      featuredImage:
        'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP854/mbp14-silver2.png',
      heroImage:
        'https://www.apple.com/v/macbook-air-m1/f/images/meta/macbook-air_overview__15sjf4iagj6q_og.png',
      design: 'Slim and lightweight design',
      performance: 'Fast and responsive performance',
      integration: 'Seamless compatibility with Apple Pencil and accessories',
      overview: 'A versatile tablet for work and play',
      heroTitle: 'MacBook',
      heroDescription:
        'Discover the power of MacBook for creativity and productivity.',
    },
    {
      id: '4',
      name: 'AirPod',
      featuredImage:
        'https://images.macrumors.com/t/2oOomFnia-hmIfwvXVejKx3mNEE=/1600x/article-new/2019/10/airpods-pro-roundup.jpg',
      heroImage:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MTJV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1694014871985',
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
      id: '5',
      name: 'Watch',
      date_added: new Date('2012-01-02'),
      featuredImage:
        'https://i5.walmartimages.com/asr/3580b718-154d-427d-898c-05b3e46332ba.779952d7e83af1cd4883757c516eb7b5.png',
      heroImage:
        'https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-series7_hero_09142021_big.jpg.large.jpg',
      design: 'Slim and lightweight design',
      performance: 'Fast and responsive performance',
      integration: 'Seamless compatibility with Apple Pencil and accessories',
      overview: 'A versatile tablet for work and play',
      heroTitle: 'MacBook',
      heroDescription:
        'Discover the power of MacBook for creativity and productivity.',
    },
  ];
  const category =
    products.find(
      (product) => product.name.toLowerCase().replace(/\s/g, '') === id
    ) || [];
  const idExists = category.length !== 0 ? true : false;

  const [categoryName, setCategoryName] = useState(category.name);
  console.log(categoryName);
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
    category.featuredImage
  );
  const [previewImageHero, setPreviewImageHero] = useState(category.heroImage);

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
  if (!idExists) {
    return <NotFound />;
  } else {
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
      </>
    );
  }
};

export default EditCategory;
