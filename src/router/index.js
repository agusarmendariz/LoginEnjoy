
import Login from './components/Login';
import Dashboard from './components/Dashboard';



export const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  }
]

