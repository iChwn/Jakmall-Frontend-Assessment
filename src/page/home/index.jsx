import React, { useState } from "react";
import "assets/css/custom.scss"
import styled from "styled-components";
import { Col, DeliveryDetail, Row, Stepper, Summary } from "components";
import _ from "lodash";

const Container = styled.div`
  background-color: #FFFAE6;
  height: 100%;
  width: 100%;
  padding: 50px;
  padding-bottom: 100px;
  @media (max-width: 768px) {
    padding: 10px;
    padding-bottom: 10px;
  }
`;

const CardWrapper = styled.div`
  background: #FFFFFF;
  width: 100%;
  height: 100%;
  box-shadow:  -5px 10px 10px -7px rgba(0,0,0,0.1);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`

const HeaderWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
`

const WrapperContent = styled.div`
  flex: 1
`

const HomePage = () => {
  const [isDropShip, setIsDropShip] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [formToState, setFormToState] = useState([
    {
      placeholder: "Email",
      type: "email",
      value: "",
      name: "email",
      error: "",
      cols: 7
    },
    {
      placeholder: "Dropshipper name",
      type: "text",
      value: "",
      name: "dropshipper-name",
      error: "",
      cols: 5
    },
    {
      placeholder: "Phone Number",
      type: "number",
      value: "",
      name: "number",
      error: "",
      cols: 7
    },
    {
      placeholder: "Dropship phone number",
      type: "number",
      value: "",
      name: "dropship-phone-number",
      error: "",
      cols: 5
    },
    {
      placeholder: "Delivery Address",
      type: "textarea",
      value: "",
      name: "delivery-address",
      error: "",
      cols: 7
    },
  ])

  const handleOnChange = (event) => {
    const targetType = event.target.type
    switch (targetType) {
      case "text":
      case "number":
      case "email":
        handleChangeField(event)
        break;
      case "textarea":
        console.log(event)
        break;    
      default:
        break;
    }
  }

  const handleChangeField = (event) => {
    const cloneForms = _.cloneDeep(formToState)
    const eventName = event.target.name
    const eventValue = event.target.value
    let filteredForm = _.filter(cloneForms, (data) => data.name === eventName)[0]
    filteredForm.value = eventValue
      
    setFormToState(cloneForms)
  }

  return (
    <Container>
      <CardWrapper>
        <HeaderWrapper>
          <Stepper />
        </HeaderWrapper>
        <WrapperContent>
          <Col style={{height: "100%", padding: 15}}>
            <Row cols={8} style={{padding: "20px", paddingTop: 0}}>
              <DeliveryDetail 
                dropShip={isDropShip} 
                changeDropship={setIsDropShip}
                formData={formToState}
                onChangeInput={handleOnChange} 
              />
            </Row>
            <Row cols={4}>
              <Summary />
            </Row>
          </Col>
        </WrapperContent>
      </CardWrapper>
    </Container>
  )
}

export default HomePage;