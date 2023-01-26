import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { colors } from "constant"
import { IconList } from "assets/image"
import { handdleValidateFieldStyle } from "utility/helper/helper"
import ErrorLabel from "../label/errorLabel"

const InputContainer = styled.div`
	position: relative;
	border-radius: 4px;
	height: 56px;
	transition: background-color 500ms;
	:focus-within {
		background-color: #f5f5f5;
	}
	display: flex;
	border: 1px solid ${(props) => handdleValidateFieldStyle(props)};
	padding-right: 10px;
	background-color: ${(props) =>
		props.disabled ? colors.grayUltraLight : colors.white};
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
	color: ${(props) => handdleValidateFieldStyle(props)};
	transform-origin: left top;
	user-select: none;
	transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1),
		color 150ms cubic-bezier(0.4, 0, 0.2, 1), top 500ms;
	z-index: 0;
`

const InputIcon = styled.img`
	width: 20px;
`

const TextInput = React.forwardRef(
	(
		{
			value,
			getValues,
			name,
			type,
			placeholder,
			disabled,
			error,
			onChange,
			onBlur
		},
		ref
	) => {
		const isError = error !== undefined
    const hasValue = getValues(name)

		return (
			<div>
				<InputContainer disabled={disabled} isError={isError} hasValue={hasValue}>
					<Input
						ref={ref}
						type={type}
						name={name}
						autoComplete="off"
						disabled={disabled}
						placeholder={placeholder}
						onChange={onChange}
						onBlur={onBlur}
						value={value}
					/>
					<InputLabel isError={isError} hasValue={hasValue}>
						{placeholder}
					</InputLabel>
					{isError && (
						<InputIcon src={IconList.CloseIcon} alt=""/>
					)}
					{(!isError && hasValue) && (
						<InputIcon src={IconList.CheckIcon} alt=""/>
					)}
				</InputContainer>
				{error !== undefined && <ErrorLabel title={error.message}/>}
				
			</div>
		)
	}
)

TextInput.propTypes = {
	data: PropTypes.object,
	value: PropTypes.string,
}

TextInput.defaultProps = {
	placeholder: "",
	type: "",
	value: "",
	disabled: false,
}

export default TextInput
