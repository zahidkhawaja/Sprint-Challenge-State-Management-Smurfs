import React, { useState } from "react";

const SmurfForm = () => {
    const [smurfData, setSmurfData] = useState({
        name: "",
        age: "",
        height: "",
        id: ""
    });

    return (
        <div className = "addSmurfForm">
            <h2>Add a Smurf</h2>
            <form>

                <div className = "namefield">
                <label htmlFor = "name">Name: </label>
                <input name = "name" type = "text" placeholder = "Name" value = {smurfData.name} />
                </div>

                <div className = "agefield">
                <label htmlFor = "age">Age: </label>
                <input name = "age" type = "text" placeholder = "Age" value = {smurfData.age} />
                </div>

                <div className = "heightfield">
                <label htmlFor = "height">Height: </label>
                <input name = "height" type = "text" placeholder = "Height" value = {smurfData.height} />
                </div>

                <button type="submit">Add</button>

            </form>
        </div>
    )
}

export default SmurfForm;