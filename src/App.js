import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Global from './index.styles';
import NotFound from './page/404/NotFound';
import Details from './page/Details/Details';
import Home from './page/Home/Home';

function App() {
    return (
        <Router>
            <Global />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/details/:slug">
                    <Details />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
