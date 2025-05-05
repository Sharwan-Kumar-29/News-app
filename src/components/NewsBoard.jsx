import { useEffect } from "react"
import { useState } from "react"
import { NewsItem } from "./NewsItem"
const Api_key = "69a5eff6269d400ab9a929b3f9b60630"

export const NewsBoard = ({ category, country }) => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&country=${country}&apiKey=${Api_key}`
        fetch(url).then(response => response.json()).then(data => setArticles(data.articles))
    }, [category, country])

    return (
        <div>
            <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
            {Array.isArray(articles) && articles.map((news, index) =>
                (<NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />))}
        </div>
    )
}
