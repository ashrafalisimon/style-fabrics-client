import React from "react";
import { Link } from "react-router-dom";
import HomeBanner from '../../img/homeBanner.jpg';

const Banner = () => {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url(${HomeBanner})` }}>
      <div className="hero-content text-center">
        <div className="max-w-4xl space-y-8">
            <h4 className=" text-secondary text-lg">Welcome To Style Fabrics</h4>
          <h1 className="text-2xl tracking-wider text-white md:text-3xl lg:text-5xl font-bold">The <strong>Possibilities</strong> Are Endless</h1>
          <p className=" text-white">
          Since more than 17 years, Style Fabrics is operating in the textile market manufacture and trader. As years go by, the range of produced. 
          </p>
          <Link to='/purchase' className="btn  bg-gradient-to-r from-primary to-accent px-8 text-white font-bold">Get Started</Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
