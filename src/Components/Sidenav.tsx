import Resumo from '../assets/icons/resumo.svg';
import Vendas from '../assets/icons/vendas.svg';
import Webhooks from '../assets/icons/webhooks.svg';
import Configuracoes from '../assets/icons/configuracoes.svg';
import Contato from '../assets/icons/contato.svg';
import Sair from '../assets/icons/sair.svg';
import FintechSvg from '../assets/FintechSvg';
import { NavLink } from 'react-router-dom';

const Sidenav = () => {

  return (
    <nav className='sidenav'>
      <FintechSvg title='Logo Fintech'/>
      <ul>
        <li>
          <img src={Resumo} alt="Resumo" />
          <NavLink to={'/'}>Resumo</NavLink>
        </li>
        <li>
          <img src={Vendas} alt="Vendas" />
          <NavLink to={'/vendas'}>Vendas</NavLink>
        </li>
        <li>
          <img src={Webhooks} alt="Webhooks" />
          <a>Webhooks</a>
        </li>
        <li>
          <img src={Configuracoes} alt="Configurações" />
          <a>Configurações</a>
        </li>
        <li>
          <img src={Contato} alt="Contato" />
          <a>Contato</a>
        </li>
        <li>
          <img src={Sair} alt="Sair" />
          <a>Sair</a>
        </li>
      </ul>
    </nav>
  )
}

export default Sidenav;