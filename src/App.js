import React from 'react';
import './App.css';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Main state={props.state} store={props.store} dispatch={props.dispatch} />
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
