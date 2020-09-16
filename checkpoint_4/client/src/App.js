// React dependencies
import React from 'react';
import { Switch, Route } from 'react-router-dom'

// Components
import Header from './Components/front/Header'
import Home from './Components/front/Home'
import Footer from './Components/front/Footer'
import Boutique from './Components/front/Boutique'
import Admin from './Components/front/Admin'
import AccueilAdmin from './Components/Admin/Login/AccueilAdmin';
import BoutiqueAdmin from './Components/Admin/Login/BoutiqueAdmin';


function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Boutique' component={Boutique} />
        {/* <Route path='/Admin' component={Admin} /> */}
        {/* <Route path='/AccueilAdmin' component={AccueilAdmin} /> */}
        <Route path='/Admin' component={BoutiqueAdmin} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
