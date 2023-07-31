import React from "react";
import '../component-css/aboutUsText.css'

class AboutUsText extends React.Component{
    constructor(options){
        super(options)
    }

    render(){
        return (
            <div className="container">
                <div className="scissors"></div>
                <div className="textAboutUs">Мы создаем не просто салон красоты, а гармоничное пространство  с невероятной атмосферой , которая сможет зарядить вас любовью к самому важному человеку вашей жизни - к самой себе.</div>
                <div className="lak">
                    <img className="imgBubbleOne" src={require("../img/image 4.png")} alt=""/>
                </div>
            </div>
        )
    }
}

export default AboutUsText