import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/actions";
import "../App.css";

const AmiiboList = props => {
  //   useEffect(() => {
  //     props.getData();
  //   }, []);

  return (
    <div>
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        props.amiibo.map(amiibo => <div>{amiibo.image}</div>)
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    amiibo: state.amiibo
  };
};

export default connect(mapStateToProps, { getData })(AmiiboList);
