import React from "react"
import PropTypes from 'prop-types';
import { IconList } from "assets/image";
import styled from "styled-components";
import { colors } from "constant";

const CheckboxButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`

const CheckWrapper = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid ${props => props.check ? colors.green : colors.grayUltraLight};
  display: flex;
  justify-content: center;
  align-items: center;
`

const CheckLabel = styled.label`
  font-size: 14px;
  color: ${colors.grayDark}
`

const Checkbox = ({label, isChecked, onChange, style}) => {
  return (
    <CheckboxButton onClick={onChange} style={style} type="button">
      <CheckWrapper check={isChecked}>
        {isChecked && (
          <img 
            style={{width: 20, height: 20}}
            src={IconList.CheckIcon} alt="" />
        )}
      </CheckWrapper>
      <CheckLabel>{label}</CheckLabel>
    </CheckboxButton>
  )
}

Checkbox.propTypes = {
  label: PropTypes.string,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  label: "",
  isChecked: false,
  onChange: () => {},
};

export default Checkbox;