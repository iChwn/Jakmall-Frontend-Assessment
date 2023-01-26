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
import { Controller } from 'react-hook-form'

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
  errors,
  handleSubmit,
  getValues,
  control,
  changeForm
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
      <form onSubmit={handleSubmit}>
        <Col>
          {formData.map((result, index) => {
            return (
              <Row cols={result.cols} key={index}>
                {(result.type === 'email' ||
                  result.type === 'text' ||
                  result.type === 'number') && (
                  <Controller 
                    control={control}
                    name={result.name}
                    rules={result.rules}
                    render={({
                      field: { onChange, onBlur, value }
                    }) => {
                      return (
                        <TextInput
                          onChange={e => {
                            onChange(e)
                            changeForm(e.target.name, e.target.value)
                          }}
                          onBlur={onBlur}
                          getValues={getValues}
                          type={result.type}
                          name={result.name}
                          value={value}
                          placeholder={result.placeholder}
                          error={errors[result.name]}
                          disabled={result.disabled}
                        />
                    )}}
                  />
                )}
                {result.type === 'textarea' && (
                  <Controller 
                   control={control}
                   name={result.name}
                   rules={result.rules}
                   render={({
                     field: { onChange, onBlur, value }
                   }) => {
                     return (
                       <TextAreaInput
                         onChange={e => {
                           onChange(e)
                           changeForm(e.target.name, e.target.value)
                         }}
                         onBlur={onBlur}
                         getValues={getValues}
                         type={result.type}
                         name={result.name}
                         value={value}
                         placeholder={result.placeholder}
                         error={errors[result.name]}
                         disabled={result.disabled}
                       />
                   )}}
                 />
                )}
              </Row>
            )
          })}
        </Col>
      </form>
		</Wrapper>
	)
}

export default DeliveryDetail
