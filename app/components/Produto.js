var React = require('react');
var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link

var Produto = React.createClass ({
	render: function () {
		return (
<div className="jumbotron col-sm-3 col-sm-offset-3 text-center">
	<h1>Cadastro de Produto</h1>		
		<form className="form-inline" role="form">
			<fieldset>
		<label for="codigoDeBarras">Código de Barras</label>
		<input type="text" className="form-control" placeholder="Digite o Código de Barras" />
</fieldset>
		<fieldset className="form-group">
			<label for="descricao">Descrição</label>
			<textarea className="form-control" rows="3"></textarea>
</fieldset>
			<fieldset className="form-group">
			<label for="grupo">Grupo</label>
	 		<input type="text" className="form-control" placeholder="qual grupo do produto?" />

		</fieldset>
	<fieldset className="form-group">
    	<label for="peso">Peso</label>
			<input type="text" className="form-control" placeholder="Digite o Peso" />
  </fieldset>
  <fieldset className="form-group">
    	<label for="preco">Preço</label>
			<input type="text" className="form-control" placeholder="Preço de Custo" />
			<input type="text" className="form-control" placeholder="Preço de Varejo" />
			<input type="text" className="form-control" placeholder="Preço no Atacado" />
			<input type="text" className="form-control" placeholder="Margem de Lucro" />
			<input type="text" className="form-control" placeholder="Estoque Atual" />
		</fieldset>
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

module.exports = Produto;