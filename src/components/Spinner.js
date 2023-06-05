import React, { Component } from 'react'
import style from './style.css'

export class Spinner extends Component {
  render() {
    return (
    <div className='container'  style={{width:"100%",height:"100vh" ,marginTop:"100px"}}>
      <div className='loading' style={style}>
      </div>
      </div>
    )
  }
}

export default Spinner
