import { useState } from 'react';

const EditTestimonial = () => {
  const [previewImage, setPreviewImage] = useState('');

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

  return (
    <>
      <header>Edit Testimonial</header>
      <div className="container">
        <form action="" id="testimonial-form">
          <fieldset>
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
              <label htmlFor="name">
                <span>Author's Name:</span>
                <input type="text" id="name" placeholder="Author Name" />
              </label>
              <label htmlFor="content">
                <span>Content:</span>
                <textarea id="content" placeholder="content"></textarea>
              </label>
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
