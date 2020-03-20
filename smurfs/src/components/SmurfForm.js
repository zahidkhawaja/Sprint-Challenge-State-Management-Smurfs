import React, { useState } from "react";
import axios from "axios";

const SmurfForm = () => {
    const [smurfData, setSmurfData] = useState({
        name: "",
        age: "",
        height: "",
        id: ""
    });

    const handleChanges = e => {
        setSmurfData({...smurfData, [e.target.name]: e.target.value });
    }

    const onSubmit = e => {
        e.preventDefault();
        axios.post("http://localhost:3333/smurfs", smurfData)
        .then(res => console.log("POST", res));
    }

    return (
        <div className = "addSmurfForm">
            <h2>Add a Smurf</h2>
            <form onSubmit = {onSubmit}>

                <div className = "namefield">
                <label htmlFor = "name">Name: </label>
                <input name = "name" type = "text" placeholder = "Name" value = {smurfData.name} onChange = {handleChanges} />
                </div>

                <div className = "agefield">
                <label htmlFor = "age">Age: </label>
                <input name = "age" type = "text" placeholder = "Age" value = {smurfData.age} onChange = {handleChanges} />
                </div>

                <div className = "heightfield">
                <label htmlFor = "height">Height: </label>
                <input name = "height" type = "text" placeholder = "Height" value = {smurfData.height} onChange = {handleChanges} />
                </div>

                <button type="submit">Add</button>

            </form>
        </div>
    )
}

export default SmurfForm;