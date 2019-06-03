import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Products from './components/Products';
import NewProduct from './components/NewProduct';
import EditProduct from './components/EditProduct';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <>
            <Header />
            <Switch>
              <Route exact path="/" component={Products} />
              <Route exact path="/products/new" component={NewProduct} />
              <Route exact path="/products/edit/:id" component={EditProduct} />
            </Switch>
          </>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
