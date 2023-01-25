import BaseButton from "components/atoms/button/basicButton";
import Row from "components/atoms/grid/row";
import { colors } from "constant";
import React from "react";
import styled from "styled-components";

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
`

const Boundaries = styled.div`
  width: 31%;
  height: 1px;
  background-color: ${colors.grayUltraLight};
  position: absolute;
  top: -10px;
`
 
const Summary = ({handleSubmit}) => {
  return (
    <SectionWrapper>
      <Section style={{display: "flex", flex: 1, flexDirection: "column"}}>
        <Row cols={12}>
          <H3Label>Summary</H3Label>
          <LabelLight>10 items purchased</LabelLight>
        </Row>
        <Row cols={12} style={{marginTop: 20, position: "relative"}}>
          <Boundaries />
          <LabelNormal>Delivery estimation</LabelNormal> <br/>
          <LabelMedium>today by GO-SEND</LabelMedium>
        </Row>
        <Row cols={12} style={{marginTop: 20, position: "relative"}}>
          <Boundaries />
          <LabelNormal>Payment method</LabelNormal> <br/>
          <LabelMedium>Bank Transfer</LabelMedium>
        </Row>
      </Section>
      <Section>
        <WrapperSpaceBetween>
          <LabelLight>10 items purchased</LabelLight>
          <LabelStrong>500,000</LabelStrong>
        </WrapperSpaceBetween>
        <WrapperSpaceBetween>
          <LabelLight>Dropshipping Fee</LabelLight>
          <LabelStrong>5,900</LabelStrong>
        </WrapperSpaceBetween>
        <WrapperSpaceBetween style={{margin: "20px 0px"}}>
          <H3Label>Total</H3Label>
          <H3Label>505,900</H3Label>
        </WrapperSpaceBetween>
        <BaseButton onClick={handleSubmit} title="Continue to Payment" />
      </Section>
    </SectionWrapper>
  )
}

export default Summary;