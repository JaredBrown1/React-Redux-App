import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions/actions";

const List = (props) => {
  return (
    <div>
      {props.error ? (
        <div>{props.error}</div>
      ) : (
        props.amiibo.map((amiibo) => (
          <div>
            <img src={amiibo.image} />
            <h3>{amiibo.name}</h3>
          </div>
        ))
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    amiibo: state.amiibo,
  };
};

export default connect(mapStateToProps, { getData })(List);
