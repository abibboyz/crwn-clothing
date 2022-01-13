import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.componet';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';
import { CreateUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {

  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }
  
  unsubscribeFromAuth= null;


  componentDidMount(){
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=> {
      if (userAuth) {
        const userRef = await CreateUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot =>{
          this.setState({
            currentUser: {
              id:snapShot.id,
              ...snapShot.data()
            }
          });
        });
        
      }
      this.setState({currentUser: userAuth});  
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){return (
    <div>
      <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path="/" element={<HomePage />}/>  
          <Route path="/shop" element={<ShopPage />}/>
          <Route path="/signin" element={<SignInSignUpPage />}/>  
        </Routes>
    </div>
  );
}}

export default App;
