import axios from 'axios';
import { SET_DELIVERY_DETAIL, SET_CHANGE_ACTION, DIRECT_SET_FORM_VALUE } from './types';

export const setDeliveryDetail = (data, currentStep) => {
	return {
		type: SET_DELIVERY_DETAIL,
		payload: {
			data,
			currentStep
		}
	};
};

export const directChangeForm = (name, value) => {
	return {
		type: DIRECT_SET_FORM_VALUE,
		payload: {
			name, value
		}
	};
};


export const handleChangeAction = (name, value) => {
	return {
		type: SET_CHANGE_ACTION,
		payload: {
			pointer: name,
			data: value
		}
	};
};


export const getApiData = () => {
	return (_) =>
		axios.get("https://jsonplaceholder.typicode.com/todos")
		.then((res) => {
			console.log(res)
		})
		.catch((err) => {
			console.log(err)
		})
}