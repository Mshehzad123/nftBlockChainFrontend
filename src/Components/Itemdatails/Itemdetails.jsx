import React from 'react'
import Createnft from '../Createnft'
import { Link } from 'react-router-dom'

function  Itemdetails() {
  return (
    <>
    <div>
  <div className="page-heading normal-space">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h6>Liberty NFT Market</h6>
          <h2>View Item Details</h2>
          <span>
          <Link to='/' ><span className=' text-blue-700'>Home</span></Link> &gt; <span className=' text-white'> Item Details</span>

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
  <div className="item-details-page">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-heading">
            <div className="line-dec" />
            <h2>View Details <em>For Item</em> Here.</h2>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="left-image">
            <img src={require("../../assets/images/item-details-01.jpg")} alt="" style={{borderRadius: 20}} />
          </div>
        </div>
        <div className="col-lg-5 align-self-center">
          <h4>Dolores Haze Westworld Eye</h4>
          <span className="author">
            <img src={require("../../assets/images/author-02.jpg")} alt="" style={{maxWidth: 50, borderRadius: '50%'}} />
            <h6>Liberty Artist<br /><a href="/">@libertyart</a></h6>
          </span>
          <p>Lorem ipsum dolor sit amet, consectetu dipiscingei elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="row">
            <div className="col-3">
              <span className="bid">
                Current Bid<br /><strong>6.06 ETH</strong><br /><em>($8,025.50)</em>
              </span>
            </div>
            <div className="col-4">
              <span className="owner">
                Owner<br /><strong>David Walker</strong><br /><em>(@davidwalker)</em>
              </span>
            </div>
            <div className="col-5">
              <span className="ends">
                Ends In<br /><strong>3D 05H 20M 58S</strong><br /><em>(January 22nd, 2021)</em>
              </span>
            </div>
          </div>
          <form action="submit">
            <label htmlFor="quantity-text">Place Bid:</label>
            <input placeholder="1 ETH" className="quantity-text" />
            <button type="submit" id="form-submit" className="main-button">Submit Now</button>
          </form>
        </div>
        <div className="col-lg-12">
          <div className="current-bid">
            <div className="row">
              <div className="col-lg-6">
                <div className="mini-heading"><h4>Current Biddings Prices ( ETH )</h4></div>
              </div>
              <div className="col-lg-6">
                <fieldset>
                  <select name="Category" className="form-select" aria-label="Default select example" id="chooseCategory" onchange="this.form.click()">
                    <option selected>Sort By: Latest</option>
                    <option type="checkbox" name="option1" value="old">Sort By: Oldest</option>
                    <option value="low">Sort By: Lowest</option>
                    <option value="high">Sort By: Highest</option>
                  </select>
                </fieldset>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="item">
                  <div className="left-img">
                    <img src={require("../../assets/images/current-01.jpg")} alt="" />
                  </div>
                  <div className="right-content">
                    <h4>David Walker</h4>
                    <a href="/">@davidwalker</a>
                    <div className="line-dec" />
                    <h6>Bid: <em>0.06 ETH</em></h6>
                    <span className="date">24/07/2022, 22:00</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="item">
                  <div className="left-img">
                    <img src={require("../../assets/images/current-02.jpg")} alt="" />
                  </div>
                  <div className="right-content">
                    <h4>David Walker</h4>
                    <a href="/">@davidwalker</a>
                    <div className="line-dec" />
                    <h6>Bid: <em>0.06 ETH</em></h6>
                    <span className="date">24/07/2022, 22:00</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="item">
                  <div className="left-img">
                    <img src={("../../assets/images/current-03.jpg")} alt="" />
                  </div>
                  <div className="right-content">
                    <h4>David Walker</h4>
                    <a href="/">@davidwalker</a>
                    <div className="line-dec" />
                    <h6>Bid: <em>0.06 ETH</em></h6>
                    <span className="date">24/07/2022, 22:00</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="item">
                  <div className="left-img">
                    <img src={require("../../assets/images/current-02.jpg")} alt="" />
                  </div>
                  <div className="right-content">
                    <h4>David Walker</h4>
                    <a href="/">@davidwalker</a>
                    <div className="line-dec" />
                    <h6>Bid: <em>0.06 ETH</em></h6>
                    <span className="date">24/07/2022, 22:00</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="item">
                  <div className="left-img">
                    <img src={require("../../assets/images/current-04.jpg")} alt="" />
                  </div>
                  <div className="right-content">
                    <h4>David Walker</h4>
                    <a href="/">@davidwalker</a>
                    <div className="line-dec" />
                    <h6>Bid: <em>0.06 ETH</em></h6>
                    <span className="date">24/07/2022, 22:00</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="item">
                  <div className="left-img">
                    <img src={require("../../assets/images/current-01.jpg")} alt="" />
                  </div>
                  <div className="right-content">
                    <h4>David Walker</h4>
                    <a href="/">@davidwalker</a>
                    <div className="line-dec" />
                    <h6>Bid: <em>0.06 ETH</em></h6>
                    <span className="date">24/07/2022, 22:00</span>
                  </div>
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

export default Itemdetails