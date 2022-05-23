import axios from "axios";


export const callApi = axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
  headers: {
    'Content-type': 'application/json'
  }
})