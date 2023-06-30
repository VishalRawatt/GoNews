import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingBar from'react-top-loading-bar';


// API key =  0e5d90ed80484acb93089641c4c23777

const App = () => {
  const [progress, setProgress] = useState(0)
    return (
      <div>
        <BrowserRouter>
        <LoadingBar
        height={3}
        color='#fff'
        progress={progress}/>
        <Navbar/>
          <Routes>
            <Route exact path="/" element={<News setProgress = {setProgress}  key="general" pageSize= "6" category="general" />} />
            <Route exact path="/entertainment" element={<News setProgress = {setProgress}  key="entertainment" pageSize= "6" category="entertainment" />} />
            <Route exact path="/health" element={<News setProgress = {setProgress}  key="health" pageSize= "6" category="health" />} />
            <Route exact path="/science" element={<News setProgress = {setProgress}  key="science" pageSize= "6" category="science" />} />
            <Route exact path="/sports" element={<News setProgress = {setProgress}  key="sports" pageSize= "6" category="sports" />} />
            <Route exact path="/technology" element={<News setProgress = {setProgress}  key="technology" pageSize= "6" category="technology" />} />
          </Routes>
          {/* <Apicard /> */}
        </BrowserRouter>
      </div>
    )
  }
  export default App
