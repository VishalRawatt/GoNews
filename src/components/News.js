import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general',
    totalResults: 0
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  capitalizeFirstLetter = (string) =>{
  return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - GoNewss`;
  }
  async updateNews(){
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e34a5c699a854c5b9e78c565c27f2f1b&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(50);
    this.setState({
      articles: parsedData.articles,
      totalArticleCount: parsedData.totalResults,
      loading: false
    })
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData =async () => {
    this.setState({page: this.state.page +1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e34a5c699a854c5b9e78c565c27f2f1b&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalArticleCount: parsedData.totalResults,
      loading: false
    })
  };
  render() {
    return (
      <>
        <h1 className='text-center' style={{ fontSize: "50px", margin: '20px 0px', color: "#051d4a" }}>GoNews-Top  {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>

        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<h4><Spinner/></h4>}>
        <div className='container'>
        <div className='row'>
          {!this.state.loading && this.state.articles?.map((element) => {
            return <div className='col-md-4' key={element.url}>
              <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage} author={element.author} date={element.publishedAt} newsUrl={element.url} source={element.source.name} />
            </div>
          })}
          </div>
          </div>
          </InfiniteScroll>
        </>
    )
  }
}

export default News
