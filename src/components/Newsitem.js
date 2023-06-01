import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export class Newsitem extends Component {
  render() 
  {
    let {title, description, imageUrl, newsUrl} = this.props ;
    return (
      <div className='my-2'>
      <div className="card" style={{width: "18rem"}}>
          <img src={!imageUrl?"https://www.google.com/search?q=news&tbm=isch&sxsrf=APwXEdf5tmR_GXO6L-0x43QWRtAubFgKVg:1685332664637&source=lnms&sa=X&ved=2ahUKEwiggre20Zn_AhUk8jgGHVCIACcQ_AUoBHoECAEQBg&biw=1536&bih=718&dpr=1.25#imgrc=5pxuNJdrqqm0aM":imageUrl} className="card-img-top" alt="..." width="250px" height="150px"/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Go somewhere</a>
          </div>
          </div>
          </div>
    )
  }
}


export default Newsitem
