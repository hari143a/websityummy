import React from 'react'

export default function Card({icon,title,para}) {
  return (
    <>
        <div className="col-xl-4" data-aos="fade-up" data-aos-delay={200}>
            <div className="icon-box d-flex flex-column justify-content-center align-items-center">
              <i className="bi bi-clipboard-data" >{icon}</i>
              <h4>{title}</h4>
              <p>{para}</p>
            </div>
          </div>
    </>
  )
}
