//import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';

const App = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState(0);

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setOutput(eval(input).toString());
      } catch (error) {
        setOutput('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setOutput(0);
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.','C', '+',
     '=',
  ];

  return (
    <div className="calculator bg-gray-900 max-w-md mx-auto p-6 border rounded-md shadow-md">
      <input
        type="text"
        className="input-field text-3xl mb-4 p-2 w-full bg-black text-white rounded"
        value={input}
        readOnly
      />
      <div className="output-section min-h-16">
        <div className="output text-3xl font-bold mb-4 bg-black text-white rounded p-2">
          {output}
        </div>
      </div>
      <div className="buttons grid grid-cols-4 gap-2 mt-4">
        {buttons.map((button, index) => (
          <button
            key={index}
            className={`button ${
              button === '=' ? 'col-span-4' : 'col-span-1'
            } bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded`}
            onClick={() => handleButtonClick(button)}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;