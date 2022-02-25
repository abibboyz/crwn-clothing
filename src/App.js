import React from 'react';
import { Route, Routes} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';
import HomePage from './pages/homepage/homepage.componet';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';
import { CreateUserProfileDocument } from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';

import CheckOutPage from './pages/checkout/checkOut.component';

import {selectCurrentUser} from './redux/user/user.selectors'
import { createStructuredSelector } from 'reselect';


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
          <Route path="/checkout" element={<CheckOutPage />}/>
          <Route path = '/signin' element ={this.props.currentUser?<HomePage />:<SignInSignUpPage />} /> 
        </Routes>
    </div>
  );
}}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
}); 

export default connect(mapStateToProps , mapDispatchToProps)(App);
