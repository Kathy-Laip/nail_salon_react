import React from "react";
import '../component-css/header.css';

class Header extends React.Component{
    constructor(options){
        super(options)
    }

    render(){
        let wH = window.screen.height + 'px'
        let wW = window.screen.width + 'px'
        let style = {
            width:wW,
            height:wH
        }
        return (
            <div className="homePage" style={style}>
                <a className="services">Услуги</a>
                <a className="price">Прайс</a>
                <a className="aboutUs">О нас</a>
                <a className="pedicure">Педикюр</a>
                <a className="contacts">Контакты</a>

                <div className="name">Маникюрный салон</div>
                {/* onСlick="btnOrder()" */}
                <button className="appointment">записаться на прием</button>
            </div>
        )
    }
}

export default Header