import React from "react";
import '../component-css/aboutUs.css'

class AboutUs2 extends React.Component{
    constructor(options){
        super(options)
    }

    render(){
        let wHH = window.screen.height + 'px'
        let wWW = window.screen.width + 'px'
        let styles = {
            width:wWW,
            height:wHH
        }
        return (
            <div className="we" style={styles}>
                <div>{this.props.text}</div>
            </div>
        )
    }
}

export default AboutUs2