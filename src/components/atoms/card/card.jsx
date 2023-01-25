import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
 
const CardContainer = styled.div`
  background: #FFFFFF;
  width: 100%;
  height: 100%;
  box-shadow:  -5px 10px 10px -7px rgba(0,0,0,0.1);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`

const Card = ({children}) => { 
  return (
    <CardContainer>
      {children}
    </CardContainer>
  )
}

Card.propTypes = {
  children: PropTypes.node,
};

Card.defaultProps = {
  children: <div />,
};

export default Card;