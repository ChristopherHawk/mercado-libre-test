import React from 'react'
import Logo from '../assets/Logo_ML.png';
import SearchIcon from '../assets/ic_Search.png';

const SearchBar = ({setInputSearchValue, findProduct, setShowDetails, setActiveSearch})=> {
  
 
  
  return (
        <div id='searchBar' >      
         <img src={Logo}  alt='logo'/>        
         <input 
         onKeyPress={(e)=>{if (e.key === 'Enter'){findProduct(); setActiveSearch(true); setShowDetails(false); }}} 
         onChange={()=> {setInputSearchValue( document.getElementById('search').value);}} id='search' placeholder='Search...' />
         <button id='btnSearch'  onClick={()=>{findProduct(); setActiveSearch(true);  setShowDetails(false);}}>
         <img src={SearchIcon}  alt='logo'/> 
         </button>
        </div>
        )
      }

      export default SearchBar