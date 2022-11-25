import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
     <Navbar />

     <Routes>
     <Route path='/' element={<Home/>}/>
     </Routes>


     <Login/>

    </div>
  );
}

export default App;
