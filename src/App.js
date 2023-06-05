import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import NewsCarousel from './components/NewsCarousel';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


// API key =  0e5d90ed80484acb93089641c4c23777

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route exact path="/general"element={<News key="general" pageSize={6} country="in" category="general"/>}/>
        <Route exact path="/entertainment"element={<News key="entertainment" pageSize={6} country="us" category="entertainment"/>}/>
        <Route exact path="/health"element={<News key="health" pageSize={6} country="in" category="health"/>}/>
        <Route exact path="/science"element={<News key="science" pageSize={6} country="in" category="science"/>}/>
        <Route exact path="/sports"element={<News key="sports" pageSize={6} country="in" category="sports"/>}/>
        <Route exact path="/technology" element={<News key="technology" pageSize={6} country="in" category="technology"/>}/>
        </Routes>
        <NewsCarousel pageSize={1}/>
        </BrowserRouter>
      </div>
    )
  }
}
