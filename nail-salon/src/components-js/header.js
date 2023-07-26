import React from "react";
import { ReactDOM } from "react-dom.client";

class Header extends React.Component{
    constructor(options){
        super(options)
    }
    render(){
        return (
            <div className="homePage">
                <a className="services" onСlick="clickServices()">Услуги</a>
                <a className="price" onСlick="clickPrice()">Прайс</a>
                <a className="aboutUs" onСlick="clickAbout()">О нас</a>
                <a className="pedicure" onСlick="clickPedicure()">Педикюр</a>
                <a className="contacts" onСlick="clickContact()">Контакты</a>

                <div className="name">Маникюрный салон</div>

                <button className="appointment" onСlick="btnOrder()">записаться на прием</button>
            </div>
        )
    }
}