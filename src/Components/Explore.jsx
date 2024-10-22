import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// Importing images
import icon01 from '../assets/images/icon-01.png';
import icon02 from '../assets/images/icon-02.png';
import icon03 from '../assets/images/icon-03.png';
import icon04 from '../assets/images/icon-04.png';
import icon05 from '../assets/images/icon-05.png';
import icon06 from '../assets/images/icon-06.png';
import nft9 from '../assets/images/nft9.avif';
import nft10 from '../assets/images/nft10.jpg';
import nft13 from '../assets/images/nft13.avif';
import { Link } from 'react-router-dom';



function Explore() {
  return (
    <>
      <div className="categories-collections">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="categories">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-heading">
                      <div className="line-dec" />
                      <h2>Browse Through Our <em>Categories</em> Here.</h2>
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6">
                    <div className="item">
                      <div className="icon p-3">
                        <img src={icon01} alt="" />
                      </div>
                      <h4>Blockchain</h4>
                      <div className="icon-button">
                        <Link to="/blockchain"><i className="fa fa-angle-right" /></Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6">
                    <div className="item">
                      <div className="icon p-3">
                        <img src={icon02} alt="" />
                      </div>
                      <h4>Digital Art</h4>
                      <div className="icon-button">
                        <a href="/"><i className="fa fa-angle-right" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6">
                    <div className="item">
                      <div className="icon p-3">
                        <img src={icon03} alt="" />
                      </div>
                      <h4>Music Art</h4>
                      <div className="icon-button">
                        <a href="/"><i className="fa fa-angle-right" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6">
                    <div className="item">
                      <div className="icon p-3">
                        <img src={icon04} alt="" />
                      </div>
                      <h4>Virtual World</h4>
                      <div className="icon-button">
                        <a href="/"><i className="fa fa-angle-right" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6">
                    <div className="item">
                      <div className="icon p-3">
                        <img src={icon05} alt="" />
                      </div>
                      <h4>Valuable</h4>
                      <div className="icon-button">
                        <a href="/"><i className="fa fa-angle-right" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6">
                    <div className="item">
                      <div className="icon p-3">
                        <img src={icon06} alt="" />
                      </div>
                      <h4>Triple NFT</h4>
                      <div className="icon-button">
                        <a href="/"><i className="fa fa-angle-right" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
            <div className="col-lg-12">
            <div className="col-lg-12">
  <div className="collections">
    <div className="row">
      <div className="col-lg-12">
        <div className="section-heading">
          <div className="line-dec" />
          <h2>Explore Some Hot <em>Collections</em> In Market.</h2>
        </div>
      </div>
      <div className="col-lg-12">
        <OwlCarousel 
          className="owl-theme" 
          loop={true} 
          margin={10} 
          nav 
          autoplay={true}
          responsive={{
            0: {
              items: 1, // Show 1 image on small devices
              stagePadding: 0,
            },
            768: {
              items: 2, // Show 2 images on medium devices
              stagePadding: 0,
            },
            1024: {
              items: 3, // Show 3 images on larger devices
              stagePadding: 0, // Ensures no half pictures on the sides
            }
          }}>
          <div className="item   h-[660px]">
            <img className="w-full h-[400px]" src={nft9} alt="" />
            <div className="down-content p-4">
              <h4>Mutant Bored Ape Yacht Club</h4>
              <span className="collection">
                Items In Collection:<br /><strong>310/340</strong>
              </span>
              <span className="category">
                Category:<br /><strong>Digital Crypto</strong>
              </span>
              <div className="main-button">
                <Link to="explore">Explore Mutant</Link>
              </div>
            </div>
          </div>


















          <div className="item   h-[660px]">
            <img className="w-full h-[400px]" src={nft10} alt="" />
            <div className="down-content p-4">
              <h4>Mutant Bored Ape Yacht Club</h4>
              <span className="collection">
                Items In Collection:<br /><strong>310/340</strong>
              </span>
              <span className="category">
                Category:<br /><strong>Digital Crypto</strong>
              </span>
              <div className="main-button">
                <Link to="explore">Explore Mutant</Link>
              </div>
            </div>
          </div>


          <div className="item h-[660px]">
            <img className="w-full h-[400px]" src={nft13} alt="" />
            <div className="down-content p-4">
              <h4>Bored Ape Kennel Club</h4>
              <span className="collection">
                Items In Collection:<br /><strong>324/324</strong>
              </span>
              <span className="category">
                Category:<br /><strong>Visual Art</strong>
              </span>
              <div className="main-button">
                <Link to="explore">Explore Bored Ape</Link>
              </div>
            </div>
          </div>

          <div className="item h-[660px]">
            <img className="w-full h-[400px]" src={nft9} alt="" />
            <div className="down-content p-4">
              <h4>Genesis Collective Statue</h4>
              <span className="collection">
                Items In Collection:<br /><strong>380/394</strong>
              </span>
              <span className="category">
                Category:<br /><strong>Music Art</strong>
              </span>
              <div className="main-button">
                <Link to="explore">Explore Genesis</Link>
              </div>
            </div>
          </div>
          <div className="item h-[660px]">
            <img className="w-full h-[400px]" src={nft10} alt="" />
            <div className="down-content p-4">
              <h4>Worldwide Artwork Ground</h4>
              <span className="collection">
                Items In Collection:<br /><strong>426/468</strong>
              </span>
              <span className="category">
                Category:<br /><strong>Blockchain</strong>
              </span>
              <div className="main-button">
                <Link to="explore">Explore Worldwide</Link>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  </div>
</div>

</div>

</div>

          </div>
        </div>
      </div>
    </>

  );
}

export default Explore;
