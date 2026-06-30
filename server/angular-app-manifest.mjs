
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/dashboard",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/dashboard"
  },
  {
    "renderMode": 2,
    "redirectTo": "/dashboard",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5270, hash: 'b79e1d8ff532fcd2f3174a90e4129c1e8a7bcd0d0c8490f57493b0868d4e3522', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 951, hash: '2ec820e04e61a2e34b474a5bd1d7c41c5e14418ee2c8b2aef1dcaa486b1860f5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 15045, hash: 'a39e565d97b7233154f3c411b3170f3ad7d5ff201c5b8a3043fff3e5e8a0e372', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 25976, hash: 'f1f5140eb03703a6866f5fa64d7abc0ecf03be2c59190501451455dd91df4ba2', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'styles-RCX3RPES.css': {size: 315916, hash: '0GVUVYHfMDo', text: () => import('./assets-chunks/styles-RCX3RPES_css.mjs').then(m => m.default)}
  },
};
