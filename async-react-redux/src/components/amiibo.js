import React from "react";

import { connect } from "react-redux";

const Amiibo = props => {
  return (
    <div>
      <div>{props.amiibo}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    amiibo: state.amiibo
  };
};

export default connect(mapStateToProps, {})(Amiibo);
