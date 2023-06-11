import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) =>{
  const[articles,setarticles] = useState([])
  const[loading,setloading] = useState(true)
  const[page,setpage] = useState(1)
  const[totalResults,settotalResults] = useState(0)
  // document.title = `${capitalizeFirstLetter(props.category)} - GoNewss`;

  const capitalizeFirstLetter = (string) =>{
  return string.charAt(0).toUpperCase() + string.slice(1);

  }
  const updateNews = async() =>{
    props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e34a5c699a854c5b9e78c565c27f2f1b&page=${page}&pageSize=${props.pageSize}`;
    setloading(true);
    props.setProgress(30)
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(70)
    setarticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
    setloading(false);
    props.setProgress(100)
  }
  useEffect(() =>{ 
    //eslint-disable-next-line
  updateNews();
},[])
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e34a5c699a854c5b9e78c565c27f2f1b&page=${page+1}&pageSize=${props.pageSize}`;
    setpage(page+1)
    setloading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(articles.concat(parsedData.articles))
    settotalResults(parsedData.totalResults);
    setloading(false);
  };
    return (
      <>
        <h1 className='text-center' style={{ fontSize: "50px", margin: '20px 0px', color: "#051d4a" , marginTop: "80px" }}>GoNews-Top  {capitalizeFirstLetter(props.category)} Headlines</h1>

        {/* {.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<h4><Spinner/></h4>}>
        <div className='container'>
        <div className='row'>
          {!loading && articles?.map((element) => {
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
News.defaultProps = {
  country: 'in',
  pageSize: 6,
  category: 'general',
  totalResults: 0
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}
export default News
