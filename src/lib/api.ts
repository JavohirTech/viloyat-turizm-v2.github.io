import axios from "axios";
export const BASE_URL = "https://g5wnssm9-8000.euw.devtunnels.ms/client/api"
export const DOMAIN_URL = "http://localhost:3000"

export const api = axios.create({
  baseURL: BASE_URL})
