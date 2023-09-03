const baseURL = import.meta.env.VITE_BASE_URL + '/api'

export const USER = {
  GET: `${baseURL}/user`,
  POST: `${baseURL}/user`,
  PUT: `${baseURL}/user`,
  DELETE: `${baseURL}/user`,
  MARKDONE: `${baseURL}/user/mark-done`,
}
export const CATEGORY = {
  GET: `${baseURL}/category`,
}
export const ACCOUNT = {
  GET: `${baseURL}/account`,
  POST: `${baseURL}/account`,
}