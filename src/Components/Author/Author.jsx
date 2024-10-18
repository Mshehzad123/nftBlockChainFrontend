import React from 'react'
import Createnft from '../Createnft'
import { Link } from 'react-router-dom'

function Author() {
  return (
<>
<div>
  <div className="page-heading normal-space">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h6>Author Details</h6>
          <h2>View Details For Author</h2>
          <span>
          <Link to='/' ><span className=' text-blue-700'>Home</span></Link> &gt; <span className=' text-white'> Author</span>
          
          </span>
          <div className="buttons">
            <div className="main-button">
              <Link to="/explore">Explore Our Items</Link>
            </div>
            <div className="border-button">
              <Link to="/createyour">Create Your NFT</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="author-page">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="author">
            <img src={require("../../assets/images/single-author.jpg")} alt="" style={{borderRadius: '50%', maxWidth: 170}} />
            <h4>Melanie Smith <br /> <a href="/">@melanie32</a></h4>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="right-info">
            <div className="row">
              <div className="col-4">
                <div className="info-item">
                  <i className="fa fa-heart" />
                  <h6>1238 <em>Likes</em></h6>
                </div>
              </div>
              <div className="col-4">
                <div className="info-item">
                  <i className="fa fa-hand" />
                  <h6>1238 <em>Likes</em></h6>
                </div>
              </div>
              <div className="col-4">
                <div className="info-item">
                  <i className="fa fa-dollar" />
                  <h6>1238 <em>Likes</em></h6>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-5">
                <h5>559 Followers</h5>
              </div>
              <div className="col-7">
                <div className="main-button">
                  <a href="/">Follow @melanie32</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="section-heading">
            <div className="line-dec" />
            <h2>Melanie Smith’s <em>Items</em>.</h2>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="item">
            <div className="row">
              <div className="col-lg-12">
                <span className="author">
                  <img src={require("../../assets/images/author.jpg")} alt="" style={{maxWidth: 50, borderRadius: '50%'}} />
                </span>
                <img src={require("../../assets/images/discover-03.jpg")} alt="" style={{borderRadius: 20}} />
                <h4>Mutant Ape Bored</h4>
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
        <div className="col-lg-3 col-md-6">
          <div className="item">
            <div className="row">
              <div className="col-lg-12">
                <span className="author">
                  <img src={require("../../assets/images/author-02.jpg")} alt="" style={{maxWidth: 50, borderRadius: '50%'}} />
                </span>
                <img src={require("../../assets/images/discover-06.jpg")} alt="" style={{borderRadius: 20}} />
                <h4>Mutant Ape Bored</h4>
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
        <div className="col-lg-3 col-md-6">
          <div className="item">
            <div className="row">
              <div className="col-lg-12">
                <span className="author">
                  <img src={require("../../assets/images/author.jpg")} alt="" style={{maxWidth: 50, borderRadius: '50%'}} />
                </span>
                <img src={require("../../assets/images/discover-05.jpg")} alt="" style={{borderRadius: 20}} />
                <h4>Mutant Ape Bored</h4>
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
        <div className="col-lg-3 col-md-6">
          <div className="item">
            <div className="row">
              <div className="col-lg-12">
                <span className="author">
                  <img src={require("../../assets/images/author-03.jpg")} alt="" style={{maxWidth: 50, borderRadius: '50%'}} />
                </span>
                <img src={require("../../assets/images/discover-04.jpg")} alt="" style={{borderRadius: 20}} />
                <h4>Mutant Ape Bored</h4>
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
      </div>
    </div>
  </div>
</div>
<Createnft/>
</>
  )
}

export default Author