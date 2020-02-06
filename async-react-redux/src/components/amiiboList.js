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
      {console.log(props)}
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        props.amiibo.map(amiibo => (
          <img className="images" src={amiibo.image} />
        ))
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
