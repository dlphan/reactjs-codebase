const nonAuthenticatedRoutes = [
  {
    exact: true,
    path: '/login',
    component: 'login'
  }
]

const authenticatedRoutes = [
  {
    exact: true,
    path: '/home',
    component: 'home'
  },
  {
    exact: true,
    path: '/about',
    component: 'about'
  }
]

export {
  nonAuthenticatedRoutes,
  authenticatedRoutes
}
