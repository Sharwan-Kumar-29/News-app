export const NewsItem = ({title,description,src,url})=>{
    return(
        <div className="my-3 mx-3 px-2 py-2 card bg-dark text-light mb-3 d-inline-block" style={{maxWidth:"345px"}}>
        <img src={src} style={{height:"200px",width:"327px"}} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title.slice(0,50)} ...</h5>
          <p className="card-text">
  {description 
    ? (description.length > 90 ? description.slice(0, 90) + "..." : description)
    : "Stay updated with the latest headlines and breaking news from around the world..."}
</p>

          <a href={url} className="btn btn-primary">Read More</a>
        </div>
      </div>
    )
}