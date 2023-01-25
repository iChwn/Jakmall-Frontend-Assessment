import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import { colors } from "constant";

const LabelWrapper = styled.div`
  position: relative;
`

const H3Label = styled.span`
  font-size: 36px;
  color: ${colors.orange};
  font-weight: bold;
  z-index: 1;
  position: relative;
`

const Bordered = styled.div`
  height: 5px;
  background-color: ${colors.grayWhite};
  width: 103%;
  position: absolute;
  bottom: 10px;
  z-index: 0;
`

const LabelTitle = ({onClick, label, isDisabled}) => {
  return (
    <LabelWrapper disabled={isDisabled} onClick={onClick}>
      <H3Label>{label}</H3Label>
      <Bordered />
    </LabelWrapper>
  )
}

LabelTitle.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  isDisabled: PropTypes.bool,
};

LabelTitle.defaultProps = {
  onClick: () => {},
  label: "",
  isDisabled: false,
};

export default LabelTitle;