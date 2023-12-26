import mock from './mockAdapter';

import './apps/ecommerce';

mock.onAny().passThrough();
