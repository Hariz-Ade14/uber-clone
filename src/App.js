import './App.css';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './components/home/home';
import { useEffect } from 'react';
import { BrowserRouter ,Routes,Route, Link } from "react-router-dom";
import {FaHome,FaUser,FaCalendar,FaList} from "react-icons/fa";


function App() {

  // useEffect(() => {
  //      setTimeout(() => {
        
  //      },2000);
  // });
      
  return (
          <div className="App">
              {/* <Home/> */}
              <div className="navbar shadow-lg p-2">
             
             {/* <h1>Welcome</h1> */}
             <BrowserRouter>
                 <Routes>
                      <Route path="/" element={<Home/>}/>
                         
                      {/* <Route> */}
                      <Link><FaHome/></Link>
                 </Routes>
             </BrowserRouter>
             
             <FaList/>
             <FaCalendar/>
             <FaUser/>
        </div>
          </div>
  );
 
}

export default App;
