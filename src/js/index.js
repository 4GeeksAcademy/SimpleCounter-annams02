//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter";

let totalSeconds = 0;

const render = () => {
    ReactDOM.render(<SecondsCounter seconds= {totalSeconds++}/>, document.querySelector("#app"));

}


//render your react application

setInterval(render, 1000);
