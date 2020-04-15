import { FETCH_DATA, UPDATE_AMIIBO, SET_ERROR } from "../actions/actions";

const initialState = {
  amiibo: [],
  isFetchingData: false,
  error: "",
};

export const amiiboReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isFetchingData: true,
        amiibo: [],
      };
    case UPDATE_AMIIBO:
      return {
        ...state,
        amiibo: action.payload.amiibo,
        isFetchingData: false,
      };
    case SET_ERROR:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
