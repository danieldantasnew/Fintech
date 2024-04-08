import React from 'react';
import useFetch from '../Hooks/useFetch';


export type Status = "processando" | "pago" | "falha";
type Payment = "cartao" | "pix" | "boleto";

export interface Sales {
  id: string;
  nome: string;
  preco: number;
  status: Status;
  pagamento: Payment;
  parcelas: number | null;
  data: string;
}

interface InterfaceContext {
  data: Sales[] | null;
  loading: boolean;
  erro: string | null;
  inicio: string;
  final: string;
  setInicio: React.Dispatch<React.SetStateAction<string>>;
  setFinal: React.Dispatch<React.SetStateAction<string>>;
}

export const Context = React.createContext<InterfaceContext | null>(null);

export const useData = ()=> {
  const ContextData = React.useContext(Context);

  if(!ContextData) throw new Error('Você deve passar o contexto dentro do provider!');

  return ContextData;
}

function getDate(daysAgo: number) {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  const day = date.getDate().toString().padStart(2,'0');
  const month = (date.getMonth() + 1).toString().padStart(2,'0');
  
  return`${date.getFullYear()}-${month }-${day}`
}

export const ContextProvider = ({children}: React.PropsWithChildren) => {
  const[inicio, setInicio] = React.useState(getDate(30));
  const[final, setFinal] = React.useState(getDate(0));

  
  const buscaDados = useFetch<Sales[]>(`https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`);

  return (
    <Context.Provider value={{...buscaDados, inicio, final, setInicio, setFinal}}>{children}</Context.Provider>
  )
}
