import './App.css';
import React from 'react';
import Header from './Components/Header/Header.jsx';
import Main from './Components/Main/Main';
// import '..Components/Header/Header.css'; 

const App = ({}) => {
  return ( 
    <section id='App'>
      <div>
      <Header/>
      <Main/>
      </div>
    </section>
   );
};
 
export default App;
