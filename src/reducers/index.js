import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";

import topicGroupsReducer from "./topicGroupsReducer";
import topicsReducer from "./topicsReducer";

const rootReducer = combineReducers({
  form: formReducer,
  topicGroups: topicGroupsReducer,
  topics: topicsReducer
});

export default rootReducer;
