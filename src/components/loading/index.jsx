import React from "react";
import styled from "styled-components";
import { colors } from "constant";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.orange};
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoadingText = styled.div`
  font-size: 20px;
  color: ${colors.white};
  font-weight: bold;
`

const LoadingComponent = () => {
  return (
    <Wrapper>
      <LoadingText>Loading...</LoadingText>
    </Wrapper>
  )
}

export default LoadingComponent;