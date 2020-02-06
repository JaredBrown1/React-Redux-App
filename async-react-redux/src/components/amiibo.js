import React from "react";

import { connect } from "react-redux";

import { getData } from "../actions/actions";

const AmiiboForm = props => {
  const handleGetData = e => {
    e.preventDefault();
    props.getData();
  };

  return (
    <div>
      {props.isFetchingData ? (
        <div>** We are fetching data **</div>
      ) : (
        <button onClick={handleGetData}>get data</button>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isFetchingData: state.isFetchingData
  };
};

export default connect(mapStateToProps, { getData })(AmiiboForm);
