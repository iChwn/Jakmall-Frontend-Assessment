import { generateRandomString } from 'utility/helper/helper';
import { DECREMENT2, SET_DELIVERY_DETAIL, SET_CHANGE_ACTION } from './types';

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
		case SET_CHANGE_ACTION:
			return {
				...state, 
				[action.payload.pointer]: action.payload.data,
			};
		case DECREMENT2:
			return {
				...state, count: state.count - 1,
			};
		default: return state
	}
}

export default checkoutReducer;