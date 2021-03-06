import React from 'react';
import { Route, Switch } from 'react-router-dom';

import TasksDashboard from './screens/TasksDashboard';
import history from './history';


const Routes = () => {
  return (
    <Route history={history}>
       <Switch>
         <TasksDashboard />
       </Switch>
    </Route>
  );
};

export default Routes;