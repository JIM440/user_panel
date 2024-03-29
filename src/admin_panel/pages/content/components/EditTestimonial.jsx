import { useState } from 'react';
import TextInputValue from '../../../commons/TextInputValue';
import TextAreaValue from '../../../commons/TextAreaValue';
import Header from '../../../commons/Header';
import { useNavigate, useParams } from 'react-router-dom';
import NotFound from '../../NotFound';
import Loader from '../../../layout/Loader';
import updateData from '../../../utils/async_await/put';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditTestimonial = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [displayLoader, setDisplayLoader] = useState('hide');

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
      id: 4,
      author: 'Alice Johnson',
      text: 'Amazing experience with iStore. Will definitely be a returning customer!',
      date: '2022-09-20',
      image: 'https://source.unsplash.com/featured/?nature',
    },
  ];
  const testimonial =
    testimonials.find((testimonial) => testimonial.id === parseInt(id)) || [];
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
  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiUrl = `api/testimonial/update/${id}`;
    const data = {
      user_name: authorName,
      text: content,
      image: previewImage,
    };

    setDisplayLoader('show');
    await updateData(apiUrl, data, 'Testimonial Updated Succesfully');
    setDisplayLoader('hide');
    setTimeout(() => {
      navigate('/admin/content/about');
    }, 2000);
  };
  const idExists = testimonial.length !== 0 ? true : false;

  if (!idExists) {
    return <NotFound />;
  }
  return (
    <>
      <Loader display={`${displayLoader}`} />
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

export default EditTestimonial;
