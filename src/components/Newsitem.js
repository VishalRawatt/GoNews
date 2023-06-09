import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export class Newsitem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, date, author ,source } = this.props;
    return (
      <div className='my-2'>
        <div className="card my-4" style={{ width: "20rem" , height:"30rem" }}>
          <img src={!imageUrl ? "https://www.google.com/search?q=news&tbm=isch&sxsrf=APwXEdf5tmR_GXO6L-0x43QWRtAubFgKVg:1685332664637&source=lnms&sa=X&ved=2ahUKEwiggre20Zn_AhUk8jgGHVCIACcQ_AUoBHoECAEQBg&biw=1536&bih=718&dpr=1.25#imgrc=5pxuNJdrqqm0aM" : imageUrl} className="card-img-top" alt="..." width="250px" height="150px" />
          <div className="card-body">
            <h5 className="card-title">{title}<span class="position-absolute top-0 translate-middle badge rounded-pill bg-primary" style={{left: "82%" , zindex:1}}>{source}
            </span></h5>
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
