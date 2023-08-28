import axios from 'axios';
import { createHttp } from 'effector-http-api';

export const commonInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  headers: {
    'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY,
  },
});

export const http = createHttp(commonInstance);
