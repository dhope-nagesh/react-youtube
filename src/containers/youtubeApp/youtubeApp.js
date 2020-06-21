import React, { Component } from 'react';
import SearchBar from '../../components/searchBar/searchBar';
import VideoList from '../../components/videoList/videoList';
import VideoPlayer from '../../components/videoPlayer/videoPlayer';

import { searchYoutubeAPI, selectVideo } from './youtubeAppActions';
import Youtube from 'simple-youtube-api';

import {connect} from 'react-redux'

import './youtubeApp.css'

const client = new Youtube('AIzaSyC_tGbIItJE6PxLgjY5rQ9u7-TM1TnQQoM')

class YoutubeApp extends Component {
  onSelectHandler = index => {
    this.props.selectVideo(index)
  }
  componentDidMount() {
    this.props.searchYoutube(client, 'JavaScript')
  }
  
  onSearch = (query) => {
    this.props.searchYoutube(client, query)
  }
  
  render() {
    const videoList = this.props.videoList === undefined? []: this.props.videoList
    const isPlayerDisplay = !(this.props.currentVideo === null || this.props.currentVideo === undefined)
    if(videoList !== [] && !isPlayerDisplay) {
      this.props.selectVideo(0)
    }
    return(
      <div className="youtube-app-wrapper">
        <SearchBar onSearch={this.onSearch}/>
        <div className="youtube-app-main-wrapper">
          {
              (isPlayerDisplay) &&
              <VideoPlayer video={this.props.currentVideo}/>
          }
          <VideoList videoList={videoList} onSelectHandler={this.onSelectHandler}/>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  console.log(state)
  return {
    videoList: state.youtubeAppReducer.data,
    currentVideo: state.youtubeAppReducer.currentVideo
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    searchYoutube: (client, query) => {
      dispatch(searchYoutubeAPI(client, query))
    },
    selectVideo: (index) => {
      dispatch(selectVideo(index))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(YoutubeApp);