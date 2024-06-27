import './App.css';
import Post from './Post';
import { useState } from 'react';

function App() {
  const [data, setdata] = useState(false);
  return (
    <div className="App">
      <button className='btn' onClick={() => setdata(!data)}>
        {data ?"HIDE POST":"GET POST"}
      </button>
      {data ?<Post />:""}
    </div>
  );
}

export default App;
