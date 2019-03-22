import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './component/header'
import store from './store'
import Home from './page/home'
import Detail from './page/detail'
import Login from './page/login'
import Write from './page/write'
import Register from './page/register'
import './popup'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header />
            <Route path='/' exact component={Home}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/register' exact component={Register}></Route>
            <Route path='/write' exact component={Write}></Route>
            <Route path='/detail/:id' exact  component={Detail}></Route>
        </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
