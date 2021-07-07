import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions/actions";
import styled from "styled-components";

const Image = styled.img`
  background-color: white;
  border-radius: 50px;
  height: 300px;
`;

const List = (props) => {
  return (
    <div>
      {props.error ? (
        <div>{props.error}</div>
      ) : (
        props.amiibo.map((amiibo) => (
          <div>
            <Image src={amiibo.image} />
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
