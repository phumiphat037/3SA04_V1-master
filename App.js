import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from './components/Home';
import Logo from './components/Logo';

export default function App() {
  return (        
      <Router>
        <Scene key="root">
          <Scene key="Logo" component={Logo} hideNavBar={true}></Scene>
          <Scene key="Home" component={Home} hideNavBar={true}></Scene>
        </Scene>
      </Router>

     
  );
}