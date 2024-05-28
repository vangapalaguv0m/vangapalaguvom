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
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/login'; // Import your Login component
import Signup from './pages/Register'; // Import your Signup component

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/Register" component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
