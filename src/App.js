import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { setCurrentUser } from './redux/user/user.actions'; 

import {connect} from 'react-redux';
import './App.css';
import HomePage from './pages/homepage/homepage.componet';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';
import { CreateUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {

  
  unsubscribeFromAuth= null;


  componentDidMount(){

  const {setCurrentUser}= this.props;

  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=> {
      if (userAuth) {
        const userRef = await CreateUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot =>{
          setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
            });
          });  
      }
      setCurrentUser(userAuth);  
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){return (
    <div>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />}/>  
          <Route path="/shop" element={<ShopPage />}/>
          <Route path="/signin" element={<SignInSignUpPage />}/>  
        </Routes>
    </div>
  );
}}

const mapDispachToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
}); 

export default connect(null, mapDispachToProps)(App);
