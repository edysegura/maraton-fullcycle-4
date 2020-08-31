// @flow
import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import { Users } from './components/Users';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Users} path="/" exact />
      <Route component={Users} path="/users" />
    </BrowserRouter>
  );
};
