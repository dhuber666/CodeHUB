const topicGroupsReducer = (state = [], action) => {
  switch (action.type) {
    case "NEW_TOPIC_GROUP":
      return [...state, action.payload];
    case "FETCH_TOPIC_GROUPS":
      return action.payload;
    default:
      return state;
  }
};

export default topicGroupsReducer;
