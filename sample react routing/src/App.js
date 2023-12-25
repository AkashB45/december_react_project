import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import CustomNavbar from './components/navbar'
import AboutUs from './components/about'
function App() {
  return (
    <div className="App">
    <CustomNavbar/>
     <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutUs/>}/>
      </Routes>
    </Router> 
    </div>
  );
}

export default App;
