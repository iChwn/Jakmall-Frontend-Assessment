/* eslint-disable no-unused-vars */
import { IconList } from 'assets/image'
import { colors } from 'constant'
import React, { useState } from 'react'
import styled from 'styled-components'

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
`

const StepWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
	margin-top: -30px;
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
								{' '}
								<img src={IconList.CheveronRight} alt='' width={20} />{' '}
							</StepLabel>
						)}
					</StepWrapper>
				)
			})}
		</StepperWrapper>
	)
}

export default Stepper
