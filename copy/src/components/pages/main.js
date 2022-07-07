import React, { useState, useEffect } from "react";
// styled components
import styled from "styled-components";

const Main = () => {
  return (
    <div style={{ padding: 20 }}>
      <CustomButton>클릭</CustomButton>
      <Box boxColor="white" width={200} height={200}>
        <div className="box-child">
          <div className="inner-box"></div>
        </div>
      </Box>
      <Box boxColor="blue" width={300} height={300}>
        <div className="box-child">
          <div className="inner-box"></div>
        </div>
      </Box>
    </div>
  );
};

// 특정 컴포넌트에서만 CSS를 적용하는 경우 사용한다.
const CustomButton = styled.a`
  border: 1px dashed #ccc;
  padding: 0 20px;
`;

const Box = styled.div`
  height: 500px;
  border: "1px solid #000";
  background: yellow;
  .box-child {
    border: "1px solid #000";
    background: red;
    height:  ${(props) => props.height}px;
    width:  ${(props) => props.width}px;
    .inner-box {
      width: ${(props) => props.width}px;
      height:  ${(props) => props.height}px;
      border 1px solid #000;
      background: ${(props) => props.boxColor};
    }
  }
`;

export default Main;
