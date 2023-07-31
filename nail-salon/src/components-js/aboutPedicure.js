import React from "react";
import '../component-css/details.css'
import '../component-css/aboutPedicure.css'
import { Link, Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Order from "./order";
import Header from "./header";
import App from "./app";


function AboutPedicure(){
        // const history = useHistory();
        // const navigateToOrder = () => {
        //     history.push('/order');
        // };
        return(
            <div className="container">
                <div className="textPedicure"><strong>Сделаем так, что после выхода из студии вам скорее захочется надеть любимые босоножки. 
                А ваши стопы станут мягкими как никогда. </strong></div>
                <div>
                    <img className="img1" src={require("../img/image 9.png")} alt=""/>
                    <img className="img2" src={require("../img/image 10.png")} alt=""/>
                </div>

                <Link to='/order' className="btnappointment">записаться на прием</Link>
                {/* <button className="btnappointment">записаться на прием</button> */}
            </div>
        )
    }

export default AboutPedicure