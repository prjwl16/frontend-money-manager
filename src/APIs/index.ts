import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

export const getUser = async (headers: Record<string, string>) => {
  const response = await axios.get('/user', { headers })
  return response
}
