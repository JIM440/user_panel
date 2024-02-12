import { Link } from 'react-router-dom';
import company from '../../assets/images/about/company.svg';
import watch from '../../assets/images/products/watch.jpg';
import workplace from '../../assets/images/about/workplace.svg';
import impact from '../../assets/images/about/impact.svg';
import anisha from '../../assets/images/about/anisha lee.svg';
import person from '../../assets/images/about/cheng wei.svg';

const Cart = () => {
  return (
    <>
      {/* hero */}
      <header id="header-about" className="container">
        <div className="intro-text">
          <p>
            iStore is a leading provider of a wide range of innovative Apple
            products. With a deep passion for technology and a commitment to
            exceptional customer experience, we have established ourselves as a
            trusted destination for Apple enthusiasts.
          </p>
        </div>
        <div>
          <img src={company} alt="" />
        </div>

      </header>

      {/* mission and vision */}
      <section id="mission-vision">
        <div className="container">
          <div>
            <h2>Mission</h2>
            <p>Our mission is to empower individuals and businesses by providing
              the latest Apple products that seamlessly integrate into their
              digital lives. Saving the ocean and our planet will take more than
              what one person, company, or organization can do on their own, but
              only 3% of all philanthropy in the U.S. goes to environmental
              causes.</p>
          </div>
          <div>
            <h2>Vision</h2>
            <p>
              Our mission is to empower individuals and businesses by providing
              the latest Apple products that seamlessly integrate into their
              digital lives. Saving the ocean and our planet will take more than
              what one person, company, or organization can do on their own, but
              only 3% of all philanthropy in the U.S. goes to environmental
              causes.
            </p>
          </div>
        </div>
      </section>

      {/* product catalogue */}
      <section id="product-catalogue-about">
        <div className="container">
          <h2>Explore Our Product Catalogue</h2>
          <p>
            Discover a world of Apple products at iStore. From the latest iPhone
            models to powerful MacBooks, iPads, and Apple Watches, our product
            range covers all your technology needs.
          </p>
          <div className="product-container">
            <div className="product-card">
              <div>
                <img src={watch} alt="" />
              </div>
              <h3 className="name">Smart Watches</h3>
              <div className="btn-container">
                <Link to="/" className="link">
                  <span>Learn More</span>
                  <i class="bx bx-chevron-right"></i>
                </Link>
              </div>
            </div>
            <div className="product-card">
              <div>
                <img src={watch} alt="" />
              </div>
              <h3 className="name">Smart Watches</h3>
              <div className="btn-container">
                <Link to="/" className="link">
                  <span>Learn More</span>
                  <i class="bx bx-chevron-right"></i>
                </Link>
              </div>
            </div>
            <div className="product-card">
              <div>
                <img src={watch} alt="" />
              </div>
              <h3 className="name">Smart Watches</h3>
              <div className="btn-container">
                <Link to="/" className="link">
                  <span>Learn More</span>
                  <i class="bx bx-chevron-right"></i>
                </Link>
              </div>
            </div>
            <div className="product-card">
              <div>
                <img src={watch} alt="" />
              </div>
              <h3 className="name">Smart Watches</h3>
              <div className="btn-container">
                <Link to="/" className="link">
                  <span>Learn More</span>
                  <i class="bx bx-chevron-right"></i>
                </Link>
              </div>
            </div>
            <div className="product-card">
              <div>
                <img src={watch} alt="" />
              </div>
              <h3 className="name">Smart Watches</h3>
              <div className="btn-container">
                <Link to="/" className="link">
                  <span>Learn More</span>
                  <i class="bx bx-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* workplace */}
      <section id="workplace">
        <div className="container">
          <div className="even-columns">
            <div className="text">
            <h2>Our Workplace</h2>
              <p>
                At iStore, we foster a vibrant and inclusive workplace culture.
                We believe in collaboration, continuous learning, and personal
                growth. Our team of passionate Apple enthusiasts brings deep
                knowledge and expertise to provide exceptional service to our
                customers.
              </p>
            </div>
            <div className="image">
              <img src={workplace} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* our team */}
      <section id="team">
        <div className="container">
          <h2>Meet Our Team</h2>
          <div className="team-container">
            <div className="team-box">
              <div className="image">
                <img src={anisha} alt="" />
              </div>
              <h3 className="name">Anisha Lee</h3>
              <p className="poosition">Co-Founder</p>
            </div>
            <div className="team-box">
              <div className="image">
                <img src={anisha} alt="" />
              </div>
              <h3 className="name">Anisha Lee</h3>
              <p className="poosition">Co-Founder</p>
            </div>
            <div className="team-box">
              <div className="image">
                <img src={anisha} alt="" />
              </div>
              <h3 className="name">Anisha Lee</h3>
              <p className="poosition">Co-Founder</p>
            </div>
            <div className="team-box">
              <div className="image">
                <img src={anisha} alt="" />
              </div>
              <h3 className="name">Anisha Lee</h3>
              <p className="poosition">Co-Founder</p>
            </div>
            <div className="team-box">
              <div className="image">
                <img src={anisha} alt="" />
              </div>
              <h3 className="name">Anisha Lee</h3>
              <p className="poosition">Co-Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* impact */}
      <section id="impact" className="container">
        <div className="even-columns">
          <div className="text">
                    <h2>Our Impact</h2>
                    <p>At iStore, we foster a vibrant and inclusive workplace culture. We
              believe in collaboration, continuous learning, and personal
              growth. Our team of passionate Apple enthusiasts brings deep
              knowledge and expertise to provide exceptional service to our
              customers.
            </p>
          </div>
          <div className="image">
            <img src={impact} alt="" />
          </div>
        </div>

        <div className="stats-container">
          <div className="stats-box">
            <i class="bx bxs-truck"></i>
            <h3 className="stat-count">300 +</h3>
            <p className="stat-description">Products Delivered</p>
          </div>
          <div className="stats-box">
            <i class="bx bxs-check-circle"></i>
            <h3 className="stat-count">4.5</h3>
            <p className="stat-description">Average Product Rating</p>
          </div>
          <div className="stats-box">
            <i class="bx bxs-smile"></i>
            <h3 className="stat-count">200 +</h3>
            <p className="stat-description">Satisfied Customers</p>
          </div>
        </div>
      </section>

      {/* testimonials */}
      <section id="testimonials">
        <div className="container">
          <h2>What Our Customers Are Saying</h2>
          <div className="testimonial-container">
            <div className="testimonial-box">
              <img src={person} alt="" />
              <h3 className="name">Anisha Lee</h3>
              <p className="content">
                Words from a satisfied client like, did you guys steal the
                product or is it actually from apple.
              </p>
            </div>
            <div className="testimonial-box">
              <img src={person} alt="" />
              <h3 className="name">Anisha Lee</h3>
              <p className="content">
                Words from a satisfied client like, did you guys steal the
                product or is it actually from apple.
              </p>
            </div>
            <div className="testimonial-box">
              <img src={person} alt="" />
              <h3 className="name">Anisha Lee</h3>
              <p className="content">
                Words from a satisfied client like, did you guys steal the
                product or is it actually from apple.
              </p>
            </div>
            <div className="testimonial-box">
              <img src={person} alt="" />
              <h3 className="name">Anisha Lee</h3>
              <p className="content">
                Words from a satisfied client like, did you guys steal the
                product or is it actually from apple.
              </p>
            </div>
            <div className="testimonial-box">
              <img src={person} alt="" />
              <h3 className="name">Anisha Lee</h3>
              <p className="content">
                Words from a satisfied client like, did you guys steal the
                product or is it actually from apple.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* partners */}
      <section id="partners">
        <div className="container">
          <h2>Meet Out Partners</h2>
          <div className="partner-container">
            <div className="partner"></div>
            <div className="partner"></div>
            <div className="partner"></div>
            <div className="partner"></div>
            <div className="partner"></div>
            <div className="partner"></div>
          </div>
        </div>
      </section>

      {/* newsletter */}
      <section id="news-letter">
        <div className="container">
          <h3>Subscribe To Receive News and Updates From iSTORE</h3>
          <form action="">
            <input name="email" placeholder="Enter your email" type="text" />
            <button type="submit" className="btn">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* contact form */}
      <section id="contact">
        <div className="container">
          <div className="even-columns">
            <div className="text">
              <h2>Contact Us</h2>
              <form action="">
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
                  <label htmlFor="email" className="required">
                    Email:
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Enter email here"
                  />
                </div>
                <div>
                  <label htmlFor="" className="required">
                    Phone Number:
                  </label>
                  <input
                    id="number"
                    name="number"
                    type="text"
                    placeholder="Enter phone number here"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="required">
                    Message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    type="text"
                    placeholder="Enter message here"
                  ></textarea>
                </div>
                <button type="submit" className="btn">
                  Submit
                </button>
              </form>
            </div>

            <div className="img">
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d48650.34300167503!2d-74.68174703417225!3d40.350188591012525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sprinceton%20university%20location!5e0!3m2!1sfr!2scm!4v1707557222963!5m2!1sfr!2scm"
                width="600"
                height="450"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
