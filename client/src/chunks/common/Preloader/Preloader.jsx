import React from "react";
import "./Preloader.css";
import loader from "../../../assets/images/preloader.svg";

const Preloader = (props) => {
    let loaderStyle = {backgroundImage: 'url(' + loader + ')'};
    return props.isFetching ? <div className="preloader-box"><span className="preloader" style={loaderStyle} /></div> : null;
};

export default Preloader;