import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import PagesEmployeeSearch from './Employee/Search/Search';
import PagesEmployeeForm from './Employee/Form/Form';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path="/create" component={PagesEmployeeForm} />
        <Route path="/edit/:id" component={PagesEmployeeForm} />
        <Route path="/" component={PagesEmployeeSearch} />
      </Switch>
    </Router>
  );
};

export default Root;