import React from 'react'
import { Link } from 'react-router'

function Sidebar () {
    return (
        <div>
            <Link to='/clienteFisico' type='button' className='btn btn-primary btn-lg btn-block '>Cadastro Cliente Fisico</Link>
            <Link to='/clienteJuridico' type='button' className='btn btn-primary btn-lg btn-block '>Cadastro Cliente Juridico</Link>
            <Link to='/pedido' type='button' className='btn btn-primary btn-lg btn-block'>Cadastro de Pedido</Link>
            <Link to='/produto' type='button' className='btn btn-primary btn-lg btn-block'>Cadastro de Produto</Link>
        </div>
    )   
}

export default Sidebar