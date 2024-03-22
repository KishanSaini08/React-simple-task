// task first question

import React, { useState } from 'react'
import "./App.css"

const App = ({name}) => {

  const text= <h1>Basic react jsx</h1>;
  <br/>


  const records = [
    { id: 1, name: 'kishan' },
    { id: 2, name: 'Ram' },
    { id: 3, name: 'hanuman' }
  ];

   const[visible , setVisible] = useState(true);
  //  const [Disabled, setDisabled] = useState(false);
  const [button1Disabled, setButton1Disabled] = useState(false);
  const [button2Disabled, setButton2Disabled] = useState(true);

  const handleButtonClick = (buttonNumber) => {
    if (buttonNumber === 1) {
      setButton1Disabled(true);
      setButton2Disabled(false);
    } else if (buttonNumber === 2) {
      setButton1Disabled(false);
      setButton2Disabled(true);
    }
  };

   const [inputValue, setInputValue] = useState('');
  
    
    const handleInputChange = (event) => {
      setInputValue(event.target.value); // Update state with the new value
    };
  
  
 
   const [first, setFirst] = useState("");
   const [second, setSecond] = useState("");
   const [sum, setSum] = useState("");


  

  // task six
  const [inputVal, setInputVal] = useState('');
  const [childs, setChilds] = useState([]);

  const handleInpChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleInpSubmit = () => {
    setChilds([...childs, inputVal]);
    setInputVal('');
  };

  const handleChildClick = (index) => {
    const newChild = `${childs[index]}`;
    const newChilds = [...childs];
    newChilds.splice(index + 1, 0, newChild);
    setChilds(newChilds);
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
    } else if (e === 'decrement' ) {
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
     <div>
      <button className='magic' disabled={button1Disabled} onClick={() => handleButtonClick(1)}>Enable</button>
      <button disabled={button2Disabled} onClick={() => handleButtonClick(2)}>Disabled</button>
    </div>

    


          {/* Task fifth */}
          <div>
     
      <input  type="text"  value={inputValue}  onChange={handleInputChange} />
      <p>Input Value: {inputValue}</p>
    </div><br/> 



          {/* Task six */}
          <div>
          <input
        type="text"
        value={inputVal}
        onChange={handleInpChange}
        placeholder="Enter value"
      />
      <button onClick={handleInpSubmit}>Add</button>
      
      <ul>
        {childs.map((child, index) => (
          <li key={index} onClick={() => handleChildClick(index)}>
            {child}
          </li>
        ))}
      </ul>

    
    </div><br/>

      {/* Task seven */}
      <div>
      <input type="number" value={first} onChange={e => setFirst(Number(e.target.value))} />
      +
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


