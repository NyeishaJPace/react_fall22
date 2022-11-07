import React, { Component } from "react";
import MainBody from "./MainBody";
//import Design1 from '/images/Design1.png';

class Header extends Component{
    //constructor for state
    constructor(props){
        super(props)
        this.state = { 
            count: 0, 
            theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light"
        }

    }

    // exp ? true : false; if(exp){true} else {false} -> ternary

    // exp ? true : exp1 ? true : false;   if(exp){true} else { if(exp1){true} else {false}

    // lifecycle methods

    render(){
        const { linkText, linkUrl } = this.props
        // this.props.linkText
        return(
            <header className={`App-header ${this.state.theme}`}>
                <h1 style={{fontSize: '40px',}}>Nyeisha Pace  <br></br> IT Student Intern  <br></br> Hurtsboro, AL</h1>
                
                
                <a className="App-link" href={linkUrl} target="_blank" rel="noopener noreferrer" >
                    {linkText}
                </a>
                
                <MainBody />
            </header>
        )
    }
}

export default Header
