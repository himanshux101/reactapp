import {useState, useEffect} from 'react'
import axios from 'axios'
import Startups from "./components/startups"
import Preloader from "./components/preloader"
import NewStartup from "./components/newstartup"
import './App.css';

function App() {

  const [startups, setStartups] = useState(null)

  useEffect(() => {

    const getStartups = async () => {
      const res = await axios.get("http://localhost:5001")
      Array.isArray(res.data) && setStartups(res.data)
    }

    getStartups()
  }, [])

  const createStartup = async (text) => {
    const res = await axios.post('http://localhost:5001', {title: text})
    setStartups(res.data)
  }

  return (
    <div className="App">
      <h1 className="heading"> All the Startups </h1>
      {startups ? <Startups startups={startups}/> : <Preloader />}
      <NewStartup createStartup={createStartup}/> 
    </div>
  );
}

export default App;
