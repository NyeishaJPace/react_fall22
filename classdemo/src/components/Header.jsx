import React, { Component } from "react";
import MainBody from "./MainBody";
import Design1 from '/images/Design1.png';

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
                <h1>About</h1>
                <p> 
                 I'm a IT student intern currently working with the Bureau of Engraving and Printing.
                 <br></br>I am currently completing coursework at CSU and i have 3 years of experience in IT.
                
                </p>
                <a className="App-link" href={linkUrl} target="_blank" rel="noopener noreferrer" >
                    {linkText}
                </a>
                <h2>Work</h2>
                <p> 
                 Information Technology Student Intern
                
                </p>
                
                <h3>Design</h3>
                <img src="Design1.png" alt="Design"/>
                

                

                {/*<button onClick={() => this.setState({ count : this.state.count +1})}>
                    Increment Count
        </button>*/}
                <MainBody />
            </header>
        )
    }
}

export default Header
