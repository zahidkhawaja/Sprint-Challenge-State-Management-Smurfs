const initialState = {
    smurfs: []
};

export const smurfReducer = (state = initialState, action) => {
    switch(action.type) {
        case "UPDATE_VILLAGE":
            return {
                ...state,
                smurfs: action.payload
            };
        default:
            return state;
    }
};