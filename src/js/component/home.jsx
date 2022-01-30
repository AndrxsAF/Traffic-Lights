import React, { useEffect, useState } from "react";
import Lights from "./lights.jsx";
import Button from "react-bootstrap/Button";

const redOn = { red: true, yellow: false, green: false, purple: false };
const yellowOn = { red: false, yellow: true, green: false, purple: false };
const greenOn = { red: false, yellow: false, green: true, purple: false };
const purpleOn = { red: false, yellow: false, green: false, purple: true };
const off = { red: false, yellow: false, green: false, purple: false };

//create your first component
const Home = () => {
	const [color, setColor] = useState({
		red: false,
		yellow: false,
		green: false,
		purple: false,
	});
	const [purple, setPurple] = useState(false);

	let count = 0;
	const [listColors] = useState(Object.keys(color));

	const toggleCycle = () => {
		const interval = setInterval(() => {
			if (count === listColors.length) {
				count = 0;
			} else {
				const colorName = listColors[count];
				setColor({ ...color, [colorName]: `selected-${colorName}` });
				count++;
			}
		}, 1000);
		return () => clearInterval(interval);
	};

	return (
		<div className="container-fluid d-flex flex-column align-items-center">
			<div className="TrafficHead"></div>
			<div id="trafficLight" className="TrafficBody p-4">
				<Lights
					handleClick={() => setColor(color.red ? off : redOn)}
					color="red"
					class={color.red ? "selected-red" : null}
				/>
				<Lights
					handleClick={() => setColor(color.yellow ? off : yellowOn)}
					color="yellow"
					class={color.yellow ? "selected-yellow" : null}
				/>
				<Lights
					handleClick={() => setColor(color.green ? off : greenOn)}
					color="green"
					class={color.green ? "selected-green" : null}
				/>
				<Lights
					handleClick={() => setColor(color.purple ? off : purpleOn)}
					color="purple"
					class={color.purple ? "selected-purple" : null}
					display={purple ? null : "visually-hidden"}
				/>
			</div>
			<div className="m-4">
				<Button
					onClick={() => setPurple(purple ? false : true)}
					variant="outline-secondary">
					Add Purple
				</Button>{" "}
				<Button onClick={toggleCycle} variant="outline-secondary">
					Cycle Lights
				</Button>
			</div>
		</div>
	);
};

export default Home;
