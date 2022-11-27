import { useEffect, useState } from 'react';
import CriptoData from './Components/Criptodata'
import './App.css';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false').then(response => response.json()).then(json => setData(json))
  }, [])

  return (
    <div className="App">
      <table> 
        {data.map((cripto) => {
          return (<CriptoData cripto={cripto} />)
        })}
      </table>
    </div>
  );
}

export default App;
