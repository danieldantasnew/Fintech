import React from 'react'
import { Sales, Status } from '../Context/Context';

const styleContentStats: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  gap: "var(--gap)"
}

const StatsSales = ({data}: {data: Sales[]}) => {

  function convertValueToTotalOf(statusValue: Status, equal = true) {
    
    return data
      .filter(
        (item)=> equal ? item.status === statusValue : item.status !== statusValue)
      .reduce((acc, item)=> item.preco + acc, 0)
      .toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
  }

  return (
    <div style={styleContentStats} className='flex'>
      <div className='box'>
        <h2>Vendas</h2>
        <p>{convertValueToTotalOf('falha', false)}</p>
      </div>
      <div className='box'>
        <h2>Recebido</h2>
        {<p>{convertValueToTotalOf('pago')}</p>}
      </div>
      <div className='box'>
        <h2>Processando</h2>
        <p>{convertValueToTotalOf('processando')}</p>
      </div>
    </div>
  )
}

export default StatsSales;