import axios from 'axios'

const baseDomain: string =
  process.env.NODE_ENV === 'production' ? '' : 'https://localhost:3000'
const baseURL: string = `${baseDomain}`

export default axios.create({
  baseURL,
})
