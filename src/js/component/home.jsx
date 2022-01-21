import React, { useEffect, useState } from "react";
import Lights from "./lights.jsx";
import Button from "react-bootstrap/Button";

//create your first component
const Home = () => {
	const [color, setColor] = useState({});

	const handleClick = (event) => {
		if (color[event.target.id] == `selected-${event.target.id}`) {
			const newColors = {
				[event.target.id]: "",
			};
			setColor(newColors);
		} else {
			const newColors = {
				[event.target.id]: `selected-${event.target.id}`,
			};
			setColor(newColors);
		}
	};

	console.log(color);

	const [displayToggle, setDisplayToggle] = useState("d-none");
	const displayPurple = () => {
		setDisplayToggle(displayToggle == "d-none" ? "block" : "d-none");
	};

	// const cycle = (light) => {
	// 	setTimeout(() => {
	// 		let newColors = {
	// 			[light]: `selected-${light}`,
	// 		};
	// 		setColor(newColors);
	// 		console.log(light);
	// 	}, 2000);
	// };

	// const toggleCycle = () => {
	// 	cycle("red");
	// 	cycle("yellow");
	// 	cycle("green");
	// 	cycle("purple");
	// };

	console.log({ color });

	return (
		<div className="container-fluid d-flex flex-column align-items-center">
			<div className="TrafficHead"></div>
			<div id="trafficLight" className="TrafficBody p-4">
				<Lights
					handleClick={handleClick}
					color="red"
					class={color.red}
				/>
				<Lights
					handleClick={handleClick}
					color="yellow"
					class={color.yellow}
				/>
				<Lights
					handleClick={handleClick}
					color="green"
					class={color.green}
				/>
				<Lights
					handleClick={handleClick}
					color="purple"
					class={color.purple}
					display={displayToggle}
				/>
			</div>
			<div className="m-4">
				<Button onClick={displayPurple} variant="outline-secondary">
					Add Purple
				</Button>{" "}
				{/* <Button onClick={toggleCycle} variant="outline-secondary">
					Cycle Lights
				</Button> */}
			</div>
		</div>
	);
};

export default Home;
