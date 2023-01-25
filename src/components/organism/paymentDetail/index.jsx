import React from 'react'
import 'assets/css/custom.scss'
import styled from 'styled-components'
import {
  Col,
	LabelTitle,
	ListItemCard,
  Row,
} from 'components'

const Wrapper = styled.div``
const TitleHeader = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 20px;
	align-items: center;
	@media (max-width: 768px) {
		flex-direction: column;
		align-items: start;
		gap: 10px;
	}
`

const SectionContent = styled.div`
  margin-bottom: ${props => props.marginBottom}px;
`

const PaymentDetail = ({
	shipmentList,
	paymentList,
  handleChange,
}) => {
	return (
		<Wrapper>
      <SectionContent marginBottom={60}>
        <TitleHeader>
          <LabelTitle label="Shipment" />
        </TitleHeader>
        <Col>
          {shipmentList.map((result, index) => {
            return (
              <Row cols={3} key={`shipment-${index}`}>
                <ListItemCard 
                  onClick={() => handleChange("shipment", result.id)}
                  title={result.label} 
                  price={result.value} 
                  isChecked={result.isChecked} 
                />
              </Row>
            )
          })}
        </Col>
      </SectionContent>
      <SectionContent marginBottom={0}>
        <TitleHeader>
          <LabelTitle label="Payment" />
        </TitleHeader>
        <Col>
          {paymentList.map((result, index) => {
            return (
              <Row cols={3} key={`payment-${index}`}>
                <ListItemCard 
                  onClick={() => handleChange("payment", result.id)}
                  title={result.label} 
                  price={result.value}
                  isChecked={result.isChecked} 
                />
              </Row>
            )
          })}
        </Col>
      </SectionContent>
		</Wrapper>
	)
}

export default PaymentDetail
