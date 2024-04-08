import React from 'react'
import { useData } from '../Context/Context'
import StatsSales from '../Components/StatsSales';
import Head from '../Components/Head';

const summaryStye: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--gap)'
}

const Summary = () => {
  const {data} = useData();

  if(!data) return null;

  return (
    <div style={summaryStye}>
      <Head title='Resumo' description='Resumo das Vendas'/>
      <StatsSales data={data}/>
    </div>
  )
}

export default Summary;