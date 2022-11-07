// create a functional component with hooks
import React, { useState } from 'react';
//import Design from '/images/Design1.png';

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
                 
                </p>
               
                <h3>Work</h3>
                <p> 
                 Information Technology Student Intern
                
                </p>
                
                <h4>Design</h4>
                <img src={require('../images/Design1.png')} width={550} height={450} alt="design" />
                <img src={require('../images/Design2.png')} width={550} height={450} alt="design" />

        
            
        </div>
    )
}

export default MainBody