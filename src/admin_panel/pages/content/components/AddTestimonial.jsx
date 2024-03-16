import { useState } from 'react';
import TextInputValue from '../../../commons/TextInputValue';
import TextAreaValue from '../../../commons/TextAreaValue';
import Header from '../../../commons/Header';
import PerformFetchPost from '../../../utils/Fetch/PerformFetchPost';

const AddTestimonial = () => {
  const [previewImage, setPreviewImage] = useState('');

  const [authorName, setAuthorName] = useState('');
  const [content, setContent] = useState('');

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

    PerformFetchPost(apiUrl, data);
    setAuthorName('');
    setContent('');
    setPreviewImage('');
  };

  return (
    <>
      <Header text="Add Testimonial" />
      <div className="container">
        <form action="" id="testimonial-form" onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="image">
              <div className="img">
                {previewImage && <img src={previewImage} alt="author" />}
              </div>
              <span>Author's Image</span>
              <input
                type="file"
                id="image"
                accept="image/*"
                required
                onChange={handleImageChange}
              />
            </label>
            <div>
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
            Add Testimonial
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTestimonial;
