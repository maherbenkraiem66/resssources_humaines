import logo from './logo.svg';
import './App.css';
import routes from "./routes";
import React from 'react'
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'
function App() {
  return (
    <Router basename={process.env.REACT_APP_BASENAME || ""}>
    <div>
      {routes.map((route, index) => {
        return (
 
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={(props => {
              return (

                  <route.component {...props} />
              );
            })}
          />
 
        );
      })}
    
    </div>
    </Router>
    );
}

export default App;
