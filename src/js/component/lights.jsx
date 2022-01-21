import React from "react";
import PropTypes from "prop-types";

const Lights = (props) => {
	return (
		<div
			onClick={(e) => props.handleClick(e)}
			id={props.color}
			className={`${props.color} light ${props.class} ${props.cycleClass} ${props.display}`}></div>
	);
};

Lights.propTypes = {
	color: PropTypes.string,
	class: PropTypes.string,
	handleClick: PropTypes.func,
};

export default Lights;
