import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Login from './components/Login/login';
import { initializeApp } from './redux/initialized-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Preloader } from './components/preloader/Preloader';

function App(props) {
  const [query, setQuery] = useState('react');
  
  useEffect(() => {
    props.initializeApp();
  },[query])

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
            render={() => <DialogsContainer
              />} 
          />
          <Route path='/profile/:userId?' 
            render={() => <ProfileContainer 
              />} 
          />
          <Route path='/users'
            render={() => <UsersContainer
            />}
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
