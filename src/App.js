


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import  { Toaster } from 'react-hot-toast';


import Explorepage from './Components/Explorepage/Explorepage';
import Itemdetails from "./Components/Itemdatails/Itemdetails";
import Author from "./Components/Author/Author";
import Createyour from "./Components/Createyour/Createyour";

function App() {
  return (
    <BrowserRouter>

<Routes>

        <Route path="/" element={<Home />}>
          <Route index element={<Navbar />} />
           <Route path="explore" element={<Explorepage />} />
           <Route path="itemdetails" element={<Itemdetails />} />
           <Route path="author" element={<Author />} />
           <Route path="createyour" element={<Createyour />} />
        </Route>

        
      </Routes>
      <Toaster />

      
    </BrowserRouter>
  );
}

export default App;
