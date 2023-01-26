/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "assets/css/custom.scss"
import styled from "styled-components";
import { BackButton, Card, Col, DeliveryDetail, PaymentDetail, Row, Stepper, Summary, TransactionFinish } from "components";
import { useForm } from "react-hook-form";
import _ from "lodash";
import { formValidate } from "constant";
import { useDispatch, useSelector } from "react-redux";
import { checkoutSelectorState } from "module/checkout/selector";
import store from "integration/store";
import { persistStore } from 'redux-persist';
import { directChangeForm, handleChangeAction, setDeliveryDetail } from "module/checkout/action";


const Container = styled.div`
  background-color: #FFFAE6;
  height: 100%;
  width: 100%;
  padding: 50px;
  padding-bottom: 100px;
  @media (max-width: 768px) {
    padding: 10px;
    padding-bottom: 10px;
    height: auto;
  }
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
`

const WrapperContent = styled.div`
  flex: 1;
  // margin: 0 auto;
  // max-width: 1600px;
`

const CustomCol = styled(Col)`
  height: 100%;
  padding: 15px;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const backLabel = ["Back to Cart", "Back to Delivery", "Go to Homepage"]
const stepList  = ["Delivery", "Payment", "Finish"]
const itemPrice = 500000;
const dropshipPrice = 5900;

const HomePage = () => {
  const dispatch = useDispatch()
  const checkoutSelector = useSelector(checkoutSelectorState)

  const [steps, setSteps] = useState(checkoutSelector.currentStep)
  const [isDropShip, setIsDropShip] = useState(checkoutSelector.isDropShip)
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
  
  const { register, handleSubmit, formState: { errors }, getValues, setValue, unregister, control } = useForm({mode: "onChange"});

  useEffect(() => {
    let cloneData = _.cloneDeep(formToState)

    if(isDropShip) {
      register("dropshipperName", formValidate.important)
      register("dropshipPhoneNumber", formValidate.phoneNumber)

      cloneData[1].disabled = false
      cloneData[3].disabled = false
    } else {
      unregister(["dropshipperName", "dropshipPhoneNumber"])
      setValue("dropshipperName", "")
      setValue("dropshipPhoneNumber", "")

      cloneData[1].disabled = true
      cloneData[3].disabled = true
    }
    
    const cloneFormValue = getValues()
    cloneFormValue.dropshipperName = ""
    cloneFormValue.dropshipPhoneNumber = ""
    
    setFormToState(cloneData)
    dispatch(setDeliveryDetail(cloneFormValue, steps))
    dispatch(handleChangeAction("isDropShip", isDropShip))
  }, [isDropShip])

  useEffect(() => {
    const { field, selectedPayment, selectedShipment } = checkoutSelector
    Object.keys(field).forEach(function(key) {
      setValue(key, field[key])
    });

    handleChangeList("shipment", selectedShipment)
    handleChangeList("payment", selectedPayment)
  }, [])

  const onFormSubmit = (data) => {
    setSteps(2)
    dispatch(setDeliveryDetail(data, 2))
  };

  const handleBack = ({isReset = false}) => {
    if(isReset) {
      persistStore(store().store).purge();
      window.location.reload()
    } else {
      setSteps(1)
      dispatch(handleChangeAction("currentStep", 1))
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
      dispatch(handleChangeAction("selectedShipment", id))
    } else {
      cloneData = _.cloneDeep(paymentList).map((payment) => ({
        ...payment,
        isChecked: false
      }))

      let filteredForm = _.filter(cloneData, (data) => data.id === id)[0]
      filteredForm.isChecked = true

      setPaymentList(cloneData)
      dispatch(handleChangeAction("selectedPayment", id))
    }
  }

  const calculatePrice = () => {
    let total = 0
    if(isDropShip) {
      total += dropshipPrice
    }

    if(steps >= 2) {
      total += selectedShipment.value
    }

    total += itemPrice
    return total
  }

  const changeFormHandler = (name, value) => {
    dispatch(directChangeForm(name, value))
  }
 
  const selectedShipment = shipmentList.find(shipment => shipment.isChecked === true)
  const selectedPayment = paymentList.find(shipment => shipment.isChecked === true)

  return (
    <Container>
      <Card>
        <HeaderWrapper>
          <Stepper stepList={stepList} currentStep={steps}/>
        </HeaderWrapper>
        {steps !== 3 && (
          <BackButton onClick={handleBack} title={backLabel[steps-1]} style={{paddingLeft: 30}}/>
        )}
        <WrapperContent>
          <CustomCol>
            <Row cols={8} style={{padding: "20px", paddingTop: 0}}>
              {steps === 1 && (
                <DeliveryDetail 
                  dropShip={isDropShip} 
                  changeDropship={setIsDropShip}
                  formData={formToState}
                  errors={errors}
                  handleSubmit={handleSubmit(onFormSubmit)}
                  getValues={getValues}
                  control={control}
                  changeForm={changeFormHandler}
                />
              )}
              {steps === 2 && (
                <PaymentDetail 
                  shipmentList={shipmentList}
                  paymentList={paymentList}
                  handleChange={handleChangeList}
                />
              )}
              {steps === 3 && (
                <TransactionFinish 
                  selectedShipment={selectedShipment}
                  handleBack={handleBack}
                  backLabel={backLabel}
                  steps={steps}
                  orderId={checkoutSelector.orderId}
                />
              )}
            </Row>
            <Row cols={4} style={{padding: "20px"}}>
              <Summary 
                isDropShip={isDropShip}
                handleFormSubmit={handleSubmit(onFormSubmit)} 
                handleChangeStep={() => {
                  setSteps(steps + 1)
                  dispatch(handleChangeAction("currentStep", steps + 1))
                }}
                selectedPayment={selectedPayment}
                selectedShipment={selectedShipment}
                currentStep={steps}
                itemPrice={itemPrice}
                dropshipPrice={dropshipPrice}
                calculatePrice={calculatePrice}
              />
            </Row>
          </CustomCol>
        </WrapperContent>
      </Card>
    </Container>
  )
}

export default HomePage;