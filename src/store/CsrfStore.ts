import { defineStore } from 'pinia';
import { ref, type Ref } from 'vue';

/** Csrf Store */
export default defineStore(
  'csrf',
  () => {
    /** Csrf Token */
    const csrfToken: Ref<string> = ref('');

    /**
     * Set Csrf
     */
    const setCsrfToken = (token: string | null) => {
      if (token != null) {
        csrfToken.value = token;
      }
    };

    /**
     * Get Csrf
     */
    const getCsrfToken = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/getcsrf`, {
          method: 'GET',
          credentials: 'include',
        });

        const data = await res.json();

        return data.csrfToken;
      } catch (error) {
        console.error('Error fetching CSRF token:', error);
        throw error;
      }
    };

    return {
      csrfToken,
      getCsrfToken,
      setCsrfToken,
    };
  },
  {
    // Data persistence destination
    persist: {
      key: 'csrf',
      storage: window.sessionStorage,
    },
  }
);
