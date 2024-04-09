import React from 'react'
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { Sales } from '../Context/Context';

interface Graphs {
  data: string;
  pago: number;
  processando: number;
  falha: number;
}

const styleGraph: React.CSSProperties = {
  minHeight: "0vh", 
  backgroundColor: "white", 
  borderRadius: "var(--gap)",
  padding: "var(--gap)"
}

function convertDataForGraph(dataF: Sales[]) {
  const totalDePago = dataF.reduce((acc: {[key: string]: Graphs}, item)=> {
    const dia = item.data.split(' ')[0];
    if(!acc[dia]) {
      acc[dia] = {
        data: dia.substring(5),
        pago: 0,
        processando: 0,
        falha: 0,
      }
      acc[dia][item.status] += item.preco;
    }
    return acc;
  }, {});

  return Object.values(totalDePago);
}

const Graph = ({data}: {data: Sales[]}) => {

  return (
    <div style={styleGraph}>
      <ResponsiveContainer width="99%" height={400}>
        <LineChart
          data={convertDataForGraph(data)}
        >
          <XAxis dataKey="data" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pago" stroke="#82ca2a" strokeWidth={3} />
          <Line type="monotone" dataKey="processando" stroke="#fb1" strokeWidth={3} />
          <Line type="monotone" dataKey="falha" stroke="red" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Graph;