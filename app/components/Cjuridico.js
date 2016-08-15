import React from 'react'
import { Link } from 'react-router'

function Cjuridico () {
	return (
		<div className="jumbotron" >	
			<h1 className='text-center'>Cliente Juridico</h1>
				<form className="form-horizontal" role="form">
	<div className='row'>
		<div className='col-sm-6'>
			<label htmlFor="razaoSocial">Razão Social:</label>
			<input type="text" className="form-control" placeholder="Razão Social do Cliente" />
			<label htmlFor="cnpj">CNPJ:</label>
			<input type="text" className="form-control" placeholder="CNPJ do Cliente" />
			<label htmlFor="endereco">Endereço:</label>
			<input type="text" className="form-control" placeholder="Endereço do Cliente" />
			</div>
		</div>	
		<label>Telefone:</label>
        <div className='row'>
      		<div className='col-sm-2'>
       			<input type="number" className="form-control" placeholder="(XX)" />
       		</div>
    	    <div className='col-sm-3'>
       			<input type="text" className="form-control" placeholder="XXX" />
        	</div>
        </div>
    	<div className='row'>
			<div className='col-sm-6'>
				<label htmlFor="email">Email:</label>
				<input type="text" className="form-control" placeholder="Email do Cliente" />
				<label htmlFor="site">Site:</label>
				<input type="text" className="form-control" placeholder="Site do Cliente" />
				<label htmlFor="contato">Pessoa para contato:</label>
				<input type="text" className="form-control" placeholder="Pessoa para contato no Cliente" />
			</div>
		</div>
	</form>
	<Link to='/'type='button' className='btn btn-primary btn-lg '>Back</Link>
</div>
		)
	}

export default Cjuridico