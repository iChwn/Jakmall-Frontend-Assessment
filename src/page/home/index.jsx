/* eslint-disable no-useless-escape */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "assets/css/custom.scss"
import styled from "styled-components";
import { BackButton, Card, Col, DeliveryDetail, PaymentDetail, Row, Stepper, Summary } from "components";
import { useForm } from "react-hook-form";
import _ from "lodash";
import { formValidate } from "constant";

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

const HeaderWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
`

const WrapperContent = styled.div`
  flex: 1
`
const backLabel = ["Back to Cart", "Back to Delivery", "Go to Homepage"]
const stepList  = ["Delivery", "Payment", "Finish"]

const HomePage = () => {
  const [steps, setSteps] = useState(2)
  const [isDropShip, setIsDropShip] = useState(true)
  const [formToState, setFormToState] = useState([
    {
      placeholder: "Email",
      type: "email",
      value: "",
      name: "email",
      cols: 7,
      rules: formValidate.email,
      disabled: false
    },
    {
      placeholder: "Dropshipper name",
      type: "text",
      value: "",
      name: "dropshipperName",
      cols: 5,
      disabled: true
    },
    {
      placeholder: "Phone Number",
      type: "number",
      value: "",
      name: "phoneNumber",
      cols: 7,
      rules: formValidate.phoneNumber,
      disabled: false
    },
    {
      placeholder: "Dropship phone number",
      type: "number",
      value: "",
      name: "dropshipPhoneNumber",
      cols: 5,
      disabled: true
    },
    {
      placeholder: "Delivery Address",
      type: "textarea",
      value: "",
      name: "deliveryAddress",
      cols: 7,
      rules: formValidate.address,
      disabled: false
    },
  ])
  const [shipmentList, setShipmentList] = useState([
    {
      id: 1,
      label: "GO-SEND",
      value: 15000,
      estimation: "today",
      isChecked: true
    },
    {
      id: 2,
      label: "JNE",
      value: 9000,
      estimation: "2 days",
      isChecked: false
    },
    {
      id: 3,
      label: "Personal Courier",
      estimation: "1 day",
      value: 29000,
      isChecked: false
    }
  ])
  const [paymentList, setPaymentList] = useState([
    {
      id: 1,
      label: "E-Wallet",
      value: 1500000,
      isChecked: true
    },
    {
      id: 2,
      label: "Bank Transfer",
      isChecked: false
    },
    {
      id: 3,
      label: "Virtual Account",
      isChecked: false
    }
  ])
  const { register, handleSubmit, formState: { errors }, getValues, unregister, reset } = useForm();

  useEffect(() => {
    let cloneData = _.cloneDeep(formToState)

    if(isDropShip) {
      register("dropshipperName", formValidate.important)
      register("dropshipPhoneNumber", formValidate.phoneNumber)
      cloneData[1].disabled = false
      cloneData[3].disabled = false
    } else {
      unregister(["dropshipperName", "dropshipPhoneNumber"])
      reset({dropshipperName: "", dropshipPhoneNumber: ""})
      cloneData[1].disabled = true
      cloneData[3].disabled = true
    }

    setFormToState(cloneData)
  }, [isDropShip])

  const onSubmit = (data) => {
    console.log(data);
    setSteps(2)
  };

  const handleBack = () => {
    if(steps === 2) {
      setSteps(1)
    } else if(steps === 3) {
      setSteps(2)
    }
  }

  const handleChangeList = (type, id) => {
    let cloneData = []
    if(type === "shipment") {
      cloneData = _.cloneDeep(shipmentList).map((shipment) => ({
        ...shipment,
        isChecked: false
      }))

      let filteredForm = _.filter(cloneData, (data) => data.id === id)[0]
      filteredForm.isChecked = true

      setShipmentList(cloneData)
    } else {
      cloneData = _.cloneDeep(paymentList).map((payment) => ({
        ...payment,
        isChecked: false
      }))

      let filteredForm = _.filter(cloneData, (data) => data.id === id)[0]
      filteredForm.isChecked = true

      setPaymentList(cloneData)
    }
  }
 
  console.log(errors)
  const selectedShipment = shipmentList.find(shipment => shipment.isChecked === true)
  const selectedPayment = paymentList.find(shipment => shipment.isChecked === true)

  return (
    <Container>
      <Card>
        <HeaderWrapper>
          <Stepper stepList={stepList} currentStep={steps}/>
        </HeaderWrapper>
        <BackButton onClick={handleBack} title={backLabel[steps-1]} style={{paddingLeft: 30}}/>
        <WrapperContent>
          <Col style={{height: "100%", padding: 15}}>
            <Row cols={8} style={{padding: "20px", paddingTop: 0}}>
              {steps === 1 && (
                <DeliveryDetail 
                  dropShip={isDropShip} 
                  changeDropship={setIsDropShip}
                  formData={formToState}
                  register={register}
                  errors={errors}
                  handleSubmit={handleSubmit(onSubmit)}
                  getValues={getValues}
                />
              )}
              {steps === 2 && (
                <PaymentDetail 
                  shipmentList={shipmentList}
                  paymentList={paymentList}
                  handleChange={handleChangeList}
                />
              )}
            </Row>
            <Row cols={4}>
              <Summary 
                isDropShip={isDropShip}
                handleFormSubmit={handleSubmit(onSubmit)} 
                handleChangeStep={() => setSteps(steps + 1)}
                selectedPayment={selectedPayment}
                selectedShipment={selectedShipment}
                currentStep={steps}
              />
            </Row>
          </Col>
        </WrapperContent>
      </Card>
    </Container>
  )
}

export default HomePage;