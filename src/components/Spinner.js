import React, { Component } from 'react'
import loading from './spinner.gif'

export class Spinner extends Component {
  render() {
    return (
    <div className='container'  style={{width:"100%",height:"100vh" ,marginTop:"100px"}}>
      <div className='text-center mx-4'>
        <img src={loading} style={{marginTop:"50px"}} alt="loading" />
      </div>
      </div>
    )
  }
}

export default Spinner
