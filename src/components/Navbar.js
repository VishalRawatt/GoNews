import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import { Link } from 'react-router-dom';
import './style.css'

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" style={{ fontSize: "30px" ,marginLeft:"20px" }} to="/">World<span style={{color: "#b3f2ff" , fontSize: "35px"}}>News</span></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/technology">Technology</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/sports">Sports</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
