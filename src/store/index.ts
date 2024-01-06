import { createPinia, type Pinia } from 'pinia';

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

// Pinia Stores
import useAuth from '@/store/AuthStore';
import useConfig from '@/store/ConfigStore';
import useCsrf from '@/store/CsrfStore';
import useCustomizer from '@/store/Customizer';
import useErrMsg from '@/store/ErrorMsgStore';
import useGlobal from '@/store/GlobalStore';
import useRule from '@/store/RuleStore';

/** Pinia Store */
const pinia: Pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export default pinia;

export {
  useConfig,
  useCsrf,
  useGlobal,
  useAuth,
  useRule,
  useErrMsg,
  useCustomizer,
};
