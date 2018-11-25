import axios from "axios";

/* Topic Groups */

export const createTopicGroup = (title, subTitle) => {
  return dispatch => {
    const newTopicGroup = {
      title,
      subTitle
    };

    axios
      .post("http://localhost:3001/createTopicGroup", newTopicGroup)
      .then(({ data }) => {
        console.log(data);
        dispatch({
          type: "NEW_TOPIC_GROUP",
          payload: data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const fetchTopicGroups = () => {
  return dispatch => {
    axios.get("http://localhost:3001/fetchTopicGroups").then(({ data }) => {
      dispatch({
        type: "FETCH_TOPIC_GROUPS",
        payload: data
      });
    });
  };
};

/* Topics */

export const createTopic = (topicGroupId, title, subTitle) => {
  const newTopic = {
    id: topicGroupId,
    title,
    subTitle
  };

  return dispatch => {
    axios
      .post("http://localhost:3001/createTopic", newTopic)
      .then(({ data }) => {
        return dispatch({
          type: "NEW_TOPIC",
          payload: data
        });
      });
  };
};

export const fetchTopics = () => {
  return dispatch => {
    axios.get("http://localhost:3001/fetchTopics").then(({ data }) => {
      dispatch({
        type: "FETCH_TOPICS",
        payload: data
      });
    });
  };
};
