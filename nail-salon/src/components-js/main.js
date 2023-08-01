import React from "react";

class Main extends React.Component{
    constructor(options){
        super(options)
    }

    render(){
        return(
            <div class="main">

                <div className="blockChoose">
                    <strong>Японский маникюр</strong> <br/>
                    <div className="info">
                        <ul style={{margin: "0"}}>
                           <li>маникюр+уход — 1500 руб</li> 
                        </ul> 
                        <button className="ch">Выбрать</button>
                    </div>
                </div>

                <div className="blockChoose">
                    <strong>Аппаратный маникюр</strong> <br/>
                    <div className="info">
                        <ul style={{marginTop: "0"}}>
                            <li>без покрытия — 1000 руб</li>
                        </ul> 
                        <button className="ch">Выбрать</button>
                    </div>
                    <br/>
                    <div className="info">
                        <ul style={{margin: "0"}}>
                            <li>с лаком SMIT AND CULT — 1500 руб</li>
                        </ul> 
                        <button className="ch">Выбрать</button>
                    </div>
                    <br/>
                    <div className="info">
                        <ul style={{margin: "0"}}>
                            <li>с гель-лаком CF/FEDUA — 1700 руб</li>
                        </ul> 
                        <button className="ch">Выбрать</button>
                    </div>
                    <br/>
                    <div className="info">
                        <ul style={{margin: "0"}}>
                            <li>гель-лак + френч (или лунки) — 2100 руб</li>
                        </ul> 
                        <button className="ch">Выбрать</button>
                    </div>
                </div>

                <div className="blockChoose">
                    <strong>Комплексный маникюр</strong> <br/>
                    <div className="info">
                        <ul style={{margin: "0"}}>
                            <li>маникюр+уход — 2500 руб</li>
                        </ul> 
                        <button className="ch">Выбрать</button>
                    </div>
                </div>

                <div className="blockChoose">
                    <strong>Маникюр без покрытия</strong> <br/>
                    <div className="info">
                        <ul style={{margin: "0"}}>
                            <li>маникюр — от 700 руб</li>
                        </ul> 
                        <button className="ch">Выбрать</button>
                    </div>
                </div>
                <br/>

                <div className="blockChoose">
                    <strong>Комбинированный педикюр</strong> <br/>
                    <div className="info">
                        <ul style={{margin: "0"}}>
                            <li>без покрытия — от 1800 руб</li>
                        </ul> 
                        <button className="ch">Выбрать</button>
                    </div>
                    <br/>
                    <div className="info">
                        <ul style={{margin: "0"}}>
                            <li>с лаковым покрытием — от 2500 руб</li>
                        </ul> 
                        <button className="ch">Выбрать</button>
                    </div>
                    <br/>
                    <div className="info">
                        <ul style={{margin: "0"}}>
                            <li>с покрытием гель-лак — от 2600 руб</li>
                        </ul> 
                        <button className="ch">Выбрать</button>
                    </div>
                    </div>

                    <div className="blockChoose">
                        <div className="info">
                            <button className="btnOrder">Записаться!</button>
                        </div>
                    </div>

                    <div className="blockChoose" style={{width:"100%"}}></div>
        
             </div>
        )
    }
}

export default Main