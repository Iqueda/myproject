var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Cfisico = React.createClass ({
	render: function () {
		return (
<div className="jumbotron col-sm-12 text-center" >	
<h1 >Cliente Fisico</h1>
	<form className="form-inline" role="form">
		<fieldset >
		<label for="nome">Nome:</label>
		<input type="text" className="form-control" placeholder="Nome do Cliente" />
</fieldset>
		<fieldset className="form-group">
			<label for="cpf">Cpf:</label>
			<input type="text" className="form-control" placeholder="Cpf do Cliente" />
</fieldset>
			<fieldset className="form-group">
			<label for="endereco">Endereço:</label>
	 		<input type="text" className="form-control" placeholder="Endereço do Cliente" />
</fieldset>
	<fieldset className="form-group">
    	<label for="peso">Peso:</label>
			<input type="text" className="form-control" placeholder="Digite o Peso" />
  </fieldset>
  <fieldset className="form-group">
    	<label for="preco">Preço:</label>
			<input type="text" className="form-control" placeholder="Preço de Custo" />
			<input type="text" className="form-control" placeholder="Preço de Varejo" />
			<input type="text" className="form-control" placeholder="Preço no Atacado" />
			<input type="text" className="form-control" placeholder="Margem de Lucro" />
			<input type="text" className="form-control" placeholder="Estoque Atual" />
	</fieldset>
   		<div className="form">
            <label>Telefone Fixo:</label>
            <span> - (</span>
            <input type="number" className="form-control" size="2" maxlength="2" placeholder="XXX" />
            <span> )</span>
            <input type="text" className="form-control" size="3" maxlength="3" placeholder="XXX" />
            <input type="text" className="form-control" size="4" maxlength="4" placeholder="XXXX" />
    	</div>
    	<div className="form">
            <label>Celular:</label>
            <span> - (</span>
            <input type="number" className="form-control fields" size="2" maxlength="2" placeholder="XXX" />
            <span> )</span>
            <input type="text" className="form-control fields" size="3" maxlength="3" placeholder="XXX" />
            <input type="text" className="form-control fields" size="4" maxlength="4" placeholder="XXXX" />
    	</div>
    	<fieldset className="form-group">
    	<label for="nascimento">Data de Nascimento:</label>
			<input type="text" className="form-control" placeholder="Dia" />
		<select className="form-control" >
        <option>Janeiro</option>
        <option>Fevereiro</option>
        <option>Março</option>
        <option>Abril</option>
        <option>Maio</option>
        <option>Junho</option>
        <option>Julho</option>
        <option>Agosto</option>
        <option>Setembro</option>
        <option>Outubro</option>
        <option>Novembro</option>
        <option>Dezembro</option>
        </select>		
       	<input type="text" className="form-control" placeholder="Ano" />
		</fieldset>
			<fieldset className="form-group">
			 <label for="sexo">Qual sexo?</label>
    <select className="form-control" >
      <option>Masculino</option>
      <option>Feminino</option>
      </select>
</fieldset>
	<fieldset className="form-group">
		<label for="estadoCivil">Qual seu estado Civil?</label>
   		<select className="form-control" >
			<option>Casado</option>
			<option>Solteiro</option>
			<option>Separado</option>
		</select>
</fieldset>
			<fieldset className="form-group">
			<label for="natural">Natural de:</label>
	 		<input type="text" className="form-control" placeholder="Cidade onde nasceu" />
</fieldset>
<fieldset className="form-group">
			<label for="email">Email:</label>
	 		<input type="text" className="form-control" placeholder="Digite seu email" />
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

module.exports = Cfisico;