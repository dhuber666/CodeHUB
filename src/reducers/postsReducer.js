const postsReducer = (state = [], action) => {
  switch (action.type) {
    case "NEW_POST":
      return [...state, action.payload];
    case "FETCH_POSTS":
      return action.payload;
    case "FETCH_POSTS_WITH_TOPIC_ID":
      console.log("hello from posts reducer", action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default postsReducer;
