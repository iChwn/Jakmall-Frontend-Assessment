import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

const Rows = styled.div`
  color: white;
  grid-column: span ${props => props.cols};
  @media screen and (max-width: 575px) {
    margin: 10px 0;
  }
`

const Row = ({children, cols, style}) => {
  return (
    <Rows cols={cols} style={style}>
      {children}
    </Rows>
  )
}

Rows.propTypes = {
  cols: PropTypes.number,
  children: PropTypes.node
};

Rows.defaultProps = {
  cols: 2
};

export default Row;