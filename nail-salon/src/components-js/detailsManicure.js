import React from "react";
import '../component-css/details.css'
import '../component-css/aboutManicure.css'

class AboutManicure extends React.Component{
    constructor(options){
        super(options)
    }

    render(){
        return(
            <div className="container">
            <div className="scissors2"></div>
            <div className="textAboutUs" style={{left: '26%', top: '0%'}}>
                <strong>Японский маникюр</strong> <br/>
                 <ul style={{margin: "0"}}>
                    <li>маникюр+уход — 1500 руб</li>
                 </ul> <br/>
                <strong>Аппаратный маникюр</strong>
                <ul style={{margin: "0"}}>
                    <li>без покрытия — 1000 руб</li>
                    <li>с лаком SMIT AND CULT — 1500 руб</li>
                    <li>с гель-лаком CF/FEDUA — 1700 руб</li>
                    <li>гель-лак + френч (или лунки) — 2100 руб</li>
                 </ul> <br/>
                 <strong>Комбинированный педикюр</strong>
                <ul style={{margin: "0"}}>
                    <li>без покрытия — от 1800 руб</li>
                    <li>с лаковым покрытием — от 2500 руб</li>
                    <li>с покрытием гель-лак — от 2600 руб</li>
                 </ul> <br/>
            </div>
             <div className="textInfo">
                <strong>Комплексный маникюр</strong>
                <ul style={{margin: "0"}}>
                    <li>маникюр+уход — 2500 руб</li>
                 </ul> <br/>
             </div>
            <div>
                <img className="imgBubble" src={require("../img/image 8.png")} alt=""/>
            </div>
        </div>
        )
    }
}

export default AboutManicure
