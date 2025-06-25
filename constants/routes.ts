const ROUTES = {
  ROOT: '/',
  AUTH: {
    LOGIN: '/(auth)/login',
    SIGNUP: '/(auth)/signup',
  },
  MAIN: {
    HOME: '/(main)/(footer-tabs)/home',
    ACTIVITY: '/(main)/(footer-tabs)/activity',
    SETTINGS: '/(main)/(footer-tabs)/settings',
  },
} as const;

export type RouteHref = typeof ROUTES[keyof typeof ROUTES] | typeof ROUTES.MAIN[keyof typeof ROUTES.MAIN] | typeof ROUTES.AUTH[keyof typeof ROUTES.AUTH];

export default ROUTES;
