import { combineReducers, createStore } from 'redux';
import EditorReducer from './reducer_editor';

const rootReducer = combineReducers({
  editor: EditorReducer
});

const store = createStore(rootReducer);

export default rootReducer;
