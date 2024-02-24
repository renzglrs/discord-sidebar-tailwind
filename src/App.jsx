import { useState } from 'react';
import Sidebar from './Sidebar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex">
        <Sidebar /> 
      </div>
    </>
  )
}

export default App
