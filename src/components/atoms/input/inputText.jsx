import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "constant";
import { IconList } from "assets/image";

const InputContainer = styled.div`
  position: relative;
  border-radius: 4px;
  height: 56px;
  transition: background-color 500ms;
  :focus-within {
    background-color: #f5f5f5;
  }
  display: flex;
  border: 1px solid ${props => {
    const {isError, errorObj} = props
    return !isError ? colors.grayUltraLight : errorObj ? colors.orange : colors.green
  }};
  padding-right: 10px;
  background-color: ${props => props.disabled ? colors.grayUltraLight : colors.white};
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
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

const InputLabel = styled.label`
  font-size: 16px;
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 16px;
  color: ${props => {
    const {isError, errorObj} = props
    return !isError ? colors.grayLight : errorObj ? colors.orange : colors.green
  }};
  transform-origin: left top;
  user-select: none;
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1), top 500ms;
  z-index: 0;
`

const InputIcon = styled.img`
  width: 20px;
`

const TextInput = React.forwardRef(({value, getValues, name, type, placeholder, disabled, error, ...rest}, ref) => {
  const isError = (getValues(name) || error !== undefined)

  return (
    <InputContainer disabled={disabled} isError={isError} errorObj={error}>
      <Input 
        ref={ref}
        type={type}
        name={name} 
        autoComplete="off"
        disabled={disabled}
        placeholder={placeholder}
        {...rest}
      />
      <InputLabel isError={isError} errorObj={error}>{placeholder}</InputLabel>
      {isError && (<InputIcon src={error ? IconList.CloseIcon : IconList.CheckIcon} alt=""/>)}
    </InputContainer>
  )
})

TextInput.propTypes = {
  data: PropTypes.object,
  value: PropTypes.string
};

TextInput.defaultProps = {
  placeholder: "",
  type: "",
  value: "",
  disabled: false
};

export default TextInput;