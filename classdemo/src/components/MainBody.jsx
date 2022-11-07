// create a functional component with hooks
import React, { useState } from 'react';

function MainBody(){
    const [name, setName] = useState('')

    function handleChange(e){
        setName(e.target.value);
    }

    return(
        <div>
            <h2> About</h2>
                <p>
                    I'm a IT student intern currently working with the Bureau of Engraving and Printing.
                    <br></br>
                    I am currently completing coursework at CSU and i have 3 years of experience in IT.
                    <br></br>
                    I have an interest in building web applications, software and computer installations and upgrades.
                 
                 {/*I'm a IT student intern currently working with the Bureau of Engraving and Printing.
                 <br></br>I am currently completing coursework at CSU and i have 3 years of experience in IT.<br></br>
        I have an interest in building web applications, software and computer installations and upgrades.*/}
        
                </p>
               
                <h3>Work</h3>
                <p> 
                 Information Technology Student Intern
                
                </p>
                
                <h4>Design</h4>
                {/*<img src="Design1.png" alt="Design"/>*/}
                

                

                {/*<button onClick={() => this.setState({ count : this.state.count +1})}>
                    Increment Count
        </button>*/}
        
            <h3> Your name is: <i>{name}</i></h3>
            <input type="text" value={name} onChange={handleChange} />
        </div>
    )
}

export default MainBody