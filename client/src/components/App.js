import React, {useEffect} from 'react';
import {BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from './Home';
import SignUp from './SignUp';
import SignIn from './SignIn';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';
import AdminRoute from './AdminRoute';
import UserRoute from './UserRoute';
import NotFound from './NotFound';
import './App.css';
//Redux
import {useDispatch} from 'react-redux';
import {getCategories} from '../redux/actions/categoryActions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return(
  <BrowserRouter>
    <Header />
    <main>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/signin' component={SignIn}/>
        <UserRoute exact path='/user/dashboard' component={UserDashboard}/>
        <AdminRoute exact path='/admin/dashboard' component={AdminDashboard}/>
        <Route component={NotFound}/>
      </Switch>
    </main>
  </BrowserRouter>
  );
};

export default App;
