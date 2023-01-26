import { IconList } from "assets/image"
import { colors } from "constant"
import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const StepperWrapper = styled.div`
	padding: 0px 30px;
	height: 40px;
	background-color: #fffae6;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	border-bottom-left-radius: 100px;
	border-bottom-right-radius: 100px;
	gap: 5px;
	@media (max-width: 768px) {
		padding: 0 0;
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
		background-color: ${colors.white};
	}
`

const StepWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 2px;
	margin-top: -30px;
	@media (max-width: 768px) {
		margin-top: 0px;	
	}
`

const RoundNumber = styled.div`
	width: 30px;
	height: 30px;
	background-color: ${(props) =>
		props.isActive ? colors.orange : colors.orangeBlur};
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	color: #ffffff;
	@media (max-width: 768px) {
		width: 20px;
		height: 20px;
		font-size: 12px;
	}
`

const StepLabel = styled.div`
	color: ${colors.orange};
`

const Stepper = ({stepList, currentStep}) => {
	return (
		<StepperWrapper>
			{stepList.map((result, index) => {
				return (
					<StepWrapper key={`step-index-${index}`}>
						<RoundNumber isActive={currentStep > index}>{index + 1}</RoundNumber>
						<StepLabel>{result}</StepLabel>
						{index + 1 !== stepList.length && (
							<StepLabel style={{ marginLeft: 10, marginRight: 10 }}>
								{" "}
								<img src={IconList.CheveronRight} alt="" width={20} />{" "}
							</StepLabel>
						)}
					</StepWrapper>
				)
			})}
		</StepperWrapper>
	)
}

Stepper.propTypes = {
	stepList: PropTypes.array,
	currentStep: PropTypes.number,
}

Stepper.defaultProps = {
	stepList: [],
	currentStep: 1,
}

export default Stepper
