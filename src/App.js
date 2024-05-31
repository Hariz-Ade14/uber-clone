import "./App.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home/home";
import Services from "./components/Services/services";
import {useEffect} from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import {browserHistory} from "react-router";
import Preview from "./components/Preview";
import {FaHome, FaUser, FaCalendar, FaList} from "react-icons/fa";

function App() {
	useEffect(() => {
		// return (
		//   <Preview/>
		// );
	}, []);
	return (
		<>
			{/* <Preview/> */}
			<div className='App'>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/Services' element={<Services />} />
						{/* <Route path="/" element={<Home/>} /> */}
					</Routes>
				</BrowserRouter>

				<div className='navigation'>
					<ul class='d-flex justify-content-between shadow-lg align-items-center bgdark m-0 p-3'>
						<li class='nav-item active'>
							<a class='nav-link' href='/'>
								<FaHome size={26} />
							</a>
						</li>
						<li class='nav-item active'>
							<a class='nav-link' href='/Services'>
								<FaCalendar size={26} />
							</a>
						</li>
						<li class='nav-item active'>
							<a class='nav-link' href='/Services'>
								<FaCalendar size={26} />
							</a>
						</li>
						<li class='nav-item active'>
							<a class='nav-link' href='/Services'>
								<FaUser size={26}/>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default App;
