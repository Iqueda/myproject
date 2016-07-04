var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Cjuridico = React.createClass ({
	render: function() {
		return (
			<div className="jumbotron col-sm-12 text-center" >	
<h1 >Cliente Juridico</h1>
	<form className="form-inline" role="form">
<fieldset className="form-group">
			<label for="razaoSocial">Razão Social:</label>
	 		<input type="text" className="form-control" placeholder="Razão Social do Cliente" />
</fieldset>
<fieldset className="form-group">
			<label for="cnpj">CNPJ:</label>
	 		<input type="text" className="form-control" placeholder="CNPJ do Cliente" />
</fieldset>
<fieldset className="form-group">
			<label for="endereco">Endereço:</label>
	 		<input type="text" className="form-control" placeholder="Endereço do Cliente" />
</fieldset>
	<div className="form">
            <label>Telefone:</label>
            <span> - (</span>
            <input type="number" className="form-control" size="2" maxlength="2" placeholder="XXX" />
            <span> )</span>
            <input type="text" className="form-control" size="3" maxlength="3" placeholder="XXX" />
            <input type="text" className="form-control" size="4" maxlength="4" placeholder="XXXX" />
    	</div>
<fieldset className="form-group">
			<label for="email">Email:</label>
	 		<input type="text" className="form-control" placeholder="Email do Cliente" />
</fieldset>  	
<fieldset className="form-group">
			<label for="site">Site:</label>
	 		<input type="text" className="form-control" placeholder="Site do Cliente" />
</fieldset>
<fieldset className="form-group">
			<label for="contato">Pessoa para contato:</label>
	 		<input type="text" className="form-control" placeholder="Pessoa para contato no Cliente" />
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

module.exports = Cjuridico;