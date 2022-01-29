import React from 'react';


function Keypad(e) {

    function handleChange(e) {
        console.log("Entering password...")
    }


    return (
        <input type="password" onChange={handleChange}></input>
    )
}


export default Keypad