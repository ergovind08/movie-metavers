// import react from "react";
import Header from "../src/components/Header";
import Cardnew from "../src/components/cardnew";
import MoviesAdd from "./components/AddMovie";

import { Route,Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path="/" element={<Cardnew />}/>
      <Route path="/add" element={<MoviesAdd />}/>
    </Routes>
    
      
    </div>
  ); 
}

export default App;
