// React dependencies
import React from 'react';
import { Switch, Route } from 'react-router-dom'

// Components
import Header from './Components/front/Header'
import Home from './Components/front/Home'
import Footer from './Components/front/Footer'
import Boutique from './Components/front/Boutique'
import Admin from './Components/front/Admin'
import requireAuth from './Components/Admin/Login/requireAuth';
import requireNotAuth from './Components/Admin/Login/requireNotAuth'
import AccueilAdmin from './Components/Admin/Login/AccueilAdmin';
import BoutiqueAdmin from './Components/Admin/Login/BoutiqueAdmin';


function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Boutique' component={Boutique} />
        <Route path='/Admin' component={requireNotAuth(Admin)} />
        <Route path='/AccueilAdmin' component={requireAuth(AccueilAdmin)} />
        <Route path='/BoutiqueAdmin' component={requireAuth(BoutiqueAdmin)} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
