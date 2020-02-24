import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/actions";
import "../App.css";
import styled from "styled-components";

const ImageContainer = styled.div``;

const Image = styled.img`
  height: 250px;
  width: 250px;
`;

const Name = styled.h4``;

const ImageBackground = styled.div`
  background-color: gray;
`;

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
          <ImageContainer>
            <ImageBackground>
              <Image src={amiibo.image} />
              <Name>{amiibo.character}</Name>
            </ImageBackground>
          </ImageContainer>
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
