import React, { useState } from 'react';

function App() {
  const [apiResponse, setApiResponse] = useState('');

  const callApi = async () => {
    try {
      const response = await fetch('/api');
      const data = await response.json();
      setApiResponse(data.status);
    } catch (error) {
      console.error('Error calling API:', error);
    }
  };

  return (
    <div className="App">
      <button onClick={callApi}>test</button>
      {apiResponse && <p>{apiResponse}</p>}
    </div>
  );
}

export default App;
