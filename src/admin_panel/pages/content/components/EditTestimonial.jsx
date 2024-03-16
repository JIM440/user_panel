import { useState } from 'react';
import TextInputValue from '../../../commons/TextInputValue';
import TextAreaValue from '../../../commons/TextAreaValue';
import Header from '../../../commons/Header';
import performFetchPut from '../../../utils/Fetch/PerformFetchPut';
import { useParams } from 'react-router-dom';

const EditTestimonial = () => {
  const { id } = useParams();

  const testimonials = [
    {
      id: 1,
      author: 'John Doe',
      text: 'Great products and excellent customer service. I highly recommend iStore!',
      date: '2022-09-15',
      image: 'https://source.unsplash.com/featured/?person',
    },
    {
      id: 2,
      author: 'Jane Smith',
      text: 'I love shopping at iStore. The quality of the products is top-notch!',
      date: '2022-09-18',
      image: 'https://source.unsplash.com/featured/?portrait',
    },
    {
      id: 3,
      author: 'Alice Johnson',
      text: 'Amazing experience with iStore. Will definitely be a returning customer!',
      date: '2022-09-20',
      image: 'https://source.unsplash.com/featured/?nature',
    },
  ];
  const testimonial = testimonials.find(
    (testimonial) => testimonial.id === parseInt(id)
  );
  const [previewImage, setPreviewImage] = useState(testimonial.image);
  const [authorName, setAuthorName] = useState(testimonial.author);
  const [content, setContent] = useState(testimonial.text);

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

    const apiUrl = 'api/content/about/add';

    const data = {
      author_name: authorName,
      testimonial_content: content,
      image: previewImage,
    };

    alert(`You added the testimonial content as ${data.author_name}`);

    performFetchPut(apiUrl, data);
    setAuthorName('');
    setContent('');
    setPreviewImage('');
  };
  return (
    <>
      {/* header */}
      <Header text="Edit Testimonial" />
      <div className="container">
        {/* form */}
        <form action="" id="testimonial-form" onSubmit={handleSubmit}>
          <fieldset>
            {/* image */}
            <label htmlFor="image">
              <div className="img">
                {previewImage && <img src={previewImage} alt="author" />}
              </div>
              <span
                style={{
                  marginTop: '10px',
                }}
              >
                Author's Image
              </span>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
            <div>
              {/* text input */}
              <TextInputValue
                label="Author's Name"
                name="name"
                placeholder="Author Name"
                value={authorName}
                change={(e) => setAuthorName(e.target.value)}
              />
              <TextAreaValue
                label="Content"
                placeholder="content"
                value={content}
                change={(e) => {
                  setContent(e.target.value);
                }}
              />
            </div>
          </fieldset>
          <button className="btn" type="submit">
            Submit Update
          </button>
        </form>
      </div>
    </>
  );
};

export default EditTestimonial;
