import axios from 'axios';
import { DECREMENT2, SET_DELIVERY_DETAIL, SET_CHANGE_ACTION } from './types';

export const setDeliveryDetail = (data, currentStep) => {
	return {
		type: SET_DELIVERY_DETAIL,
		payload: {
			data,
			currentStep
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

export const decreaseCounter = () => {
	return {
		type: DECREMENT2,
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