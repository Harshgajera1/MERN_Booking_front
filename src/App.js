import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './views/Home'
import List from './views/List'
import Hotel from './views/Hotel'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
