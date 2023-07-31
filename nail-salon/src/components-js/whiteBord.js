import React from "react";
import style from '../component-css/board.css'
import '../component-css/index.css'

class Board extends React.Component{
    constructor(options){
        super(options)
    }

    render(){
        return(
            <div className={style.whiteBoard}>
                <div className="title">
                    Запись
                </div>
                <div className="form">
                    <div className="subform">
                        <input type="text" name="" id="fio" placeholder="ФИО"/> <br/>
                        <input type="tel" name="" id="phone" placeholder="Номер"/> <br/>
                        <input type="email" name="" id="email" placeholder="Почта"/> <br/>
                        <select name="master" id="master">
                            <option value="Мастер">Мастер</option>
                        </select>
                        <br/>
                        <select name="date" id="date">
                            <option value="Дата">Дата</option>
                        </select>
                        <br/>
                        <select name="time" id="time">
                            <option value="Время">Время</option>
                        </select>
                    </div>
                    <button className="next" type="button">Далее</button>
                </div>
            </div>
        )
    }
}

export default Board