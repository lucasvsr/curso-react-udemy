import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';
import {
  Dashboard as DashboardView,
  SignIn as SignInView, 
  TarefasList as TarefasListView
} from './views';



const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/dashboard"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={TarefasListView}
        exact
        layout={MainLayout}
        path="/tarefas"
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/login"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
