import { createStore } from "redux";
import mainReducer from "../reducers";


export const intialSate = {
    favCompany:{
        company:[],
    },

    user:{
        firstname:"",
    },
}

const configureStore = createStore (
    mainReducer,
    intialSate,
    process.env.REACT_APP_DEVELOPMENT && window._REDUX_DEVTOOLS_EXTENSION_()
)

export default configureStore