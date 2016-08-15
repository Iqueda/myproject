import React from 'react'
import { Link } from 'react-router'

function Pedido () {
	return (
		<div className="jumbotron">	
			<h1 className='text-center'>Cadastro de Pedidos</h1>
			<form className="form-horizontal" role="form">
			<div className='row'>
				<div className='col-sm-8'>
					<label htmlFor="adicionarProdutos">Adicionar Produtos:</label>
					<input type="text" className="form-control" placeholder="Novos Produtos" />
					<label htmlFor="listaProdutos">Lista de Produtos:</label>
					<input type="text" className="form-control" placeholder="Lista de Produtos" />
					<label htmlFor="valorTotal">Valor total do pedido:</label>
					<input type="text" className="form-control" placeholder="Total dos Pedidos" />
				</div>
			</div>
			</form>
			<Link to='/' type='button' className='btn btn-default btn-lg'>Cadastrar</Link>
			<Link to='/' type='button' className='btn btn-primary btn-lg '>Back</Link>
		</div>
	)
}

export default Pedido