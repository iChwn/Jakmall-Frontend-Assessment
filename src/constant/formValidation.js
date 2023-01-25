/* eslint-disable no-useless-escape */

const validate = {
  important: {
    required: "Harus di Isi"
  } ,
  phoneNumber: {
    required: "Harus di Isi",
    pattern: {
      value: /^[0-9\+\-\(\)]+$/,
      message: "Nomer telepon tidak Valid"
    },
    minLength: {
      value: 6,
      message: "Minimal 5 karakter"
    },
    maxLength: {
      value: 20,
      message: "Maximal 20 karakter"
    },
  },
  email: {
    required: "Harus di Isi",
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: "Masukan nilai email yang benar"
    }
  },
  address: {
    required: "Harus di Isi",
    maxLength: {
      value: 120,
      message: "Maximal 120 karakter"
    },
  }
}

export default validate