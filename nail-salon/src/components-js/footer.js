import React from "react";
import '../component-css/footer.css'

class Footer extends React.Component{
    constructor(options){
        super(options)
    }

    render(){
        return(
            <div className="footer">
                <div className="address">
                    <div>
                        Казань <br/>
                        Николая Столбова 1 <br/>
                        +7 (843)2-393-343 <br/>
                    </div>
                </div>
                <div className="time">Каждый день с 10 до 22</div>

                <div>
                    <img className="img3" src={require("../img/image 11.png")} alt=""/>
                    <img className="img4" src={require("../img/image 12.png")} alt=""/>
                 </div>
            </div>
        )
    }
}

export default Footer