import useFetch from '../Hooks/useFetch';
import { useParams } from 'react-router-dom';
import { Sales } from '../Context/Context';
import Loading from '../Components/Loading';


const Sale = () => {
  const {id} = useParams();
  const {data, loading} = useFetch<Sales>(`https://data.origamid.dev/vendas/${id}`);

  if(loading === true) return <Loading/>
  if(data === null) return null;

  return (
    <div className='sale'>
      <p className='box'>ID: {data.id}</p>
      <p className='box'>Nome: {data.nome}</p>
      <p className='box'>Preço: {data.preco.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</p>
      <p className='box'>Status: {data.status}</p>
      <p className='box'>Pagamento: {data.pagamento}</p>
    </div>
  )
}

export default Sale;