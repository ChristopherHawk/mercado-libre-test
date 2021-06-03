import React from 'react';
import ICShipping from '../assets/ic_shipping@2x.png.png.png';


const Results = ({productInfo, setShowDetails, setIdProduct, setActiveSearch}) => {  

 return ( 
      <div id='divProduct'>
      
      {productInfo.slice(1,5).map((item, key)  => (        
      <div id='product' key={key} onClick={()=>{setShowDetails(true); setIdProduct(item.id); setActiveSearch(false)}}>       
      <img id='img' src={item.thumbnail} alt='product'/>
      <div id='contentProduct'>
      <div id='headerPrice'>
      <h1>{`$ ${(new Intl.NumberFormat().format(item.price))}`}</h1>
      {item.shipping.free_shipping &&<img id='ICShipping' src={ICShipping} alt='envíoGratis' />}
      </div>
      <div id='description'>{item.title}</div>
      </div>
      <div id='zoneDiv'>
      <h1 id='zone' >{item.address.city_name}</h1>
      </div>
      </div>
     ))} </div>
   
   );
}
 
export default Results;