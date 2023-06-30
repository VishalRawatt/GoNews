import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) =>{
  const[articles,setarticles] = useState([])
  const[loading,setloading] = useState(true)
  const[page,setpage] = useState(1)
  const[totalArticles,settotalArticles] = useState(0)
  // document.title = `${capitalizeFirstLetter(props.category)} - GoNewss`;

  const capitalizeFirstLetter = (string) =>{
  return string.charAt(0).toUpperCase() + string.slice(1);

  }
  const updateNews = async() =>{
    props.setProgress(10)
    const url = `https://gnews.io/api/v4/top-headlines?category=${props.category}&apikey=3b3c568ce889717c2fc22918f69ffad0&page=${page}&pageSize=${props.pageSize}`;
    setloading(true);
    props.setProgress(30)
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(70)
    setarticles(parsedData.articles);
    settotalArticles(parsedData.totalArticles);
    setloading(false);
    props.setProgress(100)
  }
  useEffect(() =>{
    updateNews()
},[]);
  const fetchMoreData = async () => {
    const url = `https://gnews.io/api/v4/top-headlines?category=${props.category}&apikey=3b3c568ce889717c2fc22918f69ffad0&page=${page}&pageSize=${props.pageSize}`;
    setpage(page+1)
    setloading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(articles.concat(parsedData.articles))
    settotalArticles(parsedData. totalArticles);
    setloading(false);
  };
    return (
      <>
        <h1 className='text-center' style={{ fontSize: "50px", margin: '20px 0px', color: "#051d4a" , marginTop: "80px" }}>WorldNews-{capitalizeFirstLetter(props.category)} Headlines</h1>
        {/* {.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !==  totalArticles}
          loader={<h4><Spinner/></h4>}>
        <div className='container'>
        <div className='row'>
          {!loading && articles?.map((element) => {
            return <div className='col-md-4' key={element.url}>
              <Newsitem title={element.title} description={element.description} imageUrl={element.image} author={element.source.name} date={element.publishedAt} newsUrl={element.url} source={element.source.name} />
            </div>
          })}
          </div>
          </div>
          </InfiniteScroll>
        </>
    )
  }
News.defaultProps = {
  pageSize: 6,
  category: 'general',
   totalArticles: 0
}
News.propTypes = {
  pageSize: PropTypes.number,
  category: PropTypes.string
}
export default News
