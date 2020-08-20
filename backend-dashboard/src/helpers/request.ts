import axios from 'axios';

export const request = axios.create({
  // Timeout 30p
  timeout: 30 * 60 * 1000,
  withCredentials: true,
});
