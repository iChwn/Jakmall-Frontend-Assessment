import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import { colors } from "constant";

const StyledLabel = styled.span`
  color: ${colors.orange};
  font-size: 12px;
`

const ErrorLabel = ({title}) => {
  return (
    <StyledLabel>
      {title}
    </StyledLabel>
  )
}

ErrorLabel.propTypes = {
  title: PropTypes.string,
};

ErrorLabel.defaultProps = {
  title: "",
};

export default ErrorLabel;