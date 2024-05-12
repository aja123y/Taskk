import './App.css';
import { Login } from './Componect/Login/Login';
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import Dashbord from './Componect/Dashboard/Dashbord';
import HomePage from './Componect/HomePage/HomePage';
import Condidate from './Componect/Condi/Condidate'


function App() {
  return (

    <div> 

      <BrowserRouter>
      <HomePage/>

      <Routes>
        <Route path="/" element={<Dashbord/>}/>
        <Route path="/condidate" element={<Condidate/>} />
      </Routes>
    </BrowserRouter>
    {/* <Login/> */}
      </div>
  );
}

export default App;
