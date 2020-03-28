import React, { useEffect } from "react";
import { updateVillage } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";

const Smurfs = () => {
    const state = useSelector(state => state);
    console.log("NEW STATE", state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateVillage());
    }, []);


    return (
        <div className = "allsmurfs">
            {/* <button onClick = {() => dispatch(updateVillage())}>Update Village</button> */}
            {state.smurfs.map(smurf => (
                <div id = {smurf.id} className = "smurfdiv">
                <p>{smurf.name}</p>
                </div>
            ))}
        </div>
    )
}

export default Smurfs;