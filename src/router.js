import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import InputColor from './routes/InputColor';
import FormPage from './routes/Form';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/products" exact component={Products} />
        <Route path="/InputColor" exact component={InputColor} />
        <Route path="/form" exact component={FormPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
