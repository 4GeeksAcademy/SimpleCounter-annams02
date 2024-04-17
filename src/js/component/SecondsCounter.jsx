import React from "react";



//include images into your bundle


//create your first component
const SecondsCounter = (props) => {
	return (
		<div className="container">
			<div className="clock"> 
				<i className="far fa-clock"></i>
				</div>
			<div className="one">{props.seconds}</div>

		</div>
	);
};




export default SecondsCounter;
