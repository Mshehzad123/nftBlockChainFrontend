import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Itemcureent2() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
    <div className="m-3 md:h-[400px]" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            <div className="item">
              <div className="left-image">
                <img src={require("../assets/images/market-01.jpg")} alt="" style={{borderRadius: 20}}  className=' md:w-[195px] md:h-[200px]'/>
              </div>
              <div className="right-content">
                <h4>Digital Crypto Artwork</h4>
                <span className="author">
                  <img src={require("../assets/images/author.jpg")} alt="" style={{ borderRadius: '50%'}} className='hidden  md:block  md:max-w-[50px]' />
                  <h6>Liberty Artist<br /><a href="/">@libertyart</a></h6>
                </span>
                <div className="line-dec" />
                <span className="bid">
                  Current Bid<br /><strong>2.03 ETH</strong><br /><em>($7,200.50)</em>
                </span>
                <span className="ends">
                  Ends In<br /><strong>2D 06H 30M 25S</strong><br /><em>(July 26th, 2022)</em>
                </span>
                <div className="text-button">
                  <Link to="itemdetails">View Item Details</Link>
                </div>
              </div>
            </div>
          </div>
    <div className="m-3 md:h-[400px]" 
    data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000">
            <div className="item">
              <div className="left-image">
                <img src={require("../assets/images/nft1.avif")} alt="" style={{borderRadius: 20}}  className=' md:w-[195px] md:h-[200px]'/>
              </div>
              <div className="right-content">
                <h4>Digital Crypto Artwork</h4>
                <span className="author">
                  <img src={require("../assets/images/author.jpg")} alt="" style={{ borderRadius: '50%'}} className='hidden  md:block  md:max-w-[50px]' />
                  <h6>Liberty Artist<br /><a href="/">@libertyart</a></h6>
                </span>
                <div className="line-dec" />
                <span className="bid">
                  Current Bid<br /><strong>2.03 ETH</strong><br /><em>($7,200.50)</em>
                </span>
                <span className="ends">
                  Ends In<br /><strong>2D 06H 30M 25S</strong><br /><em>(July 26th, 2022)</em>
                </span>
                <div className="text-button">
                  <Link to="itemdetails">View Item Details</Link>
                </div>
              </div>
            </div>
          </div>
    <div className="m-3 md:h-[400px]"
    data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000">
            <div className="item">
              <div className="left-image">
                <img src={require("../assets/images/nft2.avif")} alt="" style={{borderRadius: 20}}  className=' md:w-[195px] md:h-[200px]'/>
              </div>
              <div className="right-content">
                <h4>Digital Crypto Artwork</h4>
                <span className="author">
                  <img src={require("../assets/images/author.jpg")} alt="" style={{ borderRadius: '50%'}} className='hidden  md:block  md:max-w-[50px]' />
                  <h6>Liberty Artist<br /><a href="/">@libertyart</a></h6>
                </span>
                <div className="line-dec" />
                <span className="bid">
                  Current Bid<br /><strong>2.03 ETH</strong><br /><em>($7,200.50)</em>
                </span>
                <span className="ends">
                  Ends In<br /><strong>2D 06H 30M 25S</strong><br /><em>(July 26th, 2022)</em>
                </span>
                <div className="text-button">
                  <Link to="itemdetails">View Item Details</Link>
                </div>
              </div>
            </div>
          </div>
  
    

    </>
  )
}

export default Itemcureent2