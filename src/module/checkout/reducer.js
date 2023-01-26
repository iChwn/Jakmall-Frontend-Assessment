import { generateRandomString } from 'utility/helper/helper';
import { SET_DELIVERY_DETAIL, SET_CHANGE_ACTION, DIRECT_SET_FORM_VALUE } from './types';
import _ from 'lodash';

const INITIAL_STATE = {
	field: {
		email: "",
		dropshipperName: "",
		phoneNumber: "",
		dropshipPhoneNumber: "",
		deliveryAddress: ""
	},
	currentStep: 1,
	isDropShip: false,
	selectedShipment: 1,
	selectedPayment: 1,
	orderId: generateRandomString(5)
};

const checkoutReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_DELIVERY_DETAIL:
			return {
				...state, 
				field: action.payload.data,
				currentStep: action.payload.currentStep,
			};
		case DIRECT_SET_FORM_VALUE:
			const {name, value} = action.payload
			const cloneData = _.cloneDeep(state)
			cloneData.field[name] = value

			return cloneData;
		case SET_CHANGE_ACTION:
			return {
				...state, 
				[action.payload.pointer]: action.payload.data,
			};
		default: return state
	}
}

export default checkoutReducer;