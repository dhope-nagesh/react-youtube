import { combineReducers } from 'redux';
import youtubeAppReducer from './youtubeApp/youtubeAppReducers';

const youtubeCombinedReducer = combineReducers({
  youtubeAppReducer
})

export default youtubeCombinedReducer;
