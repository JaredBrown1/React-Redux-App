import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_AMIIBO = "UPDATE_AMIIBO";
export const SET_ERROR = "SET_ERROR";

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA });
  axios
    .get("https://www.amiiboapi.com/api/amiibo/")
    .then(res => {
      console.log("from .then", res);
      dispatch({ type: UPDATE_AMIIBO, payload: { amiibo: res.data.amiibo } });
    })
    .catch(err => {
      console.log("error fetching data from api. err: ", err);
      dispatch({ type: SET_ERROR, payload: "error fetching data from api" });
    });
};
