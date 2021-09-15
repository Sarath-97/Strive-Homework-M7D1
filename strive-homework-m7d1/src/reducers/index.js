import { intialSate } from "../store"

const mainReducer = (state = intialSate, action) => {

    switch (action.type) {
       case 'ADD_FAV_COMPANY':
        return {
            ...state,
            favCompany: {
                ...state.favCompany,
                company:[...state.favCompany, action.payload],
            },
        }
        
      default:
          return state
    }
  }
  export default mainReducer