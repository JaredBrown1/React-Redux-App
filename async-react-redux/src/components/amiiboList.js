import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions/actions";
import amiibo from "./amiibo";

const AmiiboList = props => {
  return (
    <div>
      {props.amiibo.map(amiibo => (
        <div>{amiibo.image}</div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    amiibo: state.amiibo
  };
};

export default connect(mapStateToProps, { getData })(AmiiboList);
