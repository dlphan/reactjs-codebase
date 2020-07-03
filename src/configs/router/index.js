export const nonAuthenticatedRoutes = [
  {
    exact: true,
    path: '/login',
    component: 'login'
  }
]

export const authenticatedRoutes = [
  {
    exact: true,
    path: '/home',
    component: 'home'
  }
]
