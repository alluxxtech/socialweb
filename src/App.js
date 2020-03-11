import React, { useEffect, lazy } from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
// import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
import Login from './components/Login/login';
import { initializeApp } from './redux/initialized-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import withSuspense from './hoc/withSuspense';
// import { Preloader } from './components/preloader/Preloader';
const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
// const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'));

function App(props) {
  
  useEffect(() => {
    props.initializeApp();
  },[])

  if (!props.initialized) {
    return (
      <div>
        loading...
      </div>
    )
  }

  return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' 
            render={withSuspense(DialogsContainer)}
          />
          <Route path='/profile/:userId?' 
            render={() => <ProfileContainer/>} 
          />
          <Route path='/users'
            render={withSuspense(UsersContainer)}
          />
          <Route path='/login'
            render={() => <Login
            />}
          />
        </div>
      </div>
  );
}
const mapStateToProps = state => ({
  initialized: state.initReducer.initialized
})
export default compose(
  withRouter,
  connect(mapStateToProps, { 
    initializeApp 
  })
)(App);
