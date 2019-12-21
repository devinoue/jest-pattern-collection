import axios, { AxiosInstance } from 'axios'

export default async function callApi(url: string): Promise<AxiosInstance> {
  return axios.get(url)
}
