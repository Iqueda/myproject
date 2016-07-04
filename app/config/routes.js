var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require("../components/Home");
var Produto = require("../components/Produto");
var Cfisico = require("../components/Cfisico");
var Cjuridico = require("../components/Cjuridico");
var Pedido = require("../components/Pedido");

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
    	<IndexRoute component={Home} />
    	<Route path='produto' component={Produto} />
    	<Route path='clienteFisico' component={Cfisico} />
		<Route path='clienteJuridico' component={Cjuridico} />
		<Route path='pedido' component={Pedido} />
    </Route>
  </Router>
);

module.exports = routes;