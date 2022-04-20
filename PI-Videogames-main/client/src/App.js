import './App.css';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Route, Routes} from 'react-router-dom';

import {getAll, getGenres, getVideogamesDetail } from '../src/redux/Actions';
import {Landing} from '../src/Components/Landing/Landing.jsx';
import {Home} from '../src/Components/Home/Home.jsx';
import {Detail} from '../src/Components/Detail/Detail.jsx';
import {Form} from '../src/Components/Form/Form.jsx';


function App() {
  const dispatch = useDispatch();


  useEffect(() =>{
    dispatch(getAll());
  },[{}])

  useEffect(()=>{
    dispatch(getGenres())
  }, [])


  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Landing/>}/>
        <Route exact path='/home' element={<Home/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/createVideogames" element={<Form/>} />
      </Routes>
    </div>
  );
}

export default App;
