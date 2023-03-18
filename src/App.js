

import './App.css';
import { Provider } from 'react-redux';
import store from './Ho7/Redux/Store';
import RouterComponent from './Ho7/Components/RouterCompo';
// import UsingRef from './day3/UsingRef';
// import UseEffectCleanUp from './day3/Reducer';
// import RouterCompo from './Ho7/RouterCompo';

// import {  Routes, Route, BrowserRouter } from "react-router-dom";
// import Home from "./Components/Home";
// import Error from './Components/Error';
// import Student from './Components/student';
// import Contact from './Components/contact';
// import Function from './Components/Function';
// import { useState } from 'react';
// import State from './day3/State';
// import Effect from './day3/Effect';

function App() {
  return (
    <Provider store={store}>
    <div>
      
       <RouterComponent />
    
      </div>
        </Provider>
  // <UseEffectCleanUp />
  // <UsingRef />
      
  );
}

export default App;
