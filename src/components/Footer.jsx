/* eslint-disable */
import {FaFacebook, FaInstagram} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {MdAddCall} from 'react-icons/md';
import {SlLocationPin} from 'react-icons/sl';
import {SiGooglemaps} from 'react-icons/si';

import '../styles/Footer.css'; // Import your CSS file for styling

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer-container">
      <div className="top-footer">
        <div className="contact">
          <h2>Contact Us</h2>
          <p className="address">Address (India)</p>
          <h4 className="academy-name">Eva Aviation Academy</h4>
          <p className="topicondiv">
            <SlLocationPin className="topicons " />E 1054, Ramphal Chowk, Dwarka
            Sector-07, New Delhi, India.
          </p>
          <p className="topicondiv">
            <MdAddCall className="topicons " />
            +91 7982316437, 011-35886195
          </p>
          <p className="topicondiv">
            <HiOutlineMail className="topicons " />
            evaaviationacademy@gmail.com
          </p>
          <p className="topicondiv">
            <HiOutlineMail className="topicons " />
            evaaviationimportexport@gmail.com
          </p>
        </div>

        <div className="map">
          <h2 className="topicondiv">
            <SiGooglemaps className="icons" />
            Google Map
          </h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56056.31546181026!2d76.99784363357371!3d28.58418159667885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b165af5ef61%3A0x1d62f9ff94fdcf7c!2sSector%207%2C%20Block%20E%2C%20Palam%20Extension%2C%20Palam%2C%20Delhi%2C%20110075!5e0!3m2!1sen!2sin!4v1714722432502!5m2!1sen!2sin"
            title="eva"
            width="300"
            height="250"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <footer className="footer">
        <div className="social-icons">
          <a href="https://www.facebook.com/profile.php?id=61552533950544">
            <FaFacebook className="icons facebook" />
          </a>
          <a href="https://www.instagram.com/evaaviationacademy/">
            <FaInstagram className="icons instagram" />
          </a>
          <a href=" mailto:evaaviationacademy@gmail.com, evaaviationimportexport@gmail.com">
            <HiOutlineMail className="icons" />
          </a>
        </div>
        <div className="copyright">
          <p>
            &copy; Copyright 2020-{currentYear} Eva Aviation Academy.All rights
            reserved.
          </p>
          <p>Developed & managed by Sandeep Kumar</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
