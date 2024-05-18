/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

export default function Item({img,item,prize}) {
  return (
    <>
        <div className="col-lg-4 menu-item">
            <a href="assets/img/menu/menu-item-1.png" className="glightbox"><img src={img} className="menu-img img-fluid" alt /></a>
            <h4>{item}</h4>
            <p className="ingredients">
              Lorem, deren, trataro, filede, nerada
            </p>
            <p className="price">
              {prize}
            </p>
          </div>{/* Menu Item */}
    </>
  )
}
