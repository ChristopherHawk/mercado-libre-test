import React, {useState, useEffect} from 'react';

  
const Product = ({idProduct, setActiveSearch}) => {

  const [productDetails, setProductDetails] = useState({})
  const [productDescription, setProductDescription] = useState('')

  

useEffect(() => {
  const GetDetailsProduct = ()=>{
    var requestOptions = {method: 'GET',redirect: 'follow'};
  fetch(`https://api.mercadolibre.com/items/${idProduct}`, requestOptions)
  .then(response => response.json())
  .then(result => {  
    setProductDetails(result)
    setActiveSearch(false)
  })
  .catch(error => console.log('error', error));
  fetch(`https://api.mercadolibre.com/items/${idProduct}/description`, requestOptions)
  .then(response => response.json())
  .then(result => {
    setProductDescription(result.plain_text)})
  .catch(error => console.log('error', error));
}
    GetDetailsProduct()
  }, [idProduct])


  return ( 
<div id='containerProduct'>
<div id='column1'>
<img id='imgDetailsProduct' src={productDetails.thumbnail} alt='Imagen del producto'/>
<h1 id='titleDescription'>Descripción del producto</h1>
<p id='descriptiosDetails'>{productDescription}</p>
</div>
<div id='column2'>
<p id='sold'>{productDetails.condition} - {productDetails.sold_quantity} unidades vendidas</p>
  <h1 id='titleProduct'>{productDetails.title}</h1>
  <h1 id='priceProduct'>$ {(new Intl.NumberFormat().format(productDetails.price))}</h1>
  <button id='btnBuy'>Comprar</button>
</div>


</div>
   );
}
 
export default Product;