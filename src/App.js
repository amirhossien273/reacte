import { BrowserRouter, Routes, Route,Link, NavLink } from "react-router-dom";

import {
  Login,
  Home,
  NoPage
} from "./pages";
import './App.css';

function App() {
  
  return (
    <div className="App">

      <BrowserRouter>
      <Link to={`/ttttt`}>11111
 </Link>
 <Link to={`/`}>home
 </Link>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login/:id" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
