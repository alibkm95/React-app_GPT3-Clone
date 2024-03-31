import React from 'react'
import './Footer.css'
import gpt3logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others??
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>request early access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3logo} alt="logo" />
          <p>USA Sacramento K12 DK, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & conditions</p>
          <p>Privacy policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>USA Sacramento K12 DK</p>
          <p>085-13567</p>
          <p>info@payment.net</p>
        </div>
      </div>
      <div className="gpt3__footer-copy">
        <p>&copy; 2024 GPT-3, All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer