/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './style.css';
import { BsStarFill } from 'react-icons/bs';
import Image1 from '../../Assets/Images/testimonials/testimonials-1.jpg'
import Image2 from '../../Assets/Images/testimonials/testimonials-2.jpg'
import Image3 from '../../Assets/Images/testimonials/testimonials-3.jpg'
export default function Test() {
  return (
    <>
    <section id="testimonials" className="testimonials section-bg">
  <div className="container" data-aos="fade-up">
    <div className="section-header">
      <h2>Testimonials</h2>
      <p>What Are They <span>Saying About Us</span></p>
    </div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3"></button>
      </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="testimonial-item">
                  <div className="row gy-4 justify-content-center">
                    <div className="col-lg-6">
                      <div className="testimonial-content">
                        <p>
                          <i className="bi bi-quote quote-icon-left" />
                          Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                          <i className="bi bi-quote quote-icon-right" />
                        </p>
                        <h3>Saul Goodman</h3>
                        <h4>Ceo &amp; Founder</h4>
                        <div className="stars">
                          <BsStarFill className='star' /><BsStarFill className='star' /><BsStarFill className='star' /><BsStarFill className='star' /><BsStarFill className='star' />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 text-center">
                      <img src={Image1} className="img-fluid testimonial-img" alt />
                    </div>
                  </div>
            </div>
          </div>
          <div className="carousel-item">
          <div className="testimonial-item">
            <div className="row gy-4 justify-content-center">
              <div className="col-lg-6">
                <div className="testimonial-content">
                  <p>
                    <i className="bi bi-quote quote-icon-left" />
                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                    <i className="bi bi-quote quote-icon-right" />
                  </p>
                  <h3>Sara Wilsson</h3>
                  <h4>Designer</h4>
                  <div className="stars">
                    <BsStarFill className='star' /><BsStarFill className='star' /><BsStarFill className='star' /><BsStarFill className='star' /><BsStarFill className='star' />
                  </div>
                </div>
              </div>
              <div className="col-lg-2 text-center">
                <img src={Image2} className="img-fluid testimonial-img" alt />
              </div>
            </div>
          </div>
          </div>
          <div className="carousel-item">
              <div className="testimonial-item">
                <div className="row gy-4 justify-content-center">
                  <div className="col-lg-6">
                    <div className="testimonial-content">
                      <p>
                        <i className="bi bi-quote quote-icon-left" />
                        Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                        <i className="bi bi-quote quote-icon-right" />
                      </p>
                      <h3>Jena Karlis</h3>
                      <h4>Store Owner</h4>
                      <div className="stars">
                        <BsStarFill className='star' /><BsStarFill className='star' /><BsStarFill className='star' /><BsStarFill className='star' /><BsStarFill className='star' />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 text-center">
                    <img src={Image3} className="img-fluid testimonial-img" alt />
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
  </div>
</section>
    </>
  )
}
