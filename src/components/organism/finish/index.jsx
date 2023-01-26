import React from 'react'
import 'assets/css/custom.scss'
import styled from 'styled-components'
import {
  BackButton,
	LabelTitle,
} from 'components'
import { colors } from 'constant'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-bottom: 20px;
	align-items: center;
  height: 100%;
	@media (max-width: 768px) {
		flex-direction: column;
		align-items: start;
		gap: 10px;
	}
`

const OrderInfo = styled.span`
  color: ${colors.grayDark};
  font-size: 14px;
  margin-bottom: 40px;
`

const OrderId = styled.span`
  color: ${colors.grayLight};
  font-size: 14px;
  margin-top: 20px;
  margin-bottom: 10px;
`
 
const TransactionFinish = ({
	selectedShipment,
  handleBack,
  backLabel,
  steps,
  orderId
}) => {
	return (
		<Wrapper>
      <div style={{display: "flex", flexDirection: "column"}}>
        <LabelTitle label="Thank you" />
        <OrderId>Order ID: {orderId}</OrderId>
        <OrderInfo>Your Order will be delivered {selectedShipment.estimation} with {selectedShipment.label}</OrderInfo>
        <BackButton onClick={() => handleBack("reset")} title={backLabel[steps-1]}/>
      </div>
    </Wrapper>
	)
}

export default TransactionFinish
