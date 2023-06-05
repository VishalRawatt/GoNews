import React, { Component } from 'react'
import NewsImgData from './components/NewsImgData';
import Spinner from './components/Spinner';

export class NewsCarousel extends Component {
    constructor(){
        super();
        this.state = {
        articles:[],
        loading: false,
        page: 1
        }
    }
    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e34a5c699a854c5b9e78c565c27f2f1b&page=1&pageSize=${this.props.pageSize}` ;
        this.setState({loading:true})
        let data = await fetch(url) ;
        let parsedData = await data.json() ;
        this.setState({articles : parsedData.articles, totalArticleCount : parsedData.totalResults , loading:false})
      }
      handlePrevious = async () => {
        let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e34a5c699a854c5b9e78c565c27f2f1b&page=${this.state.page +1}&pageSize=${this.props.pageSize}` ;
        this.setState({loading:true})
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
        let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e34a5c699a854c5b9e78c565c27f2f1b&page=${this.state.page +1}&pageSize=${this.props.pageSize}` ;
        this.setState({loading:true})
        let data = await fetch(url) ;
        let parsedData = await data.json() ;
        this.setState({articles : parsedData.articles})
        this.setState({
            page : this.state.page + 1 ,
            articles: parsedData.articles ,
            loading: false
        })

    }
  render() {
    return (
      <>
      <h1 className='text-center' style={{backgroundColor:"#0762f6" ,color:"white" ,fontSize:"50px"}}>News Highlights</h1>
        {this.state.loading && <Spinner/>}
        <div className='row'>
            {!this.state.loading && this.state.articles?.map((item)=>{
                return <div className='col-md-12' key={item.url}>
                    <NewsImgData  newsHeading={item.title} newsContent={item.description} newsImage={item.urlToImage} newsUrl={item.url} handleNext={this.handleNext} handlePrevious={this.handlePrevious}/>
                </div>
            })}
        </div>
        </>
    )
  }
}

export default NewsCarousel
