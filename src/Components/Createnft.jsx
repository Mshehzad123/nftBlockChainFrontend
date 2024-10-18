import React from 'react'
import { Link } from 'react-router-dom'

function Createnft() {
  return (
    <>
    
    <div className="create-nft">
  <div className="container">
    <div className="row">
      <div className="col-lg-8">
        <div className="section-heading">
          <div className="line-dec" />
          <h2>Create Your NFT &amp; Put It On The Market.</h2>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="main-button">
          <Link to="/createyour">Create Your NFT Now</Link>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="item first-item">
          <div className="number">
            <h6>1</h6>
          </div>
          <div className="icon p-3">
            <img src={require("../assets/images/icon-02.png")} alt="" />
          </div>
          <h4>Set Up Your Wallet</h4>
          <p>NFT means Non-Fungible Token that are used in digital cryptocurrency markets. There are many different kinds of NFTs in the industry.</p>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="item second-item">
          <div className="number">
            <h6>2</h6>
          </div>
          <div className="icon p-3">
            <img src={require("../assets/images/icon-04.png")} alt="" />
          </div>
          <h4>Add Your Digital NFT</h4>
          <p>There are 5 different HTML pages included in this NFT <a href="https://templatemo.com/page/1"  rel="nofollow">website template</a>. You can edit or modify any section on any page as you required.</p>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="item">
          <div className="icon p-3">
            <img src={require("../assets/images/icon-06.png")} alt="" />
          </div>
          <h4>Sell Your NFT &amp; Make Profit</h4>
          <p>If you would like to support our TemplateMo website, please visit <a rel="nofollow" href="https://templatemo.com/contact" target="_parent">our contact page</a> to make a PayPal contribution. Thank you.</p>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Createnft