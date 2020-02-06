import { FETCH_DATA, UPDATE_AMIIBO } from "../actions/actions";

const initialState = {
  amiibo: [],
  isFetchingData: false
};

export const amiiboReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isFetchingData: true,
        amiibo: []
      };
    case UPDATE_AMIIBO:
      return {
        ...state,
        amiibo: action.payload
      };
    default:
      return state;
  }
};
