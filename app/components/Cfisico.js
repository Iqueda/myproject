import React from 'react';
import { Link } from 'react-router';

function Cfisico () {
			return (
<div className="jumbotron" >	
<h1 className='text-center'>Cliente Fisico</h1>
	<form className="form-horizontal" role="form">
		<div className='row'>
            <div className='col-sm-6'>
                <label >Nome:</label>
		          <input type="text" className="form-control" placeholder="Nome do Cliente" />
		        <label >Cpf:</label>
		          <input type="text" className="form-control" placeholder="Cpf do Cliente" />
		        <label >Endereço:</label>
		          <input type="text" className="form-control" placeholder="Endereço do Cliente" />
    	        <label >Peso:</label>
    	           <input type="text" className="form-control" placeholder="Digite o Peso" />
      	        <label >Preço:</label>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-4'>
    			<input type="text" className="form-control" placeholder="Preço de Custo" />
    			<input type="text" className="form-control" placeholder="Preço de Varejo" />
    			<input type="text" className="form-control" placeholder="Preço no Atacado" />
    			<input type="text" className="form-control" placeholder="Margem de Lucro" />
    			<input type="text" className="form-control" placeholder="Estoque Atual" />
            </div>
        </div>
        <label>Telefone Fixo:</label>
            <div className="row">
                <div className="col-sm-2">
                    <input type="number" className="form-control" placeholder="(XX)" />
                </div>
                <div className='col-sm-3'>
                    <input type="text" className="form-control" placeholder="XXX" />
                </div>
                </div>
        <label>Celular:</label>
        <div className="row">
            <div className='col-sm-2'>
                <input type="number" className="form-control fields" placeholder="(XX)" />
            </div>
            <div className='col-sm-3'>
                <input type="text" className="form-control fields" placeholder="XXX" />
            </div>
        	</div>
    	<label >Data de Nascimento:</label>
        <div className='row'>
            <div className='col-sm-2'>
		        <input type="text" className="form-control" placeholder="Dia" />
		    </div>
        <div className='col-sm-3'>
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
        </div>
        <div className='row'>
            <div className='col-sm-3'>	
       	        <input type="text" className="form-control" placeholder="Ano" />
            </div>
        </div>
        <div className='col-sm-6'>
	    <label >Qual sexo?</label>
            <select className="form-control" >  
                <option>Masculino</option>
                <option>Feminino</option>
            </select>
		<label >Qual seu estado Civil?</label>
   		<select className="form-control" >
			<option>Casado</option>
			<option>Solteiro</option>
			<option>Separado</option>
		</select>
		    <label >Natural de:</label>
 		        <input type="text" className="form-control" placeholder="Cidade onde nasceu" />
		            <label >Email:</label>
 		        <input type="text" className="form-control" placeholder="Digite seu email" />
            </div>
        </div>
	</form>
    <Link to='/' type='button' className='btn btn-primary btn-lg '>Back</Link>
</div>
	)
}

export default Cfisico;