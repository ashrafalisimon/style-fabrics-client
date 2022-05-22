import React from "react";
import { Link } from "react-router-dom";
import footerBg from '../../img/map-alter.png';

const Footer = () => {
  return (
    <div className=" min-h-min px-4 md:px-24" style={{backgroundImage: `url(${footerBg})` }}>
      <footer className="footer p-10 text-base-content">
        <div>
          <h4 className="text-xl font-bold text-secondary">Style Fabrics</h4>
          <p className="md:w-80">Style Fabrics Limited is a Garments manufacturing company formed by an entrepreneur and is dedicated to manufacturing garments and maintaining production for more than 17 years. </p>
        </div>
        <div>
          <span className="footer-title">Textile Services</span>
          <Link to='' className="link link-hover">Patch Fabric Works</Link>
          <Link to='' className="link link-hover">Garment Stitching</Link>
          <Link to='' className="link link-hover">Pattern, Art Making</Link>
          <Link to='' className="link link-hover">Stone Work Embroidery</Link>
          <Link to='' className="link link-hover">Computerised Embroidery</Link>
        </div>
        <div>
          <span className="footer-title">Quick Links</span>
          <Link to='' className="link link-hover">About us</Link>
          <Link to='' className="link link-hover">Portfolio</Link>
          <Link to='' className="link link-hover">Products</Link>
          <Link to='' className="link link-hover">Blog</Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link to='' className="link link-hover">Terms of use</Link>
          <Link to='' className="link link-hover">Privacy policy</Link>
          <Link to='' className="link link-hover">Cookie policy</Link>
        </div>
      </footer>
      <p className="text-center pb-2"><small>Copyright © 2022 - All right reserved by Style Fabrics Ltd. Develop by <Link to='https://web.facebook.com/ashrafalisimon/' className="underline text-primary">Ashraf</Link></small></p>
    </div>
  );
};

export default Footer;
