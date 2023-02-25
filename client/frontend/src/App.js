import React from 'react';

import NavigationBar from "./NavigationBar"
import AppRouter from './AppRouter';
import { Navbar, Button } from 'reactstrap';



const App = () => {

    return (
    
    <div className='App'>
      <NavigationBar />
      <AppRouter />
     
      
      
    </div>
    );
  
}
   


export default App;
