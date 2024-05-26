import React, { Component } from 'react'

export class Newsitem extends Component {

  render() {
    let { title, description, imageURL, newsUrl } = this.props;
    return (
      <div>
        <div className="my-3">
          <div className="card">
            <img src={imageURL ? imageURL : "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg"} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Newsitem