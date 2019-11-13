import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/auth/Home';
import Products from '../components/user/Products';


export default () => {

    return (

        <Switch>
            <Route exact path="/"  component={Home} />
            <Route exact path="/products" component={Products} />
        </Switch>
    )

}