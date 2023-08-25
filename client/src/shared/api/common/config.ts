import axios from 'axios';
import { createHttp } from 'effector-http-api';

export const commonInstance = axios.create({
  baseURL: "http://localhost:5000",
  // baseURL: process.env.SERVER_URL,
  headers: {
    'X-API-KEY': process.env.API_KEY,
  },
});

export const http = createHttp(commonInstance);
