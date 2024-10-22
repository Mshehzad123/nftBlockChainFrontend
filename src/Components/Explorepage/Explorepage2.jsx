import React from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Explorepage2() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
     <div className="col-lg-3"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
          <div className="item">
            <div className="row">
              <div className="col-lg-12 h-[300px]">
                <span className="author">
                  <img src={require("../../assets/images/author.jpg")} alt="" style={{maxWidth: 50, maxHeight: 50, borderRadius: '50%'}} />
                </span>
                <img src={require("../../assets/images/discover-03.jpg")} alt="" style={{borderRadius: 20}}  className=' h-[230px]' />
                <h4>Genesis Meta Boom</h4>
              </div>
              <div className="col-lg-12">
                <div className="line-dec" />
                <div className="row">
                  <div className="col-6">
                    <span>Current Bid: <br /> <strong>* ETH</strong></span>
                  </div>
                  <div className="col-6">
                    <span>Ends In: <br /> <strong>*</strong></span>
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
     <div className="col-lg-3"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
          <div className="item">
            <div className="row">
              <div className="col-lg-12 h-[300px]">
                <span className="author">
                  <img src={require("../../assets/images/author.jpg")} alt="" style={{maxWidth: 50, maxHeight: 50, borderRadius: '50%'}} className=' h-[230px]' />
                </span>
                <img src={require("../../assets/images/nft4.avif")} alt="" style={{borderRadius: 20}} className=' h-[230px]' />
                <h4>Genesis Meta Boom</h4>
              </div>
              <div className="col-lg-12">
                <div className="line-dec" />
                <div className="row">
                  <div className="col-6">
                    <span>Current Bid: <br /> <strong>* ETH</strong></span>
                  </div>
                  <div className="col-6">
                    <span>Ends In: <br /> <strong>*</strong></span>
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
     <div className="col-lg-3"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
          <div className="item">
            <div className="row">
              <div className="col-lg-12 h-[300px]">
                <span className="author">
                  <img src={require("../../assets/images/author.jpg")} alt="" style={{maxWidth: 50, maxHeight: 50, borderRadius: '50%'}} className=' h-[230px]' />
                </span>
                <img src={require("../../assets/images/nft6.avif")} alt="" style={{borderRadius: 20}} className=' h-[230px]' />
                <h4>Genesis Meta Boom</h4>
              </div>
              <div className="col-lg-12">
                <div className="line-dec" />
                <div className="row">
                  <div className="col-6">
                    <span>Current Bid: <br /> <strong>* ETH</strong></span>
                  </div>
                  <div className="col-6">
                    <span>Ends In: <br /> <strong>*</strong></span>
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
     <div className="col-lg-3"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
          <div className="item">
            <div className="row">
              <div className="col-lg-12 h-[300px]">
                <span className="author">
                  <img src={require("../../assets/images/author.jpg")} alt="" style={{maxWidth: 50, maxHeight: 50, borderRadius: '50%'}}  />
                </span>
                <img src={require("../../assets/images/nft7.jpg")} alt="" style={{borderRadius: 20}} className=' h-[230px]'/>
                <h4>Genesis Meta Boom</h4>
              </div>
              <div className="col-lg-12">
                <div className="line-dec" />
                <div className="row">
                  <div className="col-6">
                    <span>Current Bid: <br /> <strong>* ETH</strong></span>
                  </div>
                  <div className="col-6">
                    <span>Ends In: <br /> <strong>*</strong></span>
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
    
    </>
  )
}

export default Explorepage2