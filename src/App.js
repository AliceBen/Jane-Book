import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './component/header'
import store from './store/index'
import Home from './page/home'
import Detail from './page/detail'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
        <Header />
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/detail' component={Detail}></Route>
          </div>
        </BrowserRouter>
      </div>
        
      </Provider>
    );
  }
}

export default App;
