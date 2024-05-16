import React, { Component } from 'react'
import { Newsitem } from './Newsitem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>

        <h2>DailyNewsPaper - Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <Newsitem title="myTitle" description="mydesc" imageURL="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg"/>
          </div>
          <div className="col-md-4">
            <Newsitem title="myTitle" description="mydesc" />
          </div>
          <div className="col-md-4">
            <Newsitem title="myTitle" description="mydesc" />
          </div>
        </div>

      </div>
    )
  }
}

export default News