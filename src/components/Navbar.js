import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" style={{fontSize:"30px"}} href="/">GoNews</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Technology</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/">Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/">Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/">Entertainment</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/">General</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/">Science</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/about">Sports</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar
