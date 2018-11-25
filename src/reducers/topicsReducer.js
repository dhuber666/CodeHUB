const topicsReducer = (state = [], action) => {
  switch (action.title) {
    case "NEW_TOPIC":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default topicsReducer;
