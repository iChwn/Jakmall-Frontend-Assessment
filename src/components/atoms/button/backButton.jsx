import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import { colors } from "constant";
import { IconList } from "assets/image";

const StyledButton = styled.button`
  color: ${colors.grayDark};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`

const BackButton = ({onClick, title, isDisabled, style}) => {
  return (
    <StyledButton disabled={isDisabled} onClick={onClick} style={style}>
      <img alt="" src={IconList.BackIcon} width="20" />
      <span>{title}</span>
    </StyledButton>
  )
}

BackButton.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
  isDisabled: PropTypes.bool,
};

BackButton.defaultProps = {
  onClick: () => {},
  title: "",
  isDisabled: false,
};

export default BackButton;