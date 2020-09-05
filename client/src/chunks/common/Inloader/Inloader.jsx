import React from "react";
import "./Inloader.css";
import loader from "../../../assets/images/inloader.svg";

const Inloader = (props) => {
    return props.boxLoad ? <div className="inloader-box"><span className="inloader" style={{backgroundImage: 'url(' + loader + ')'}} /></div> : null;
};

export default Inloader;