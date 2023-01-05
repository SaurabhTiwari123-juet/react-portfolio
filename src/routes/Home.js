/** @format */

import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import HeroImg from "../components/HeroImg";
const Home = () => {
	return (
		<div>
			{/* <h1>gg</h1> */}

			<Navbar />
			<HeroImg />
			<ul>
				{/* <li>
					<Link to='/'>Home</Link>
				</li> */}
			</ul>
		</div>
	);
};

export default Home;
