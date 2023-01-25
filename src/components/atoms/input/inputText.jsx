import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "constant";
import { IconList } from "assets/image";

const InputContainer = styled.div`
  position: relative;
  border-radius: 4px 4px 0 0;
  height: 56px;
  transition: background-color 500ms;
  :focus-within {
    background-color: #f5f5f5;
  }
  display: flex;
  border: 1px solid ${colors.grayUltraLight};
  padding-right: 10px;
`

const Input = styled.input`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: transparent;
  caret-color: red;
  color: rgba(0, 0, 0, 0.87);
  transition: border 500ms;
  padding: 20px 6px 6px 16px;
  font-size: 1rem;
  z-index: 1;
  :focus {
    outline: none;
  }
  :focus + label {
    color: red;
  }
  :focus + label,
  input + label {
    transform: translateY(-100%) scale(0.75);
  }
  ::placeholder {
    color: transparent;
  }
  :not(:placeholder-shown) + label {
    transform: translateY(-100%) scale(0.75);
  }
`

const InputLabel = styled.label`
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 16px;
  color: rgba(0, 0, 0, 0.5);
  transform-origin: left top;
  user-select: none;
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1), top 500ms;
  z-index: 0;
`

const InputIcon = styled.img`
  width: 20px;
`

const TextInput = ({value, name, type, placeholder, onChange, disabled}) => {
  return (
    <InputContainer>
      <Input 
        type={type}
        name={name ? name : ""} 
        autoComplete="off"
        onChange={onChange} 
        value={`${value}`}
        disabled={disabled}
        required
        placeholder={placeholder}
      />
      <InputLabel>{placeholder}</InputLabel>
      <InputIcon src={IconList.CheckIcon} alt=""/>
    </InputContainer>
  )
}

TextInput.propTypes = {
  data: PropTypes.object,
  value: PropTypes.string
};

TextInput.defaultProps = {
  title: "",
  placeholder: "",
  type: "",
  onChange: () => {},
  value: "",
  disabled: false
};

export default TextInput;