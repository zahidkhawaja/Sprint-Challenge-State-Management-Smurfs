import axios from "axios";

export const updateVillage = () => dispatch => {
    axios.get("http://localhost:3333/smurfs")
    .then(res => {
        console.log("GET data", res.data);
        dispatch( { type: "UPDATE_VILLAGE", payload: res.data })
    })
    .catch(err => {
        console.log("GET error", err);
    })
};