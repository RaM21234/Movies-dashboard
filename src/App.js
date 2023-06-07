import './App.css';
import Apidata from './components/Apidata';
import Navbar from './components/Navbar';
import Booking from './components/Booking'

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";


function App() {
  return (
    <>


      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Apidata />} />
            <Route exact path="/booking" element={<Booking />} />
           
            
          
          </Routes>
     
      </BrowserRouter>



    </>
  );
}

export default App;

