import React, { Component } from 'react';
import './videoPlayer.css'
class VideoPlayer extends Component {
  render() {
    let videoSrc = `https://www.youtube.com/embed/${this.props.video.id}?autoplay=1`
    return(
      <div className="video-player">
        <iframe width="600" height="350" title="sometitle" src={videoSrc}></iframe>
        <h2>
          {this.props.video.title}
        </h2>
        <p>
          {this.props.video.description}
        </p>
      </div>
    )
  }
}

export default VideoPlayer;