import './App.css';
import React, {useState, useEffect} from 'react';
import Results from './page/results';
import SearchBar from "./components/searchBar";
import Product from './page/product';

function App() {
  
  const[productInfo, setProductInfo]= useState([])
  const[inputSearchValue, setInputSearchValue]= useState('')
  const[showDetails, setShowDetails]= useState(false)
  const[activeSearch, setActiveSearch]= useState(false)
  const[idProduct, setIdProduct]= useState('')
  const[breadcrumb, setBreadcrumb]= useState('')
  const[breadcrumb1, setBreadcrumb1]= useState('')
  const[breadcrumb2, setBreadcrumb2]= useState('')
  
  //GET RESULTS SEARCH
  const findProduct = () =>{
    setActiveSearch(true)
    setShowDetails(false)
    setBreadcrumb('')
    setBreadcrumb1('')
    setBreadcrumb2('')
    var requestOptions = {method: 'GET',redirect: 'follow'};
  fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${inputSearchValue}`, requestOptions)
    .then(response => response.json())
    .then(result => {
      setProductInfo(result.results);
      setBreadcrumb(result.filters[0].values[0].name)
      setBreadcrumb1(result.filters[1].values[0].name)
      setBreadcrumb2(result.filters[2].values[0].name)
      
    })
    .catch(error => console.log('error', error));

   
  }
useEffect(() => {
  
}, [activeSearch, breadcrumb,breadcrumb1, breadcrumb2])

//
  return ( 
<div id='masterDiv'>
       <SearchBar 
       setInputSearchValue={setInputSearchValue} 
       findProduct={findProduct}
       setShowDetails={setShowDetails}
       setActiveSearch={setActiveSearch}
       />
     <p id='route'>
     <b id='breadCrumb' onClick={()=> { setInputSearchValue(breadcrumb); findProduct()}}>
       {breadcrumb !== '' ? breadcrumb:''}</b> / 
       <b id='breadCrumb' onClick={()=> { setInputSearchValue(breadcrumb1); findProduct()}}>
       {breadcrumb1 !== '' ? breadcrumb1:''}</b> / 
       <b id='breadCrumb' onClick={()=> { setInputSearchValue(breadcrumb2); findProduct()}}>
         {breadcrumb2 !== '' ? breadcrumb2:''} </b></p>
       {!showDetails &&
       <Results productInfo={productInfo}
       setShowDetails={setShowDetails}
       setIdProduct={setIdProduct}
       setActiveSearch={setActiveSearch}
       />}
       {showDetails &&<Product idProduct={idProduct}
       setActiveSearch={setActiveSearch}/>}
</div>


);}

export default App;
