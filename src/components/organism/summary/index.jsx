import BaseButton from "components/atoms/button/basicButton"
import Row from "components/atoms/grid/row"
import { colors } from "constant"
import React from "react"
import styled from "styled-components"
import { convert3Digit } from "utility/helper/helper"

const SectionWrapper = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	border-left: 1px solid ${colors.orangeBlur};
	padding-left: 20px;
`

const H3Label = styled.h3`
	color: ${colors.orange};
	font-size: 24px;
	font-weight: bold;
`

const LabelLight = styled.span`
	font-size: 14px;
	color: ${colors.grayLight};
`

const LabelNormal = styled.span`
	font-size: 14px;
	color: ${colors.black};
`

const LabelMedium = styled.span`
	font-size: 14px;
	color: ${colors.green};
	font-weight: 600;
`

const LabelStrong = styled.span`
	font-size: 14px;
	color: ${colors.black};
	font-weight: bold;
`

const WrapperSpaceBetween = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`

const Section = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
  flex: ${props => props.flex1 ? "1" : "0"}
`

const Boundaries = styled.div`
	width: 31%;
	height: 1px;
	background-color: ${colors.grayUltraLight};
	position: absolute;
	top: -10px;
`

const Summary = ({ 
  isDropShip,
  handleFormSubmit, 
  handleChangeStep, 
  currentStep, 
  selectedPayment, 
  selectedShipment,
  itemPrice,
  dropshipPrice,
  calculatePrice
}) => {
	return (
		<SectionWrapper>
			<Section flex1={true}>
				<Row cols={12}>
					<H3Label>Summary</H3Label>
					<LabelLight>10 items purchased</LabelLight>
				</Row>
        {currentStep >= 2 && (
          <Row cols={12} style={{ marginTop: 20, position: "relative" }}>
            <Boundaries />
            <LabelNormal>Delivery estimation</LabelNormal> <br />
            <LabelMedium>{selectedShipment.estimation} by {selectedShipment.label}</LabelMedium>
          </Row>
        )}
        {currentStep >= 3 && (
          <Row cols={12} style={{ marginTop: 20, position: "relative" }}>
            <Boundaries />
            <LabelNormal>Payment method</LabelNormal> <br />
            <LabelMedium>{selectedPayment.label}</LabelMedium>
          </Row>
        )}
			</Section>
			<Section>
				<WrapperSpaceBetween>
					<LabelLight>10 items purchased</LabelLight>
					<LabelStrong>{convert3Digit(itemPrice)}</LabelStrong>
				</WrapperSpaceBetween>
        {isDropShip && (
          <WrapperSpaceBetween>
            <LabelLight>Dropshipping Fee</LabelLight>
            <LabelStrong>{convert3Digit(dropshipPrice)}</LabelStrong>
          </WrapperSpaceBetween>
        )}
        {currentStep >= 2 && (
          <WrapperSpaceBetween>
            <LabelLight><strong>{selectedShipment.label}</strong> Shipment</LabelLight>
            <LabelStrong>{convert3Digit(selectedShipment.value)}</LabelStrong>
          </WrapperSpaceBetween>
        )}
				<WrapperSpaceBetween style={{ margin: "20px 0px" }}>
					<H3Label>Total</H3Label>
					<H3Label>{convert3Digit(calculatePrice())}</H3Label>
				</WrapperSpaceBetween>
				{currentStep === 1 && (
					<BaseButton onClick={handleFormSubmit} title="Continue to Payment" />
				)}
				{currentStep === 2 && (
					<BaseButton onClick={handleChangeStep} title={`Pay with ${selectedPayment.label}`} />
				)}
			</Section>
		</SectionWrapper>
	)
}

export default Summary
