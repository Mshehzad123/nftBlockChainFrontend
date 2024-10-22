


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import  { Toaster } from 'react-hot-toast';
import Explorepage from './Components/Explorepage/Explorepage';
import Itemdetails from "./Components/Itemdatails/Itemdetails";
import Author from "./Components/Author/Author";
import Createyour from "./Components/Createyour/Createyour";
import NoPage from "./Components/NoPage";
import Signup from "./Admin/AdminDashborad";
import AdminLayout from "./Admin/AdminLayout";
import Adminblogs from "./Admin/Adminblogs";
import Ainft from "./Components/Ainft.jsx/Ainft";
import Blockchain from "./Components/BrowseCategory/Blockchain";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
//hello  

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <BrowserRouter>

<Routes>

        <Route path="/" element={<Home />}>
          <Route index element={<Navbar />} />
           <Route path="explore" element={<Explorepage />} />
           <Route path="itemdetails" element={<Itemdetails />} />
           <Route path="author" element={<Author />} />
           <Route path="createyour" element={<Createyour />} />
           <Route path="ainft" element={<Ainft />} />
           <Route path="blockchain" element={<Blockchain />} />

          <Route path="*" element={<NoPage />} />

        </Route>
          <Route path="/admin" element={<AdminLayout />}>
          <Route path="home" element={<Home />}/>
          <Route path="signup" element={<Signup />} />
          <Route path="blogs" element={<Adminblogs />} />
          <Route path="*" element={<NoPage />} />
        </Route> 

        
      </Routes>
      <Toaster />

      
    </BrowserRouter>
  );
}

export default App;
