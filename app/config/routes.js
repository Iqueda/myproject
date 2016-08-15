import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Main from '../components/Main'
import Home from "../components/Home"
import Produto from "../components/Produto"
import Cfisico from "../components/Cfisico"
import Cjuridico from "../components/Cjuridico"
import Pedido from "../components/Pedido"

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
    	<IndexRoute component={Home} />
    	<Route path='produto' component={Produto} />
    	<Route path='clienteFisico' component={Cfisico} />
			<Route path='clienteJuridico' component={Cjuridico} />
			<Route path='pedido' component={Pedido} />
    </Route>
  </Router>
)

export default routes