/**
 * axios setup to use mock service
 */

import axios from 'axios';

const baseUrl = `${import.meta.env.VITE_API_URL}`;

const axiosServices = axios.create({
  baseURL: baseUrl,
});

// interceptor for http
axiosServices.interceptors.request.use(
  (config) => {

    config.headers['Content-Type'] = 'application/json';

    // 예시: Authorization 헤더 추가 (Bearer 토큰 사용)
    const accessToken = 'your_access_token';
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  async (error) => {
    // 요청이 실패한 경우 처리할 작업을 추가합니다.
    return await Promise.reject(error);
  },
);
axiosServices.interceptors.response.use(
  (response) => response,
  async error => await Promise.reject(error.response?.data || 'Wrong Services'),
);

export default axiosServices;
