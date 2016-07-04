var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Pedido = React.createClass ({
	render: function() {
		return (
	<div className="jumbotron col-sm-12 text-center">	
		<h1>Cadastro de Pedidos</h1>
		<form className="form-inline" role="form">
		<fieldset className="form-group">
			<label for="adicionarProdutos">Adicionar Produtos:</label>
	 		<input type="text" className="form-control" placeholder="Novos Produtos" />
	 	</fieldset> 
	 	<fieldset className="form-group">
			<label for="listaProdutos">Lista de Produtos:</label>
 	 	</fieldset> 
 	 	<fieldset className="form-group">
			<label for="valorTotal">Valor total do pedido:</label>
 	 	</fieldset> 
 	 	<button type='button' className='btn btn-lg'>Cadastrar</button>
		</form>
		<Link to='/'>
		<div className="btn-group" role="group">
        	<button type='button' className='btn btn-lg '>Back</button>
        </div>
	</Link>
	</div>
		)
	}
})

module.exports = Pedido;