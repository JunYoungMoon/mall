import { useAuth, useCsrf } from '@/store';

import axios from 'axios';

import type {
  AuthInterface,
} from '@/interfaces/AuthInterface';

const baseUrl = `${import.meta.env.VITE_API_URL}`;

const axiosServices = axios.create({
  baseURL: baseUrl,
});


// interceptor for http
axiosServices.interceptors.request.use(
  (config) => {
    config.withCredentials = true;

    const csrfStore = useCsrf();
    const authStore = useAuth();
    const { accessToken } = authStore;

    const { csrfToken } = csrfStore;

    if (csrfToken) {
      config.headers['X-XSRF-TOKEN'] = 'aaa';
    }

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
  async (response) => {
    const authStore = useAuth();
    const { refreshToken } = authStore;

    const csrfStore = useCsrf();

    csrfStore.setCsrfToken(response.data.csrfToken);

    // 응답이 refreshTokenRequired를 가지고 있다면 토큰을 갱신
    if (refreshToken && response.data?.refreshTokenRequired) {
      const originalRequest = response.config;
      originalRequest.headers.Authorization = `Bearer ${refreshToken}`;
      return await axiosServices(originalRequest);
    }
     // 갱신된 토큰을 사용하여 이전 요청을 재시도

    // refreshTokenRequired가 없는 경우 그냥 응답 반환
    return response;
  },
  async error => await Promise.reject(error.response?.data.msg || 'Wrong Services'),
);

export default axiosServices;
