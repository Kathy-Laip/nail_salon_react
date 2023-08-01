import React, {useEffect, useRef} from "react";
import '../component-css/header.css';
import {Link} from "react-router-dom";

// const buttonRef = useRef(null)
// useEffect(() => {
//     buttonRef.current.click();
//   }, [])
class Header extends React.Component{
    constructor(options){
        super(options)
        this.clickServices = this.clickServices.bind(this)
    }

    componentDidMount(){
        this.clickServices()
    }

    clickServices(){
        var hiddenElement = document.querySelectorAll(".we")[1];
        console.log(hiddenElement)
        // hiddenElement.scrollIntoView({behavior: "smooth"})
        // console.log(window.getComputedStyle(hiddenElement), "")
        // let rect = hiddenElement.getBoundingClientRect()
        // window.scrollTo(0, rect.top);
        // let rect = window.getComputedStyle(hiddenElement)
        // console.log(rect)
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
                <a className="services" onClick={this.clickServices()}>Услуги</a>
                <a className="price">Прайс</a>
                <a className="aboutUs">О нас</a>
                <a className="pedicure">Педикюр</a>
                <a className="contacts">Контакты</a>

                <div className="name">Маникюрный салон</div>
                {/* onСlick="btnOrder()" */}
                {/* <Link to='/order' className="appointment">записаться на прием</Link> */}
                <Link to='/order' className="appointment">записаться на прием</Link>
                {/* <button className="appointment">записаться на прием</button> */}
            </div>
        )
    }
}

export default Header