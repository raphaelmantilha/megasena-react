import React, { useState, useEffect, useRef } from 'react';
import PickedNumbers from './components/PickedNumbers';
import Form from './components/Form';
import Numbers from './components/Numbers';

// Função que não usa nada do React é melhor declará-la foram da function "App"
function getEmptyArray(){
  // todos os elementos são criados com "undefined"
  const array = Array.from({length:60}).map((_,index)=>{
    const id = index+1;
    const description = id.toString().padStart(2,'0'); // coloca '0' na frente de nros que tenham menos q 2 dígitos
    return {
      id,
      description,
      value:id,
      count:0
    };
  });

  return array;
}

function generateNumber(from = 1, to = 60){
  return Math.max(Math.ceil(Math.random() * to),from);
}

 export default function App() {
    const [numbers, setNumbers] = useState(getEmptyArray());
    const [pickedNumbers, setPickedNumbers] = useState([]);
    const [isCalculating,setIsCalculating] = useState(false);
    const [limit,setLimit] = useState(1);

    const canRun = useRef(false);

    useEffect(()=> {
      console.log(canRun.current);
      if(!canRun.current){
        return;
      }

      const interval = setInterval(() => {
        console.log(pickedNumbers);
        if(pickedNumbers.length === 6){
          setIsCalculating(false);
          return;
        }     

        const newNumber = generateNumber();
        const newNumbers = [...numbers];
        const newPickedNumbers = [...pickedNumbers];

        const item = newNumbers.find((item)=>item.value === newNumber);
        item.count++;

        if(item.count === limit) {
          newPickedNumbers.push(item.value);
        }

        setNumbers(newNumbers);
        setPickedNumbers(newPickedNumbers);
      }, 4);

      return () => clearInterval(interval); // setInterval não é do React, por isto q o return tem q ser usado aqui
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isCalculating,numbers,pickedNumbers]);

    const handleLimitChange = (newLimit) =>{
      setLimit(newLimit);
    }

    const handleShuffleClick = () =>{
      setNumbers(getEmptyArray());
      setPickedNumbers([]);
      canRun.current = true;
      setIsCalculating(true);
    }

    return (
      <div className='container'>
        <h1 className='center'>React Megasena</h1>

        <Form data={{limit,isCalculating}} onLimitChange={handleLimitChange} onShuffle={handleShuffleClick}/>
        <Numbers numbers={numbers} pickedNumbers={pickedNumbers}/>
        <PickedNumbers pickedNumbers={pickedNumbers}/>
      </div>
    );
}
