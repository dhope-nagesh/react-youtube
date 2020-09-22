import React, { Component } from 'react';
import SearchBar from '../../components/searchBar/searchBar';
import VideoList from '../../components/videoList/videoList';
import VideoPlayer from '../../components/videoPlayer/videoPlayer';

import { searchYoutubeAPI, selectVideo } from './youtubeAppActions';
import apiClient from '../../apis';

import {connect} from 'react-redux'

import './youtubeApp.css'

class YoutubeApp extends Component {
  onSelectHandler = index => {
    this.props.selectVideo(index)
  }
  componentDidMount() {
    this.props.searchYoutube(apiClient, 'JavaScript')
  }
  
  onSearch = (query) => {
    this.props.searchYoutube(apiClient, query)
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