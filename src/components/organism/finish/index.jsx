import React from "react"
import "assets/css/custom.scss"
import styled from "styled-components"
import {
  BackButton,
	LabelTitle,
} from "components"
import { colors } from "constant"
import PropTypes from "prop-types"

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

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
      <ColumnWrapper>
        <LabelTitle label="Thank you" />
        <OrderId>Order ID: {orderId}</OrderId>
        <OrderInfo>Your Order will be delivered {selectedShipment.estimation} with {selectedShipment.label}</OrderInfo>
        <BackButton onClick={() => handleBack({isReset: true})} title={backLabel[steps-1]}/>
      </ColumnWrapper>
    </Wrapper>
	)
}

TransactionFinish.propTypes = {
  selectedShipment: PropTypes.object,
  handleBack: PropTypes.func,
  backLabel: PropTypes.string,
  steps: PropTypes.number,
  orderId: PropTypes.string,
};

TransactionFinish.defaultProps = {
  selectedShipment: {},
  handleBack: () => {},
  backLabel: "",
  steps: 1,
  orderId: "",
};

export default TransactionFinish
