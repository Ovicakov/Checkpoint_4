// React dependencies
import React from 'react';
import { Switch, Route } from 'react-router-dom'

// Components
import Header from './Components/Header'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Boutique from './Components/Boutique'
import Admin from './Components/Admin'
import requireAuth from './Components/Admin/Login/requireAuth';
import requireNotAuth from './Components/Admin/Login/requireNotAuth'
import AccueilAdmin from './Components/Admin/Login/AccueilAdmin';


function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Boutique' component={Boutique} />
        <Route path='/Admin' component={requireNotAuth(Admin)} />
        <Route path='/AccueilAdmin' component={requireAuth(AccueilAdmin)} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
