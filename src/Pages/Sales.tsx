import { NavLink } from 'react-router-dom';
import { useData } from '../Context/Context';
import Head from '../Components/Head';

const salesStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--gap-s)'
}

const Sales = () => {
  const {data} = useData();

  if(!data) return null;
  return (
    <>
      <Head title='Vendas' description='Todas as Vendas da Fintech'/>
      <ul style={salesStyle}>
        {data.map((sale)=> 
        <li key={sale.id} className='box sales' >
          <NavLink to={`${sale.id}`}>{sale.id}</NavLink>
          <div>{sale.nome}</div>
          <div>{sale.preco.toLocaleString('pt-br', {currency: 'BRL', style: 'currency'})}</div>
        </li>)}
      </ul>
    </>
  )
}

export default Sales;