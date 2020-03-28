import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateVillage } from "../actions/index";

const SmurfForm = () => {
    const dispatch = useDispatch();
    const [status, setStatus] = useState(false);
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
        .then(setStatus(!status))
        .then(res => console.log("POST", res));
    }

    useEffect(() => {
        dispatch(updateVillage());
    }, [status]);

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