import React from "react";
import '../component-css/aboutUs.css'

class AboutUs extends React.Component{
    constructor(options){
        super(options)
    }

    render(){
        return (
            <div className="we">
                <div>{this.props.text}</div>
            </div>
        )
    }
}

export default AboutUs