import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_AMIIBO = "UPDATE_AMIIBO";

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA });
  axios
    .get("https://www.amiiboapi.com/api/amiibo/")
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log("error fetching data from api. err: ", err);
    });
};
