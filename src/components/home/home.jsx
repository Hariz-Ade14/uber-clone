import React, { useEffect, useRef } from "react";

import "./home.css";
import {FaSearch,FaArrowRight} from "react-icons/fa"



function Home() {
   return (
    <>
       <h1 className="name m-3">rider</h1>
       <div class="form-group m-3 d-flex justify-content-between align-items-center">
          <FaSearch className="search-icon mx-2" size={20}/>
          <input type="text" class="form-control" id="exampleInputName" placeholder="Where to?"/>
       </div>
       <div className="lfg m-3 px-3 py-2">  
           <h3>Ready? Then let's roll.</h3>
           <br/>
           <br/>
           <br/>
           <p>Ride with Rider<FaArrowRight className="mx-2"/></p>
          
        
        </div>
    </>
     
   )

}

export default Home;
