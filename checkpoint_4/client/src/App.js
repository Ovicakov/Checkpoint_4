// React dependencies
import React from 'react';
import { Switch, Route } from 'react-router-dom'

// Components
import Header from './Components/Header'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Boutique from './Components/Boutique'
import Admin from './Components/Admin'

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Boutique' component={Boutique} />
        <Route path='/Admin' component={Admin} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
