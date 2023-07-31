import React from "react";
import Board from "./whiteBord";
import AboutUs2 from "./aboutUs";

class Order extends React.Component{
    constructor(options){
        super(options)
    }

    render(){
        return(
            <>
                <Board/>
                <AboutUs2 text='Выбор услуг'/>
            </>
        )
    }
}

export default Order