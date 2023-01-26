/* eslint-disable no-useless-escape */
const validate = {
  important: {
    required: "Field is required"
  } ,
  phoneNumber: {
    required: "Field is required",
    pattern: {
      value: /^[0-9\+\-\(\)]+$/,
      message: "Please input a valid phone number"
    },
    minLength: {
      value: 6,
      message: "Min 5 characters required"
    },
    maxLength: {
      value: 20,
      message: "Max 20 characters required"
    },
  },
  email: {
    required: "Field is required",
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: "Please input a valid email address"
    }
  },
  address: {
    required: "Field is required",
    maxLength: {
      value: 120,
      message: "Max 120 characters required"
    },
  }
}

export default validate