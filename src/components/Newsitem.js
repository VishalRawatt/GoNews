import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import image from './photo.png' ;

export class Newsitem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, date, author, source } = this.props;
    return (
      <div className='my-2'>
        <div className="card my-4" style={{ width: "20rem", height: "auto" }}>
          <div style={{display:"flex", justifyContent:"flex-end", position:"absolute", right:0}}>
            <span class="badge rounded-pill bg-primary">{source}
            </span>
            </div>
          <img src={!imageUrl ? `${image}` : imageUrl} className="card-img-top" alt="..." width="250px" height="150px" />
          <div className="card-body">
            <h5 className="card-title">{title}
            </h5>
            <p className="card-text">{description}...</p>
            <p className='card-text'><small className='text-muted'>By {author ? author : "Unknown"} <br /> on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}


export default Newsitem
