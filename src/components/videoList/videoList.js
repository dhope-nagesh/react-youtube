import React, { Component } from 'react';
import VideoListItem from '../videoListItem/videoListItem';
import './videoList.css'
class VideoList extends Component {
  render() {
    return(
      <div className="video-list-wrapper">
        {
          this.props.videoList.map((video, index) => {
            return(
              <div onClick={(e) => this.props.onSelectHandler(index)} key={index}>
                <VideoListItem
                id={video.id}
                thumbnail={video.thumbnail}
                title={video.title}
                description={video.description} />
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default VideoList;