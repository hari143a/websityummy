/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
// import { BiCheck2All } from 'react-icons/bi';
import Image from '../../Assets/Images/about-2.jpg'
import './style.css'
import Section from './section'
import { BiCheckDouble } from 'react-icons/bi'
import { BiClipboard } from 'react-icons/bi'
import { BiDiamond } from 'react-icons/bi'
import { BsFillInboxesFill } from 'react-icons/bs'

import Card from './card'
export default function About() {
  return (
    <>
      <section id="about" className="about">
  <div className="container mt-5" data-aos="fade-up">
    <div className="section-header">
      <h2>About Us</h2>
      <p>Learn More <span>About Us</span></p>
    </div>
    <div className="row gy-4">
<div className="col-lg-7 position-relative about-img" data-aos="fade-up" data-aos-delay={150}>
        <div className="call-us position-absolute">
          <h4>Book a Table</h4>
          <p>+1 5589 55488 55</p>
        </div>
      </div>
      <div className="col-lg-5 d-flex align-items-end" data-aos="fade-up" data-aos-delay={300}>
        <div className="content ps-0 ps-lg-5">
          <p className="fst-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
          <ul>
          <li><i class="bi bi-check2-all"> <BiCheckDouble/> </i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
          <li><i class="bi bi-check2-all"><BiCheckDouble/></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
          <li><i class="bi bi-check2-all"><BiCheckDouble/></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
          </ul>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
          </p>
          <div className="position-relative mt-4">
            <img src={Image} className="img-fluid" alt />
            <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox play-btn" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="why-us" className="why-us section-bg">
  <div className="container" data-aos="fade-up">
    <div className="row gy-4">
      <div className="col-lg-4" data-aos="fade-up" data-aos-delay={100}>
        <div className="why-box">
          <h3>Why Choose Yummy?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
            Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
          </p>
          <div className="text-center">
            <a href="#" className="more-btn">Learn More <i className="bx bx-chevron-right" /></a>
          </div>
        </div>
      </div>{/* End Why Box */}
      <div className="col-lg-8 d-flex align-items-center">
        <div className="row gy-4">
          <Card icon={<BiClipboard/>} title={'Corporis voluptates officia eiusmod'} para={'Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip'}/>
          <Card icon={<BiDiamond/>} title={'Ullamco laboris ladore pan'} para={'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt'}/>
          <Card icon={<BsFillInboxesFill/>} title={'Labore consequatur incidid dolore'} para={'Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere'}/>
        </div>
      </div>
    </div>
  </div>
</section>

<Section/>
    </>
  )
}
