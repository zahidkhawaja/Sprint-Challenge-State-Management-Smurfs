import React from "react";
import { updateVillage } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";

const Smurfs = () => {
    const state = useSelector(state => state);
    console.log("NEW STATE", state);
    const dispatch = useDispatch();
    return (
        <div className = "allsmurfs">
            <button onClick = {() => dispatch(updateVillage())}>Update Village</button>
            <h2>All Smurfs</h2>
            {state.smurfs.map(smurf => (
                <p>{smurf.name}</p>
            ))}
        </div>
    )
}

export default Smurfs;