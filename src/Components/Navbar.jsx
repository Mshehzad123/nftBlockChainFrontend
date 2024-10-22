import React from 'react';
import banner1 from '../assets/images/banner-01.png';
import banner2 from '../assets/images/banner-02.png';
import Explore from './Explore';
import Createnft from './Createnft';
import Itemcurrent from './Itemcurrent';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel'; // Make sure you installed react-owl-carousel

// OwlCarousel options
const options = {
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  items: 1,
  margin: 10,
  dots: true,
  nav: false,
};

function Navbar() {
  return (
    <>
      <div className="main-banner">
        <div className="container">
          <div className="row flex ">
            <div className="col-lg-6 align-self-center">
              <div className="header-text">
                <h6>Liberty NFT Market</h6>
                <h2>Create, Sell &amp; Collect Top NFTs.</h2>
                <p>
                  Liberty NFT Market is a cool and professional design for your NFT websites.
                </p>
                <div className="buttons">
                  <div className="border-button">
                    <Link to="explore">Explore Top NFTs</Link>
                  </div>
                  
                </div>
              </div>
            </div>

             <div className="col-lg-5 offset-lg-1 mt-16"> 
              <OwlCarousel className="owl-theme owl-carousel" {...options}>
                <div className="item  ">
                  <img src={banner1} alt="Banner 1" className="w-full rounded " /> 
                </div>
                <div className="item  ">
                  <img src={banner2} alt="Banner 2" className="w-full rounded" />
                </div>
              </OwlCarousel>
            </div> 
          </div>
        </div>
      </div>

      <Explore />
      <Createnft />
      <Itemcurrent />
    </>
  );
}

export default Navbar;
