import {GET_DATA, SELECT_VIDEO } from './constants'


function youtubeAppReducer(state = {currentVideo: null, data:[]}, action) {
  switch(action.type) {
    case GET_DATA:
          const data = action.data.map((video) => {
            return {
              id: video.id,
              title: video.title,
              description: video.description,
              thumbnail: video.thumbnails.default.url
            }
          })
          return {...state.data, data}
    case SELECT_VIDEO:
          const currentVideo = state.data[action.index]
          return {...state, currentVideo}
    default:
          return state;
  }
}


export default youtubeAppReducer;