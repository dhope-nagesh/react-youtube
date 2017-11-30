import {GET_DATA, SELECT_VIDEO } from './constants'

export const getData = (data) => {
  return {
    type: GET_DATA,
    data
  }
}

export const selectVideo = (index) => {
  return {
    type: SELECT_VIDEO,
    index
  }
}
// Async 
export const searchYoutubeAPI = (client, query) => {
  return function(dispatch) {
    client.searchVideos(query,10).then((data) =>{
      dispatch(getData(data))
    })
  }
}


