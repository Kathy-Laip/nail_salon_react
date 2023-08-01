import React from "react";
import Board from "./whiteBord";
import AboutUs from "./aboutUs";
import Main from "./main";

class Order extends React.Component{
    constructor(options){
        super(options)
    }

    render(){
        return(
            <>
                <Board/>
                <AboutUs text='Выбор услуг'/>
                <Main/>
            </>
        )
    }
}

export default Order