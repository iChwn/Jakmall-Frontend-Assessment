import React from 'react'
import 'assets/css/custom.scss'
import styled from 'styled-components'
import {
	Checkbox,
	Col,
	LabelTitle,
	Row,
	TextAreaInput,
	TextInput,
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

const DeliveryDetail = ({
	dropShip,
	changeDropship,
	formData,
	onChangeInput,
}) => {
	return (
		<Wrapper>
			<TitleHeader>
				<LabelTitle label='Delivery Detail' />
				<Checkbox
					label='Send as Dropshipper'
					isChecked={dropShip}
					onChange={() => changeDropship(!dropShip)}
					style={{ marginRight: 20 }}
				/>
			</TitleHeader>
			<Col>
        {formData.map((result, index) => {
          return (
            <Row cols={result.cols} key={index}>
              {(result.type === 'email' ||
                result.type === 'text' ||
                result.type === 'number') && (
                <TextInput
                  type={result.type}
                  name={result.name}
                  value={result.value}
                  onChange={onChangeInput}
                  placeholder={result.placeholder}
                />
              )}
              {result.type === 'textarea' && (
                <TextAreaInput
                  type={result.type}
                  name={result.name}
                  value={result.value}
                  onChange={onChangeInput}
                  placeholder={result.placeholder}
                />
              )}
            </Row>
          )
        })}
        {/* <Row cols={7}>
          <TextInput value={email} onChange={e => setEmail(e.target.value)} placeholder={"First Name"}/>
        </Row>
        <Row cols={5}>
          <TextInput placeholder={"First Name"}/>
        </Row>
        <Row cols={7}>
          <TextInput value={"test 123"} placeholder={"First Name"}/>
        </Row>
        <Row cols={5}>
          <TextInput placeholder={"First Name"}/>
        </Row>
        <Row cols={7}>
          <TextAreaInput placeholder={"Delivery Address"}/>
        </Row> */}
      </Col>
		</Wrapper>
	)
}

export default DeliveryDetail
