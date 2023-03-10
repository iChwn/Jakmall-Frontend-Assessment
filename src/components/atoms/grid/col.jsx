import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

const Column = styled.div`
  width: 100%;
  display: grid;
  gap: 1rem;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(12, 1fr);
  @media screen and (max-width: 575px) {
    display: block;
  }
`

const Col = ({children, style, className}) => {
  return (
    <Column style={style} className={className}>
      {children}
    </Column>
  )
}


Col.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

Col.defaultProps = {
  children: <div/>,
  className: ""
};


export default Col;