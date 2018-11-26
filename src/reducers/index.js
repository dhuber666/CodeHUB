import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";

import topicGroupsReducer from "./topicGroupsReducer";
import topicsReducer from "./topicsReducer";
import postsReducer from "./postsReducer";

const rootReducer = combineReducers({
  form: formReducer,
  topicGroups: topicGroupsReducer,
  topics: topicsReducer,
  posts: postsReducer
});

export default rootReducer;
