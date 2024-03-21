// task first question

import React, { useState } from 'react'
import "./App.css"

const App = () => {

  const text= <h1>Basic react jsx</h1>;
  <br/>


  const records = [
    { id: 1, name: 'kishan' },
    { id: 2, name: 'Ram' },
    { id: 3, name: 'hanuman' }
  ];

   const[visible , setVisible] = useState(true);
   const [Disabled, setDisabled] = useState(false);
   const [inputValue, setInputValue] = useState('');
  
    
    const handleInputChange = (event) => {
      setInputValue(event.target.value); // Update state with the new value
    };
  
  
   const [child, setChild] = useState([]);
   const [first, setFirst] = useState(0);
   const [second, setSecond] = useState(0);
   const [sum, setSum] = useState(0);


  const addChild = () => {
    setChild(prev => [...prev,
      <div key={prev.length}>kishan{prev.length + 1}</div>
    ]);
  };

  const calculateSum = () => {
    setSum(first+second);
  };

// Task second answers
const [counter, setCounter] = useState(0);

  // Function to handle both incrementing and decrementing the counter
  const handleCounterChange = (e) => {
    if (e === 'increment') {
      setCounter(counter + 1);
    } else if (e === 'decrement' && counter > 0) {
      setCounter(counter - 1);
    }
  };

   const [searchTerm, setSearchTerm] = useState('');

  const [data, setData] = useState([
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
    { id: 4, name: 'Grapes' },
    { id: 5, name: 'Pineapple' }
  ]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRecords = data.filter(data =>
    data.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
    {/* Task first 1    */}
       {text}

     {/* Task second 2 */}
       <ul>
        {records.map(record => (
          <li key={record.id}>{record.name}</li>
        ))}
      </ul><br/>
       
       {/* Task thired */}

      {visible && <p>I am here</p>}
      <button className='magic' onClick={()=>setVisible(perv =>!perv)}>Magic</button><br/>
      
          {/* Task fourth */}
      <button className='magic' disabled={Disabled}>Enable/disable</button>
      <button onClick={() => setDisabled(prev => !prev)}>
         Button
      </button><br/>


          {/* Task fifth */}
          <div>
     
      <input  type="text"  value={inputValue}  onChange={handleInputChange} />
      <p>Input Value: {inputValue}</p>
    </div><br/> 



          {/* Task six */}
      <div>
        <button className='magic' onClick={addChild}>add</button>
        {child}
      </div>

      {/* Task seven */}
      <div>
      <input type="number" value={first} onChange={e => setFirst(Number(e.target.value))} />
        <input type="number"value={second}onChange={e => setSecond(Number(e.target.value))}/>
        <button onClick={calculateSum}>Calculate Sum</button>
        <p>Sum: {sum}</p>
      </div>

  
     <h1> Task second</h1>
      {/* Task second answers */}
      <div>
        <label ><h2>Counter: {counter}</h2></label>
          
          {/* Buttons to increment and decrement the counter */}
          <button onClick={() => handleCounterChange('increment')}>Increase</button>
          <button onClick={() => handleCounterChange('decrement')}>Decrease</button>
      </div>

      <h1> Task third</h1>
      <div>
     <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredRecords.map(data => (
          <li key={data.id}>{data.name}</li>
        ))}
      </ul>
    </div>


    </div>
  )
}

export default App


