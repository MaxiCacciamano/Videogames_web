import './App.css';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Route, Routes} from 'react-router-dom';
import {getAll} from '../src/redux/Actions'
import {Landing} from '../src/Components/Landing/Landing.jsx'
import {Home} from '../src/Components/Home/Home.jsx'

function App() {
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(getAll());
  },[])


  return (
    <div className="App">
      <h1>Henry Videogames</h1>
      <Routes>
        <Route exact path='/' element={<Landing/>}/>
        <Route PATH='/home' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
