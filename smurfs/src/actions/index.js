import axios from "axios";

export const updateVillage = () => dispatch => {
    axios.get("http://localhost:3333/smurfs")
    .then(res => {
        console.log(res.data);
    })
    .catch(err => {
        console.log("GET error", error);
    })
};