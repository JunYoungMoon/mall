/**
 * axios setup to use mock service
 */

import axios from 'axios';

const axiosServices = axios.create();

// interceptor for http
axiosServices.interceptors.response.use(
  (response) => response,
  async error => await Promise.reject(error.response?.data || 'Wrong Services')
);

export default axiosServices;
