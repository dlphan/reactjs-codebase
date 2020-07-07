import React, { Suspense } from "react";
import "./App.less";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { authenticatedRoutes } from "./configs";

const Components = {};
authenticatedRoutes.forEach((route) => {
  Components[route.component] = React.lazy(() =>
    import(`./pages/${route.component}`)
  )
});

const App = () => {
  const pages = authenticatedRoutes.map((route, idx) => (
    <Route
      key={idx}
      exact={route.exact}
      path={route.path}
      // component={route.component}
      render={routeProps => {
        const Component = Components[route.component]
        return <Component {...routeProps} route={route} />
      }}
    />
  ));
  return (
    // code-splitting + React router (https://reactjs.org/docs/code-splitting.html).
    <Router>
      <Suspense fallback={null}>
        <Switch>
          {pages}
          <Redirect to="/home" />
        </Switch>
      </Suspense>
    </Router>
  );
};
export default App;
