import React, { Component } from "react";
import MainBody from "./MainBody";

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
                <p className={"testing-this" + this.state.theme}>
                    About I'm a IT student intern currently working with the Bureau of Engraving and Printing. I have 3 years of experience in IT.
                </p>
                <a className="App-link" href={linkUrl} target="_blank" rel="noopener noreferrer" >
                    {linkText}
                </a>
                <span>
                    You have clicked on the button {this.state.count} times!
                </span>
                <button role="button" onClick={() => this.setState({ count : this.state.count +1})}>
                    Increment Count
                </button>
                <MainBody />
            </header>
        )
    }
}

export default Header