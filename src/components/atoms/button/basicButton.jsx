import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import { colors } from "constant";

const StyledButton = styled.button`
  background-color: ${colors.orange};
  color: ${colors.white};
  padding: 20px 0px;
  font-size: 18px;
  :hover {
    background-color: ${colors.orangeBlur};
  }
`

const BaseButton = ({onClick, title, isDisabled}) => {
  return (
    <StyledButton disabled={isDisabled} onClick={onClick}>
      {title}
    </StyledButton>
  )
}

BaseButton.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
  isDisabled: PropTypes.bool,
};

BaseButton.defaultProps = {
  onClick: () => {},
  title: "",
  isDisabled: false,
};

export default BaseButton;