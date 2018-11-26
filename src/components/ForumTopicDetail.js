import React from "react";
import { connect } from "react-redux";
import { fetchTopics } from "../actions";
import ForumTopicGroup from "./ForumTopicGroup";
import ForumTopic from "./ForumTopic";
import { Button, Modal, Form, TextArea } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import CustomField from "./CustomField";
import { createPost } from "../actions";
import { fetchPostsWithTopicID } from "../actions";

class ForumTopicDetail extends React.Component {
  state = {
    showModal: false
  };

  handleOpen = () => this.setState({ showModal: true });

  handleClose = () => this.setState({ showModal: false });

  componentDidMount() {
    console.log(this.props.match.params.forumTopicDetailID);
    this.props.dispatch(fetchTopics());
    this.props.dispatch(
      fetchPostsWithTopicID(this.props.match.params.forumTopicDetailID)
    );
  }

  newPostSubmit = ({ postTitle, postContent }) => {
    const { topic } = this.props;
    const topicID = topic._id;

    this.props.dispatch(createPost(topicID, postTitle, postContent));
    this.handleClose();
    this.props.dispatch(fetchTopics());
  };

  render() {
    const { topic } = this.props;
    const { posts } = this.props;

    console.log("here are the posts", posts);

    if (topic && posts) {
      const { handleSubmit } = this.props;

      return (
        <React.Fragment>
          <ForumTopicGroup title={topic.title}>
            {posts.map(post => (
              <ForumTopic key={post._id}> {post.title}</ForumTopic>
            ))}
          </ForumTopicGroup>
          <Modal
            open={this.state.showModal}
            onClose={this.handleClose}
            trigger={
              <Button onClick={this.handleOpen} color="teal">
                Create New Post
              </Button>
            }
          >
            <Modal.Header>Create a New Post</Modal.Header>
            <Modal.Content>
              <Form onSubmit={handleSubmit(this.newPostSubmit)}>
                <Field
                  name="postTitle"
                  label="Title: "
                  component={CustomField}
                  placeholder="Your Post title"
                />

                <Field
                  name="postContent"
                  label="Content: "
                  component={customTextArea}
                  placeholder="Your content here.."
                />

                <Button color="teal" type="submit">
                  Create
                </Button>
              </Form>
            </Modal.Content>
          </Modal>
        </React.Fragment>
      );
    }

    return <h2>Loading</h2>;
  }
}

const customTextArea = ({ placeholder, label, ...rest }) => (
  <Form.Field>
    <label>{label}</label>
    <TextArea placeholder={placeholder} />
  </Form.Field>
);

const mapStateToProps = (state, ownProps) => {
  return {
    topic: state.topics.find(
      topic => topic._id === ownProps.match.params.forumTopicDetailID
    ),
    posts: state.posts
  };
};

const withRedux = connect(
  mapStateToProps,
  null
)(ForumTopicDetail);

export default reduxForm({
  form: "postsForm"
})(withRedux);
