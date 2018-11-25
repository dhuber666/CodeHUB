const topicsReducer = (state = [], action) => {
  switch (action.type) {
    case "NEW_TOPIC":
      return [...state, action.payload];
    case "FETCH_TOPICS":
      return action.payload;
    default:
      return state;
  }
};

export default topicsReducer;
