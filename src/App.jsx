import { useEffect, useState } from 'react';
import Databox from './Databox.jsx'
import Usercard from './Userintro.jsx';
import './App.css'
import './index.css'
const url = import.meta.env.VITE_API_URL;

let bgcolors = [
  'hsl(15, 100%, 70%)',
  'hsl(195, 74%, 62%)',
  'hsl(348, 100%, 68%)',
  'hsl(145, 58%, 55%)',
  ' hsl(264, 64%, 52%)',
  ' hsl(43, 84%, 65%)'
]

function App() {
  const [data, setdata] = useState([]);
  const [timeframe, setTimeframe] = useState('daily');
  const txt_arr = ['Day', 'Week', 'Month']

  useEffect(() => {
    let ignoreResponse = false;

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        if (!ignoreResponse) {
          setdata(response);
        }
      });

    return () => {
      ignoreResponse = true;
    };
  }, []);


  let newtxt = () => {

    switch (timeframe) {
      case ('daily'):
        {
          return txt_arr[0];

        }
      case ('weekly'):
        {
          return txt_arr[1];

        }
      case ('monthly'):
        {
          return txt_arr[2];
        }

    }
  }

  return (
    <>
      <Usercard onTimeframeChange={setTimeframe} 
      />

      {data.map((curentelm, index) =>
      (

        <Databox key={index}
          index={index}
          title={curentelm.title}
          current={curentelm.timeframes[timeframe].current}
          previous={curentelm.timeframes[timeframe].previous}
          text={newtxt()}
          color={bgcolors[index]}
        />

      ))}

    </>
  )
}

export default App
