
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const getAccessToken = () => cookies.get('login')

export const isAuthenticated = () => !!getAccessToken()
