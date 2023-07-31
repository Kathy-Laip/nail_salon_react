import React from "react";
import Header from './header';
import AboutUs from './aboutUs';
import Details from './details';
import AboutManicure from './detailsManicure';
import AboutUsText from './aboutUsText';
import AboutPedicure from './aboutPedicure';
import Footer from './footer';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component{
    constructor(options){
        super(options)
    }

    render(){
        return(
            <>
                <Header/>
                <AboutUs text='О нас'/>
                <AboutUsText/>
                <AboutUs text='Услуги'/>
                <Details/>
                <AboutUs text='Прайс-лист'/>
                <AboutManicure/>
                <AboutUs text='Педикюр'/>
                <AboutPedicure/>
                <Footer/>
            </>
        )
    }
}

export default App