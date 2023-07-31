import React from "react";
import '../component-css/details.css'

class Details extends React.Component{
    constructor(options){
        super(options)
    }

    render(){
        return(
            <div className="container" style={{height:1200+'px!important'}}>
                <div className="manicure">
                    <img className="imgBubbleOne" src={require("../img/bubble.png")} alt=""/>
                    <div className="text">Маникюр</div>
                    <div className="textTwo">Приведем в порядок ваши пальчики.</div>
                    <button className="btnMore">подробнее</button>
                </div>
                <div className="manicureWith">
                    <img className="imgBubbleOne" src={require("../img/bubble2.png")} alt=""/>
                    <div className="text" style={{top:'15%!important'}}>Маникюр с уходом</div>
                    <div className="textTwo" style={{top:'30%!important',width:'90%'}}>Забота о здоровье ногтей
                        и кожи рук.</div>
                    <button className="btnMore" style={{bottom:'20%'}}>подробнее</button>
                </div>
                <div className="manicureJapan">
                    <img className="imgBubbleOne" src={require("../img/bubble3.png")} alt=""/>
                    <div className="text" style={{top:'15%!important'}}>Японский маникюр</div>
                    <div className="textTwo" style={{top:'30%!important',width:'90%'}}>Бережный уход
                        и естественная красота.</div>
                    <button className="btnMore" style={{bottom:'20%'}}>подробнее</button>
                </div>
        </div>
        )
    }
}

export default Details