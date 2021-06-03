import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from '../Components';

import { CardPage } from '../pages';

const AppRouter: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <CardPage />
        </Route>
      </Switch>
    </Layout>
  );
};

export default AppRouter;
