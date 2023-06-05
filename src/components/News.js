import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps ={
    country: 'in' ,
    pageSize: 6 ,
    category: 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor(){
    super() ;
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }
  
  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e34a5c699a854c5b9e78c565c27f2f1b&page=1&pageSize=${this.props.pageSize}` ;
    this.setState({loading: true});
    let data = await fetch(url) ;
    let parsedData = await data.json() ;
    this.setState({articles : parsedData.articles,
       totalArticleCount : parsedData.totalResults ,
        loading:false})
  }
  handlePrevious = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e34a5c699a854c5b9e78c565c27f2f1b&page=${this.state.page +1}&pageSize=${this.props.pageSize}` ;
    this.setState({loading: true});
    let data = await fetch(url) ;
    let parsedData = await data.json() ;
    this.setState({articles : parsedData.articles})
    this.setState({
        page : this.state.page - 1 ,
        articles: parsedData.articles ,
        loading : false
    })
  }
   handleNext = async() => {
    if (!(this.state.page + 1> Math.ceil(this.state.totalResults/this.props.pageSize)))
    {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e34a5c699a854c5b9e78c565c27f2f1b&page=${this.state.page +1}&pageSize=${this.props.pageSize}` ;
    this.setState({loading: true});
    let data = await fetch(url) ;
    let parsedData = await data.json() ;
    this.setState({articles : parsedData.articles})
    this.setState({
        page : this.state.page +1 ,
        articles: parsedData.articles ,
        loading: false
    })
  }
}
  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center' style={{fontSize:"50px" , margin:'20px 0px' , color:"#051d4a"}}>GoNews Top Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className='row'>
        {!this.state.loading && this.state.articles?.map((element)=>{
          return <div className='col-md-4' key={element.url}>
        <Newsitem  title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div>
  })}
  <div className="container d-flex justify-content-center">
  <button disabled={this.state.page<=1} type="button" className="btn btn-dark mx-auto" onClick={this.handlePrevious}>&larr; Previous</button>
  <button disabled={this.state.page+1 >Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-dark mx-auto" onClick={this.handleNext}>Next &rarr;</button>
  </div>
        </div>
      </div>
    )
  }
}

export default News
