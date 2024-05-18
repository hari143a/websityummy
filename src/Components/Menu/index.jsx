/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './style.css'
import Item from './items'
import Test from './test'
import Image1 from '../../Assets/Images/menu/menu-item-1.png'
import Image2 from '../../Assets/Images/menu/menu-item-2.png'
import Image3 from '../../Assets/Images/menu/menu-item-3.png'
import Image4 from '../../Assets/Images/menu/menu-item-4.png'
import Image5 from '../../Assets/Images/menu/menu-item-5.png'
import Image6 from '../../Assets/Images/menu/menu-item-6.png'
export default function Menu() {
  return (
    <>
      <section id="menu" className="menu">
  <div className="container mt-5" data-aos="fade-up">
    <div className="section-header">
      <h2>Our Menu</h2>
      <p>Check Our <span>Yummy Menu</span></p>
    </div>
    <ul className="nav nav-tabs d-flex justify-content-center" data-aos="fade-up" data-aos-delay={200}>
      <li className="nav-item">
        <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#menu-starters">
          <h4>Starters</h4>
        </a>
      </li>{/* End tab nav item */}
      <li className="nav-item">
        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-breakfast">
          <h4>Breakfast</h4>
        </a>{/* End tab nav item */}
      </li>
      <li className="nav-item">
        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-lunch">
          <h4>Lunch</h4>
        </a>
      </li>{/* End tab nav item */}
      <li className="nav-item">
        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-dinner">
          <h4>Dinner</h4>
        </a>
      </li>{/* End tab nav item */}
    </ul>
    <div className="tab-content" data-aos="fade-up" data-aos-delay={300}>
      <div className="tab-pane fade active show" id="menu-starters">
        <div className="tab-header text-center">
          <p>Menu</p>
          <h3>Starters</h3>
        </div>
        <div className="row gy-5">
          <Item img={Image1} item='Magnam Tiste' prize='$5.95'/>
          <Item img={Image2} item='Aut Luia' prize='$14.95'/>
          <Item img={Image3} item='Est Eligendi' prize='$8.95'/>
          <Item img={Image4} item='Eos Luibusdam' prize='$12.95'/>
          <Item img={Image5} item='Eos Luibusdam' prize='$12.95'/>
          <Item img={Image6} item='Laboriosam Direva' prize='$9.95'/>
        </div>
      </div>{/* End Starter Menu Content */}
      <div className="tab-pane fade" id="menu-breakfast">
        <div className="tab-header text-center">
          <p>Menu</p>
          <h3>Breakfast</h3>
        </div>
        <div className="row gy-5">
          <Item img={Image1} item='Magnam Tiste' prize='$5.95'/>
          <Item img={Image2} item='Aut Luia' prize='$14.95'/>
          <Item img={Image3} item='Est Eligendi' prize='$8.95'/>
          <Item img={Image4} item='Eos Luibusdam' prize='$12.95'/>
          <Item img={Image5} item='Eos Luibusdam' prize='$12.95'/>
          <Item img={Image6} item='Laboriosam Direva' prize='$9.95'/>
        </div>
      </div>{/* End Breakfast Menu Content */}
      <div className="tab-pane fade" id="menu-lunch">
        <div className="tab-header text-center">
          <p>Menu</p>
          <h3>Lunch</h3>
        </div>
        <div className="row gy-5">
          <Item img={Image1} item='Magnam Tiste' prize='$5.95'/>
          <Item img={Image2} item='Aut Luia' prize='$14.95'/>
          <Item img={Image3} item='Est Eligendi' prize='$8.95'/>
          <Item img={Image4} item='Eos Luibusdam' prize='$12.95'/>
          <Item img={Image5} item='Eos Luibusdam' prize='$12.95'/>
          <Item img={Image6} item='Laboriosam Direva' prize='$9.95'/>
        </div>
      </div>{/* End Lunch Menu Content */}
      <div className="tab-pane fade" id="menu-dinner">
        <div className="tab-header text-center">
          <p>Menu</p>
          <h3>Dinner</h3>
        </div>
        <div className="row gy-5">
          <Item img={Image1} item='Magnam Tiste' prize='$5.95'/>
          <Item img={Image2} item='Aut Luia' prize='$14.95'/>
          <Item img={Image3} item='Est Eligendi' prize='$8.95'/>
          <Item img={Image4} item='Eos Luibusdam' prize='$12.95'/>
          <Item img={Image5} item='Eos Luibusdam' prize='$12.95'/>
          <Item img={Image6} item='Laboriosam Direva' prize='$9.95'/>
        </div>
      </div>{/* End Dinner Menu Content */}
    </div>
  </div>
</section>{/* End Menu Section */}
<Test/>
    </>
  )
}
