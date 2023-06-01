import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export class NewsImgData extends Component {
  render() {
    let {newsImage , newsContent , newsHeading , newsUrl ,handleNext ,handlePrevious} =this.props ;
    return (
      <div>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner" style={{width:"100%" ,height:"100vh"}}>
    <div className="carousel-item active">
      <img src={newsImage} style={{height:"100vh"}} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 style={{fontFamily:"roboto" ,fontSize:"50px" , textShadow:"-1px 1px 10px #000"}}>{newsHeading}</h5>
        <p style={{fontSize:"20px"}}>{newsContent} </p>
        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More...</a>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" onClick={handlePrevious} data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually">Previous</span>
  </button>
  <button className="carousel-control-next" onClick={handleNext} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually">Next</span>
  </button>
</div>
        </div>
    )
  }
}

export default NewsImgData
