import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Shehzad() {
    const  [item,setItem] = useState([]);
    const callback=()=>{
        axios.get(`http://localhost:4001/contact`).then((
            response) => {
            setItem(response.data);
            // console.log(response.data);
            }
    ).catch((error) => {
        console.log(error);
    });
}
useEffect(()=>{
    callback();
},[]);
console.log(item);

  return (
  <>
  <h1>umer</h1>
{item?.map(item=>(

   <>
      <div >
        <h2 key={item.id}>FirstName: {item.Rendering}</h2>
        <h3 key={item.id}>email{item.Browser}</h3>
        <h3 key={item.id}>msg :{item.Platform}</h3>
        <h3 key={item.id}>msg :{item.Engine}</h3>
        <h3 key={item.id}>msg :{item.Grade}</h3>
      </div>

   </>
))}
  

 </>
  )
}

export default Shehzad