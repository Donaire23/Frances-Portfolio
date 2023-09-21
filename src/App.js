import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/home';
import NavBar from './components/navbar';


function App() {

  return (
    <>
     <BrowserRouter>
      <NavBar/>
      <Home/>
    </BrowserRouter>
    </>
  );


}

export default App;
