const baseURL = import.meta.env.VITE_BACKEND_BASE_URL + '/api'

export const USER = {
  GET: `${baseURL}/user`,
  POST: `${baseURL}/user`,
  PUT: `${baseURL}/user`,
  DELETE: `${baseURL}/user`,
  SETUP: `${baseURL}/user/setup`,
}
export const CATEGORY = {
  GET: `${baseURL}/category`,
}
export const ACCOUNT = {
  GET: `${baseURL}/account`,
  POST: `${baseURL}/account`,
}
export const CARDS = {
  GET_CARDS: `${baseURL}/cards`,
}

export const TRANSACTION = {
  GET_TRANSACTIONS: `${baseURL}/transaction`,
  ADD_TRANSACTION: `${baseURL}/transaction`,
  INCOME_EXPENSE: `${baseURL}/transaction/income-expense`,
}
