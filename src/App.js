import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Login from './components/Login/login';

function App(props) {
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

export default App;
