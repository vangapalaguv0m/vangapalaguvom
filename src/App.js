// import React from 'react';
// import Home from "./pages/Home";
// function App() {
//   return (
//     <div>
//       {/* <Index/> */}
//       <Home/>
      
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/login'; // Import your Login component
import Register from './pages/Register';

function App() {
  return ( 
    <Register/>
  // <BrowserRouter>
  //   <Routes>
    
  //       <Route path="/" element={<Home />} />
  //       <Route path="/login" element={<Login />} />
  //       <Route path="/Register" element={<Register />} />
  //   </Routes>
  //   </BrowserRouter>
    
  );
}

export default App;
