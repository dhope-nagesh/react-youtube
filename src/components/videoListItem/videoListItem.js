import React from 'react';
import './videoListItem.css';
const VideoListItem = (props) => {
    return(
      <div className="video-list-item">
        <img src={props.thumbnail} alt=""/>
        <div className="video-details">
          <h5 className="video-details-title">{props.title}</h5>
          <p className="video-details-description">{props.description}</p>
        </div>
      </div>
    )
}

export default VideoListItem;