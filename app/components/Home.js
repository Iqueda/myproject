var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link

var Home = React.createClass({
  render: function () {
    return (
	<div className="jumbotron col-sm-3 col-sm-offset-3 text-center">
	     <h1>Dashboard</h1>
   	   <div className="btn-group btn-group-justified" role="group">
	   <Link to='/clienteFisico'>
	    <div className="btn-group" role="group">
        <button type='button' className='btn btn-lg '>Cadastro Cliente Fisico</button>
        </div>
      </Link>
      <Link to='/clienteJuridico'>
		<div className="btn-group" role="group">
       <button type='button' className='btn btn-lg '>Cadastro Cliente Juridico</button>
      </div>
      </Link>
      <Link to='/pedido'>
        <button type='button' className='btn btn-lg '>Cadastro de Pedido</button>
      </Link>
      <Link to='/produto'>
        <button type='button' className='btn btn-lg '>Cadastro de Produto</button>
      </Link>
      </div>
      </div>
    )
  }
});

module.exports = Home;
