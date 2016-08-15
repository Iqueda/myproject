import React from 'react'
import { Link } from 'react-router'

function Produto () {
	return (
		<div className="jumbotron">
			<h1 className='text-center'>Cadastro de Produto</h1>	
				<div className='row'>
				<div className='col-sm-8'>	
				<form className="form-horizontal" role="form">
					<label >Código de Barras</label>
						<input type="text" className="form-control" placeholder="Digite o Código de Barras" />
					<label>Descrição</label>
						<textarea className="form-control" rows="2"></textarea>
					<label>Grupo</label>
						<input type="text" className="form-control" placeholder="qual grupo do produto?" />
					<label>Peso</label>
						<input type="text" className="form-control" placeholder="Digite o Peso" />
					<label>Preço</label>
						<input type="text" className="form-control" placeholder="Preço de Custo" />
						<input type="text" className="form-control" placeholder="Preço de Varejo" />
						<input type="text" className="form-control" placeholder="Preço no Atacado" />
						<input type="text" className="form-control" placeholder="Margem de Lucro" />
						<input type="text" className="form-control" placeholder="Estoque Atual" />
				</form>
			</div>
		</div>
	<Link to='/' type='button' className='btn btn-primary btn-lg '>Back</Link>
</div>
	)
}

export default Produto;