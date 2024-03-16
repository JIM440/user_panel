import { useState } from 'react';
import Header from '../../../commons/Header';
import TextInputValue from '../../../commons/TextInputValue';
import { useParams } from 'react-router-dom';
import PerformFetchPut from '../../../utils/Fetch/PerformFetchPut';

const EditHeaderSlide = () => {
  const { id } = useParams();
  const headerSlides = [
    {
      id: 1,
      name: 'Apple Watch Series 9',
      url: 'url to apple watch',
      description: 'The Next Level Adventure',
      position: '1',
      image:
        'https://www.apple.com/v/watch/bk/images/overview/series-9/tile_s9_avail__c104b8nuoec2_large.jpg',
    },
    {
      id: 2,
      name: 'iPad Pro',
      url: 'url to iPad Pro',
      description: 'Change your life with just a click😂',
      position: '2',
      image:
        'https://www.apple.com/v/ipad/home/ci/images/overview/hero/ipad_pro_hero__bh3eq6sqfjw2_large.jpg',
    },
    {
      id: 3,
      name: 'MacBook Pro',
      url: 'url to macbook',
      description: 'Macbook na book',
      position: '3',
      image:
        'https://www.apple.com/newsroom/images/2023/10/apple-unveils-new-macbook-pro-featuring-m3-chips/article/Apple-MacBook-Pro-2up-231030_Full-Bleed-Image.jpg.large.jpg',
    },
  ];
  const editSlide = headerSlides.find((slide) => slide.id === parseInt(id));
  const [previewImage, setPreviewImage] = useState(editSlide.image);
  const [productName, setProductName] = useState(editSlide.name);
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState(editSlide.description);
  const [category, setCategory] = useState(editSlide.name);
  const [url, setUrl] = useState(editSlide.url);
  const [position, setPosition] = useState(editSlide.position);

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

    const apiUrl = `api/content/headerSlide/edit/${id}`;

    const data = {
      product_name: productName,
      image: previewImage,
      description: description,
      category: category,
      url: url,
      position: position,
    };

    alert(
      `You edited the header slide with the product name as ${data.product_name}`
    );

    PerformFetchPut(apiUrl, data);
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
                <span>Author's Image</span>
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
                  setUrl(e.target.value);
                }}
              />
            </div>
          </fieldset>
          <button className="btn" type="submit">
            Edit Slider
          </button>
        </form>
      </div>
    </>
  );
};

export default EditHeaderSlide;
