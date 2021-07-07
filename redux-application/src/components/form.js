import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions/actions";

const Form = (props) => {
  const handleGetData = (e) => {
    e.preventDefault();
    props.getData();
  };

  return (
    <div>
      {props.isFetchingData ? (
        <div>Fetching amiibos</div>
      ) : (
        <button onClick={handleGetData}>get amiibos</button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetchingData: state.isFetchingData,
  };
};

export default connect(mapStateToProps, { getData })(Form);
