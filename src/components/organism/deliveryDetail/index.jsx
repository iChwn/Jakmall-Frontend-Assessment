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
  register,
  errors,
  handleSubmit,
  getValues
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
                  <TextInput
                    getValues={getValues}
                    type={result.type}
                    name={result.name}
                    value={result.value}
                    onChange={onChangeInput}
                    placeholder={result.placeholder}
                    error={errors[result.name]}
                    disabled={result.disabled}
                    {...register(result.name, result.rules)}
                  />
                )}
                {result.type === 'textarea' && (
                  <TextAreaInput
                    getValues={getValues}
                    type={result.type}
                    name={result.name}
                    value={result.value}
                    onChange={onChangeInput}
                    placeholder={result.placeholder}
                    error={errors[result.name]}
                    {...register(result.name, result.rules)}
                  />
                )}
              </Row>
            )
          })}
        </Col>
        <button type="submit">Submit</button>
      </form>
		</Wrapper>
	)
}

export default DeliveryDetail
