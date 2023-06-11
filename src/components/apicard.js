import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Apicard() {
  const [mydata, mydatafunc] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos').then((element) => {
      console.log(element.data);
      mydatafunc(element.data);
    })
  }, [])

  return (
    <div>
      <div className='container'>
        <div className='row'>
          {mydata.map((a) => {
            const { description, title, urlToImage, url } = a
            return (
              <div className='my-2'>
                <div className="card" style={{ width: "18rem" }}>
                  <img src={urlToImage} className="card-img-top" alt="..." width="250px" height="150px" />
                  <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <Link to={`${url}`} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Go somewhere</Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}


export default Apicard