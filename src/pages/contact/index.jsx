import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="container">
      <h2>Contact Us</h2>
      <div className="form-container">
        <p className="required-before">marks a required field</p>
        {/* form start */}
        <form action="">
          <div className="form-grid-container">
            <div>
              <label htmlFor="" className="required">
                Name:
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter name here"
              />
            </div>
            <div>
              <label htmlFor="" className="required">
                Name:
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter name here"
              />
            </div>
            <div>
              <label htmlFor="" className="required">
                Name:
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter name here"
              />
            </div>
            <div>
              <label htmlFor="" className="required">
                Name:
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter name here"
              />
            </div>
            <div>
              <label htmlFor="" className="required">
                Name:
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter name here"
              />
            </div>
            <div>
              <label htmlFor="" className="required">
                Name:
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter name here"
              />
            </div>
            <div>
              <label htmlFor="" className="required">
                Name:
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter name here"
              />
            </div>
            <div>
              <label htmlFor="" className="required">
                Name:
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter name here"
              />
            </div>
            <div>
              <label htmlFor="" className="required">
                Name:
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter name here"
              />
            </div>
            <div>
              <label htmlFor="" className="required">
                Name:
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter name here"
              />
            </div>
            <div className="textarea">
              <label htmlFor="" className="required">
                Name:
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter message here"
              />
            </div>
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
      <h2>OR</h2>
      <div className="contact-options">
        <div>
        <i class='bx bxs-phone' ></i>
          <h3>Call Us</h3>
          <p>Call Us Now At <br />+44 2037 2344</p>
        </div>
        <div>
        <i class='bx bxs-envelope' ></i>
          <h3>Email Us</h3>
          <p>Email Us Now At <br />support@istore.com</p>
        </div>
        <div>
        <i class='bx bxs-conversation'></i>
          <h3>Chat With Us</h3>
          <Link to="/" className="btn">Start Chat</Link>
        </div>
      </div>

      {/* faqs */}
      <div className="faqs-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faqs-container">
          <div className="faqs">
            <div className="question">
              <h3>Question tag here</h3><i class='bx bx-chevron-down'></i>
            </div>
            <p className="answer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptas nostrum ducimus repudiandae, voluptate id!</p>
          </div>
          <div className="faqs">
            <div className="question">
              <h3>Question tag here</h3><i class='bx bx-chevron-down'></i>
            </div>
            <p className="answer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptas nostrum ducimus repudiandae, voluptate id!</p>
          </div>
          <div className="faqs">
            <div className="question">
              <h3>Question tag here</h3><i class='bx bx-chevron-down'></i>
            </div>
            <p className="answer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptas nostrum ducimus repudiandae, voluptate id!</p>
          </div>
          <div className="faqs">
            <div className="question">
              <h3>Question tag here</h3><i class='bx bx-chevron-down'></i>
            </div>
            <p className="answer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptas nostrum ducimus repudiandae, voluptate id!</p>
          </div>
          <div className="faqs">
            <div className="question">
              <h3>Question tag here</h3><i class='bx bx-chevron-down'></i>
            </div>
            <p className="answer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptas nostrum ducimus repudiandae, voluptate id!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
