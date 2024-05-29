import React from 'react'

const Newsitem = (props) => {
  let { title, description, imageURL, newsUrl, author, date, source } = props;
  return (
    <div>
      <div className="my-3">
        <div className="card">
          <img src={imageURL ? imageURL : "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}
              <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: "50%", zIndex: '1' }}>{source}</span> </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsitem