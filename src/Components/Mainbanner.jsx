import React from 'react';
import OwlCarousel from 'react-owl-carousel'; // React Owl Carousel
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';

function Explorepage() {
  // Options for the Owl Carousel
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <>
      <div>
        <div className="page-heading">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h6>Liberty NFT Market</h6>
                <h2>Discover Some Top Items</h2>
                <span >
                 <Link to='/' ><span className=' text-blue-700'>Home</span></Link> &gt; <span className=' text-white'>Explore</span>
                </span>
              </div>
            </div>
          </div>
          <div className="featured-explore">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-12">
        <OwlCarousel
          className="owl-features owl-carousel"
          autoplay={true}  // Correct autoplay syntax
          loop={true}
          margin={10}
          nav
          {...options}
        >
          <div className="item">
            <div className="thumb">
              <img src={require("../../assets/images/featured-01.jpg")} alt="" style={{ borderRadius: 20 }} />
              <div className="hover-effect">
                <div className="content">
                  <h4>Triple Mutant Ape Bored</h4>
                  <span className="author">
                    <img src={require("../../assets/images/author.jpg")} alt="" style={{ maxWidth: 50, maxHeight: 50, borderRadius: '50%' }} />
                    <h6>Liberty Artist<br /><a href="/">@libertyart</a></h6>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="thumb">
              <img src={require("../../assets/images/featured-02.jpg")} alt="" style={{ borderRadius: 20 }} />
              <div className="hover-effect">
                <div className="content">
                  <h4>Bored Ape Kennel Club</h4>
                  <span className="author">
                    <img src={require("../../assets/images/author.jpg")} alt="" style={{ maxWidth: 50, maxHeight: 50, borderRadius: '50%' }} />
                    <h6>Liberty Artist<br /><a href="/">@libertyart</a></h6>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="thumb">
              <img src={require("../../assets/images/featured-03.jpg")} alt="" style={{ borderRadius: 20 }} />
              <div className="hover-effect">
                <div className="content">
                  <h4>Genesis Club by KMT</h4>
                  <span className="author">
                    <img src={require("../../assets/images/author.jpg")} alt="" style={{ maxWidth: 50, maxHeight: 50, borderRadius: '50%' }} />
                    <h6>Liberty Artist<br /><a href="/">@libertyart</a></h6>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="thumb">
              <img src={require("../../assets/images/featured-04.jpg")} alt="" style={{ borderRadius: 20 }} />
              <div className="hover-effect">
                <div className="content">
                  <h4>Crypto Aurora Guy</h4>
                  <span className="author">
                    <img src={require("../../assets/images/author.jpg")} alt="" style={{ maxWidth: 50, maxHeight: 50, borderRadius: '50%' }} />
                    <h6>Liberty Artist<br /><a href="/">@libertyart</a></h6>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  </div>
</div>
        </div>

        <div className="discover-items">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="section-heading">
                  <div className="line-dec" />
                  <h2>Discover Some Of Our <em>Items</em>.</h2>
                </div>
              </div>
              <div className="col-lg-7">
                <form id="search-form" name="gs" method="get" role="search" action="#">
                  <div className="row">
                    <div className="col-lg-4">
                      <fieldset>
                        <input type="text" name="keyword" className="searchText" placeholder="Type Something..." autoComplete="on" required />
                      </fieldset>
                    </div>
                    <div className="col-lg-3">
                      <fieldset>
                        <select name="Category" className="form-select" aria-label="Default select example" id="chooseCategory">
                          <option selected>All Categories</option>
                          <option value="Music">Music</option>
                          <option value="Digital">Digital</option>
                          <option value="Blockchain">Blockchain</option>
                          <option value="Virtual">Virtual</option>
                        </select>
                      </fieldset>
                    </div>
                    <div className="col-lg-3">
                      <fieldset>
                        <select name="Price" className="form-select" aria-label="Default select example" id="choosePrice">
                          <option selected>Available</option>
                          <option value="Ending-Soon">Ending Soon</option>
                          <option value="Coming-Soon">Coming Soon</option>
                          <option value="Closed">Closed</option>
                        </select>
                      </fieldset>
                    </div>
                    <div className="col-lg-2">
                      <fieldset>
                        <button type="submit" className="main-button">Search</button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
              {/* Discover items list */}
              <div className="col-lg-3">
          <div className="item">
            <div className="row">
              <div className="col-lg-12">
                <span className="author">
                  <img src={require("../../assets/images/author.jpg")} alt="" style={{maxWidth: 50, maxHeight: 50, borderRadius: '50%'}} />
                </span>
                <img src={require("../../assets/images/discover-03.jpg")} alt="" style={{borderRadius: 20}} />
                <h4>Genesis Meta Boom</h4>
              </div>
              <div className="col-lg-12">
                <div className="line-dec" />
                <div className="row">
                  <div className="col-6">
                    <span>Current Bid: <br /> <strong>5.15 ETH</strong></span>
                  </div>
                  <div className="col-6">
                    <span>Ends In: <br /> <strong>26th Nov</strong></span>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="main-button">
                  <Link to="/itemdetails">View Details</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="item">
            <div className="row">
              <div className="col-lg-12">
                <span className="author">
                  <img src={require("../../assets/images/author.jpg")} alt="" style={{maxWidth: 50, maxHeight: 50, borderRadius: '50%'}} />
                </span>
                <img src={require("../../assets/images/discover-03.jpg")} alt="" style={{borderRadius: 20}} />
                <h4>Genesis Meta Boom</h4>
              </div>
              <div className="col-lg-12">
                <div className="line-dec" />
                <div className="row">
                  <div className="col-6">
                    <span>Current Bid: <br /> <strong>5.15 ETH</strong></span>
                  </div>
                  <div className="col-6">
                    <span>Ends In: <br /> <strong>26th Nov</strong></span>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="main-button">
                  <Link to="/itemdetails">View Details</Link>
                </div>
              </div>
            </div>
          </div>
        </div>


              <div className="col-lg-3">
          <div className="item">
            <div className="row">
              <div className="col-lg-12">
                <span className="author">
                  <img src={require("../../assets/images/author.jpg")} alt="" style={{maxWidth: 50, maxHeight: 50, borderRadius: '50%'}} />
                </span>
                <img src={require("../../assets/images/discover-03.jpg")} alt="" style={{borderRadius: 20}} />
                <h4>Genesis Meta Boom</h4>
              </div>
              <div className="col-lg-12">
                <div className="line-dec" />
                <div className="row">
                  <div className="col-6">
                    <span>Current Bid: <br /> <strong>5.15 ETH</strong></span>
                  </div>
                  <div className="col-6">
                    <span>Ends In: <br /> <strong>26th Nov</strong></span>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="main-button">
                  <Link to="/itemdetails">View Details</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="item">
            <div className="row">
              <div className="col-lg-12">
                <span className="author">
                  <img src={require("../../assets/images/author.jpg")} alt="" style={{maxWidth: 50, maxHeight: 50, borderRadius: '50%'}} />
                </span>
                <img src={require("../../assets/images/discover-04.jpg")} alt="" style={{borderRadius: 20}} />
                <h4>Another Half Ape</h4>
              </div>
              <div className="col-lg-12">
                <div className="line-dec" />
                <div className="row">
                  <div className="col-6">
                    <span>Current Bid: <br /> <strong>3.63 ETH</strong></span>
                  </div>
                  <div className="col-6">
                    <span>Ends In: <br /> <strong>24th Nov</strong></span>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="main-button">
                  <Link to="/itemdetails">View Details</Link>
                </div>
              </div>
            </div>
            
          </div>
        </div>


        <div className="col-lg-3">
          <div className="item">
            <div className="row">
              <div className="col-lg-12">
                <span className="author">
                  <img src={require("../../assets/images/author.jpg")} alt="" style={{maxWidth: 50, maxHeight: 50, borderRadius: '50%'}} />
                </span>
                <img src={require("../../assets/images/discover-03.jpg")} alt="" style={{borderRadius: 20}} />
                <h4>Pixel Sand Box</h4>
              </div>
              <div className="col-lg-12">
                <div className="line-dec" />
                <div className="row">
                  <div className="col-6">
                    <span>Current Bid: <br /> <strong>4.68 ETH</strong></span>
                  </div>
                  <div className="col-6">
                    <span>Ends In: <br /> <strong>28th Nov</strong></span>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="main-button">
                  <Link to="/itemdetails">View Details</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="item">
            <div className="row">
              <div className="col-lg-12">
                <span className="author">
                  <img src={require("../../assets/images/author.jpg")} alt="" style={{maxWidth: 50, maxHeight: 50, borderRadius: '50%'}} />
                </span>
                <img src={require("../../assets/images/discover-04.jpg")} alt="" style={{borderRadius: 20}} />
                <h4>Another Half Ape</h4>
              </div>
              <div className="col-lg-12">
                <div className="line-dec" />
                <div className="row">
                  <div className="col-6">
                    <span>Current Bid: <br /> <strong>2.03 ETH</strong></span>
                  </div>
                  <div className="col-6">
                    <span>Ends In: <br /> <strong>25th Nov</strong></span>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="main-button">
                  <Link to="/itemdetails">View Details</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="item">
            <div className="row">
              <div className="col-lg-12">
                <span className="author">
                  <img src={require("../../assets/images/author.jpg")} alt="" style={{maxWidth: 50, maxHeight: 50, borderRadius: '50%'}} />
                </span>
                <img src={require("../../assets/images/discover-06.jpg")} alt="" style={{borderRadius: 20}} />
                <h4>Invisible NFT Land</h4>
              </div>
              <div className="col-lg-12">
                <div className="line-dec" />
                <div className="row">
                  <div className="col-6">
                    <span>Current Bid: <br /> <strong>2.03 ETH</strong></span>
                  </div>
                  <div className="col-6">
                    <span>Ends In: <br /> <strong>25th Nov</strong></span>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="main-button">
                  <Link to="/itemdetails">View Details</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="item">
            <div className="row">
              <div className="col-lg-12">
                <span className="author">
                  <img src={require("../../assets/images/author.jpg")} alt="" style={{maxWidth: 50, maxHeight: 50, borderRadius: '50%'}} />
                </span>
                <img src={require("../../assets/images/discover-05.jpg")} alt="" style={{borderRadius: 20}} />
                <h4>Another Half Ape</h4>
              </div>
              <div className="col-lg-12">
                <div className="line-dec" />
                <div className="row">
                  <div className="col-6">
                    <span>Current Bid: <br /> <strong>2.64 ETH</strong></span>
                  </div>
                  <div className="col-6">
                    <span>Ends In: <br /> <strong>25th Nov</strong></span>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="main-button">
                  <Link to="/itemdetails">View Details</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

              {/* Repeat other items here... */}
            </div>
          </div>
        </div>
        <div className="top-seller">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-heading">
            <div className="line-dec" />
            <h2>Our Top Sellers This Week.</h2>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="row">
            <div className="col-lg-12">
              <div className="item">
                <h4>1.</h4>
                <img src={require("../../assets/images/author.jpg")} alt="" style={{maxWidth: 50, maxHeight: 50, borderRadius: '50%'}} />
                <h6>NFT Top Artist<br /><a href="/">8.6 ETH or $12,000</a></h6>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="item">
                <h4>2.</h4>
                <img src={require("../../assets/images/author-02.jpg")} alt="" style={{maxWidth: 50, maxHeight: 50, borderRadius: '50%'}} />
                <h6>George Brandon<br /><a href="/">4.8 ETH or $14,000</a></h6>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="item">
                <h4>3.</h4>
                <img src={require("../../assets/images/author-03.jpg")} alt="" style={{maxWidth: 50, maxHeight: 50, borderRadius: '50%'}} />
                <h6>Johnny Mayson<br /><a href="/">6.2 ETH or $26,000</a></h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="row">
            <div className="col-lg-12">
              <div className="item">
                <h4>4.</h4>
                <img src={require("../../assets/images/author.jpg")} alt="" style={{maxWidth: 50, maxHeight: 50, borderRadius: '50%'}} />
                <h6>Liberty Artist<br /><a href="/">4.5 ETH or $11,600</a></h6>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="item">
                <h4>5.</h4>
                <img src={require("../../assets/images/author-02.jpg")} alt="" style={{maxWidth: 50, maxHeight: 50, borderRadius: '50%'}} />
                <h6>Ronald Martino<br /><a href="/">7.2 ETH or $14,500</a></h6>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="item">
                <h4>6.</h4>
                <img src={require("../../assets/images/author-03.jpg")} alt="" style={{maxWidth: 50, maxHeight: 50, borderRadius: '50%'}} />
                <h6>Anthony Brown<br /><a href="/">8.6 ETH or $7,400</a></h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="row">
            <div className="col-lg-12">
              <div className="item">
                <h4>7.</h4>
                <img src={require("../../assets/images/author.jpg")} alt="" style={{maxWidth: 50, maxHeight: 50, borderRadius: '50%'}} />
                <h6>Liberty Artist<br /><a href="/">9.8 ETH or $14,200</a></h6>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="item">
                <h4>8.</h4>
                <img src={require("../../assets/images/author-02.jpg")} alt="" style={{maxWidth: 50, maxHeight: 50, borderRadius: '50%'}} />
                <h6>Ronald Martino<br /><a href="/">6.5 ETH or $15,000</a></h6>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="item">
                <h4>9.</h4>
                <img src={require("../../assets/images/author-03.jpg")} alt="" style={{maxWidth: 50, maxHeight: 50, borderRadius: '50%'}} />
                <h6>David Walker<br /><a href="/">2.5 ETH or $12,000</a></h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="row">
            <div className="col-lg-12">
              <div className="item">
                <h4>10.</h4>
                <img src={require("../../assets/images/author.jpg")} alt="" style={{maxWidth: 50, maxHeight: 50, borderRadius: '50%'}} />
                <h6>Liberty Artist<br /><a href="/">8.8 ETH or $16,800</a></h6>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="item">
                <h4>11.</h4>
                <img src={require("../../assets/images/author-02.jpg")} alt="" style={{maxWidth: 50, maxHeight: 50, borderRadius: '50%'}} />
                <h6>Anthony Brown<br /><a href="/">7.5 ETH or $15,400</a></h6>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="item">
                <h4>12.</h4>
                <img src={require("../../assets/images/author-03.jpg")} alt="" style={{maxWidth: 50, maxHeight: 50, borderRadius: '50%'}} />
                <h6>David Walker<br /><a href="/">5.2 ETH or $12,300</a></h6>
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

export default Explorepage;


