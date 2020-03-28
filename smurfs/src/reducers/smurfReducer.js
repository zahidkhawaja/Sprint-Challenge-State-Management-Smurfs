const initialState = {
    smurfs: []
};

export const smurfReducer = (state = initialState, action) => {
    console.log("INITIAL STATE", state);
    switch(action.type) {
        case "UPDATE_VILLAGE":
            return {
                ...state,
                smurfs: action.payload.reverse()
            };
        default:
            return state;
    };
};