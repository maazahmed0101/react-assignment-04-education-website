import { useState } from 'react'
// import Navbar from './navbar/Navbar'
import './App.css'
// import Main from './main_file/Main'
import Route from './routes/Route';
import Sidebar from './slider/Slider';
import Navbar from './navbar/Navbar';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="container">

      <Route />
      </div>
    </>
  );
}

export default App
