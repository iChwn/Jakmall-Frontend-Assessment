import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
import { colors } from "constant";
import { IconList } from "assets/image";
import { convert3Digit } from "utility/helper/helper";
 
const BoxContainer = styled.button`
  padding: 5px 10px;
  width: 100%;
  height: 100%;
  border: 2px solid ${props => props.checked ? colors.green : colors.grayUltraLight};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.checked ? colors.greenLight : colors.white};
`

const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const CourierName = styled.span`
  color: ${props => props.checked ? colors.grayDark : colors.grayLight};
  font-size: 13px;
  text-align: left;
`

const CourierPrice = styled.span`
  color: ${props => props.checked ? colors.grayDark : colors.grayLight};
  font-weight: bold;
  font-size: 16px;
  text-align: left;
`

const ListItemCard = ({title, isChecked, price, onClick}) => { 
  return (
    <BoxContainer onClick={onClick} checked={isChecked}>
      <LabelContainer>
        <CourierName checked={isChecked}> {title} </CourierName>
        {price && (
          <CourierPrice checked={isChecked}> {convert3Digit(price)} {title === "E-Wallet" && "left"} </CourierPrice>
        )}
      </LabelContainer>
      {isChecked && (
        <img width="20" src={IconList.CheckIcon} alt="" />
      )}
    </BoxContainer>
  )
}

ListItemCard.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string, 
  isChecked: PropTypes.bool, 
  price: PropTypes.number, 
  onClick: PropTypes.func
};

ListItemCard.defaultProps = {
  children: <div />,
  title: "", 
  isChecked: "", 
  price: 0, 
  onClick: () => {}
};

export default ListItemCard;