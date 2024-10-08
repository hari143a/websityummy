/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './style.css'
import { BsFillGeoAltFill } from 'react-icons/bs'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { BsFillClockFill } from 'react-icons/bs'
import { BiLogoTwitter } from 'react-icons/bi'
import { BiLogoFacebook } from 'react-icons/bi'
import { BiLogoInstagram } from 'react-icons/bi'
import { BiLogoLinkedin } from 'react-icons/bi'
export default function Footer() {
  return (
    <>
        <footer id="footer" className="footer">
        <div className="container">
            <div className="row gy-3">
            <div className="col-lg-3 col-md-6 d-flex">
                <i className="bi bi-geo-alt icon" ><BsFillGeoAltFill /></i>
                <div>
                <h4>Address</h4>
                <p>
                    A108 Adam Street <br />
                    New York, NY 535022 - US<br />
                </p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 footer-links d-flex">
                <i className="bi bi-telephone icon" ><BsFillTelephoneFill/> </i>
                <div>
                <h4>Reservations</h4>
                <p>
                    <strong>Phone:</strong> +1 5589 55488 55<br />
                    <strong>Email:</strong> info@example.com<br />
                </p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 footer-links d-flex">
                <i className="bi bi-clock icon" ><BsFillClockFill/> </i>
                <div>
                <h4>Opening Hours</h4>
                <p>
                    <strong>Mon-Sat: 11AM</strong> - 23PM<br />
                    Sunday: Closed
                </p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
                <h4>Follow Us</h4>
                <div className="social-links d-flex">
                <a href="#" className="twitter"><i className="bi bi-twitter" ><BiLogoTwitter/> </i></a>
                <a href="#" className="facebook"><i className="bi bi-facebook" ><BiLogoFacebook/> </i></a>
                <a href="#" className="instagram"><i className="bi bi-instagram" ><BiLogoInstagram/> </i></a>
                <a href="#" className="linkedin"><i className="bi bi-linkedin" ><BiLogoLinkedin/> </i></a>
                </div>
            </div>
            </div>
        </div>
        <div className="container">
            <div className="copyright">
            © Copyright <strong><span>Yummy</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
            Designed by <a href="#">Harimanikanta</a>
            </div>
        </div>
        </footer>

    </>
  )
}
