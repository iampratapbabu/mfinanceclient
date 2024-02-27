export const initialJobState = {
    jobCategories: [],
    ustate: "initial state"
};

export const jobReducer = (state, action) => {
    switch (action.type) {
        case "JOB_CATEGORIES_LOADED":
            return {
                ...state,
                jobCategories: action.payload,
            };
        default:
            return state;
    }
};