import { getCookie, setCookie } from "./cookies";
import {getLocalStorage, setLocalStorage} from './localStorage';

export const setAuthentication = (token, user) => {
   setCookie('token', token);
   setLocalStorage('user', user);
};

export const setAuthenticated = () => {
   if(getCookie('token') && getLocalStorage('user')){
      return getLocalStorage('user');
   }else{
      return false;
   }
};