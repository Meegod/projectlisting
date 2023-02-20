import React from 'react';
import './search.css';

function Search() {
  return (
   <>
     <div className='pt-4 mt-4 container'>
     <div className="search-wrapper">
        <div className="search-bar">
          <div className="search-icon">
            <i className="fa fa-search"></i>
          </div>
        <section className='form'>
           <input type="text" name="q" autofocus="" 
           placeholder='Search for your project topic' 
           className='text-black'/>
           <div className="search-icon right">
           <i className="fa fa-microphone"></i>
            </div>
        </section>      
        </div>
      </div>
     </div>
   
   
   
   
   
   </>

  )
}

export default Search