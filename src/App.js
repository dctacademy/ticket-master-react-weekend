import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import TicketIndex from './tickets/index'
import TicketShow from './tickets/show'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div className="mt-4">
            <h2>Ticket Master</h2>
          </div>
          
          <Route path='/' component={TicketIndex} exact />
          <Route path='/tickets/:code' component={TicketShow}  />
        </div>
      </BrowserRouter> 
    );
  }
}

export default App;
