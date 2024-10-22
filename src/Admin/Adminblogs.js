import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Adminblogs = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:4001/createnft');
      setItems(response.data); // This assumes the API returns an array of items
    } catch (error) {
      setError("Error fetching items");
      console.error("Error fetching items:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchItems();
  }, []);
  if (loading) {
    return <div className="text-center py-4">Loading...</div>;
  }
  if (error) {
    return <div className="text-center py-4 text-red-600">{error}</div>;
  }
  return (
    <>
     <div className="flex flex-col items-center justify-center">
      <div className="content-wrapper w-full max-w-4xl">
        <table className="min-w-full border-collapse bg-white shadow-md">
          <thead className="bg-gray-200">
            <tr>
              {['Item Title', 'Description', 'Username', 'Price', 'Royalties', 'File'].map((header) => (
                <th key={header} className="border px-4 py-2">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.length > 0 ? (
              items.map((item) => (
                <tr key={item._id} className="hover:bg-gray-100"> {/* Use item._id if it's unique */}
                  <td className="border px-4 py-2">{item.itemTitle}</td>
                  <td className="border px-4 py-2">{item.descriptionForItem}</td>
                  <td className="border px-4 py-2">{item.yourUsername}</td>
                  <td className="border px-4 py-2">{item.priceOfItem}</td>
                  <td className="border px-4 py-2">{item.royalties}</td>
                  <td className="border px-4 py-2">
                    {item.profile ? (
                      <img 
                        src={`http://localhost:4001${item.profile}`}  // Make sure to use the correct path
                        alt={item.itemTitle} 
                        className="w-32 h-32 object-cover" 
                      />
                    ) : (
                      'No Profilefile'
                    )}
                  </td>
                  <td className="border px-4 py-2">
                    {item.nft ? (
                      <img 
                        src={`http://localhost:4001${item.profile}`}  // Make sure to use the correct path
                        alt={item.itemTitle} 
                        className="w-32 h-32 object-cover" 
                      />
                    ) : (
                      'No Profilefile'
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center border px-4 py-2">
                  No items available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>

    </>
  );
};

export default Adminblogs;
