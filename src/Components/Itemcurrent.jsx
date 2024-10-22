import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Itemcureent2 from './Itemcureent2';

function Itemcurrent() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ethToUsd, setEthToUsd] = useState(0); // State to hold the ETH to USD conversion rate

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:4001/createnft');
      setItems(response.data);
    } catch (error) {
      setError("Error fetching items");
      console.error("Error fetching items:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchEthToUsd = async () => {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
      setEthToUsd(response.data.ethereum.usd);
    } catch (error) {
      console.error("Error fetching ETH to USD rate:", error);
    }
  };
  useEffect(() => {
    fetchItems();
    fetchEthToUsd();
  }, []);

  if (loading) {
    return <div className="text-center py-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-600">{error}</div>;
  }

  const getRemainingTime = (createdAt) => {
    const creationDate = new Date(createdAt);
    const now = new Date();
    const fiveDaysLater = new Date(creationDate.getTime() + 5 * 24 * 60 * 60 * 1000);
    const timeRemaining = fiveDaysLater - now;

    return timeRemaining > 0 ? timeRemaining : 0; // Return 0 if time is up
  };

  return (
  
    <div className="currently-market">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
              <div className="line-dec" />
              <h2><em>Items</em> Currently In The Market.</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="filters">
              <ul>
                <li data-filter="*" className="active">All Items</li>
                <li data-filter=".msc">Music Art</li>
                <li data-filter=".dig">Digital Art</li>
                <li data-filter=".blc">Blockchain</li>
                <li data-filter=".vtr">Virtual</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {items.length > 0 ? (
                items.map((item) => {
                  const usdValue = (item.priceOfItem * ethToUsd).toFixed(2); // Calculate USD equivalent
                  const remainingTime = getRemainingTime(item.createdAt); // Calculate remaining time

                  // If remaining time is less than or equal to 0, do not display this item
                  if (remainingTime <= 0) return null;

                  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
                  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
                  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

                  return (
                    


                    <div key={item._id} className="m-3 md:h-[400px]"
                    data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                      <div className="item">
                        <div className="left-image">
                          {item.nft ? (
                            <img 
                              src={`http://localhost:4001${item.nft}`} 
                              alt={item.itemTitle} 
                              style={{ borderRadius: 20 }} 
                              className='md:w-[195px] md:h-[200px] '
                            />
                          ) : (
                            'No Nft'
                          )}
                        </div>
                        <div className="right-content">
                          <h4>{item.itemTitle}</h4>
                          <span className="author">
                            {item.profile ? (
                              <img 
                                src={`http://localhost:4001${item.profile}`} 
                                alt={item.itemTitle} 
                                style={{ borderRadius: '100%' }} 
                                className='hidden md:block md:max-w-[50px] md:h-[50px]'
                              />
                            ) : (
                              'No Profile'
                            )}
                            <h6>Liberty Artist<br /><a href="/">{item.yourUsername}</a></h6>
                          </span>
                          <div className="line-dec" />
                          <span className="bid">
                            Current Bid<br /><strong>{item.priceOfItem} ETH</strong><br />
                            <em>(${usdValue})</em>
                          </span>
                          <span className="ends">
                            Ends In<br /><strong>{days}D {hours}H {minutes}M {seconds}S</strong><br />
                            <em>{item.createdAt.split('T')[0]}</em> {/* Show the creation date */}
                          </span>
                          <div className="text-button">
                            <Link to="itemdetails">View Item Details</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                            
                    
                  );
                })
              ) : (
                <div className="text-center py-4">No items available.</div>
              )}
<Itemcureent2/>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Itemcurrent;
