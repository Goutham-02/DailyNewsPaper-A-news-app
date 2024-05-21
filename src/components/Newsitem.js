import React, { Component } from 'react'

export class Newsitem extends Component {

  render() {
    let { title, description, imageURL, newsUrl } = this.props;
    return (
      <div>
        <div className="my-3">
          <div className="card" style={{ width: "18rem" }}>
            <img src={imageURL?imageURL:"https://static.toiimg.com/thumb/msid-110277122,imgsize-1089299,width-900,height-1200,resizemode-6/110277122.jpg"} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Newsitem