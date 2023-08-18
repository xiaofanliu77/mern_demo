import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useState } from "react";
import { addPost } from "../../actions/post";

const PostForm = ({ addPost }) => {
  const [text, setText] = useState(""); //this is the object (a string) to be sent
  return (
    <div class="post-form">
      <div className="bg-primary p">
        <h3>Say Something...</h3>
      </div>
      <form
        className="form my-1"
        onSubmit={(e) => {
          e.preventDefault();
          addPost({ text }); // an object reference/var needs to be put in {}
          setText("");
        }}
      >
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Create a post"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        ></textarea>
        <input type="submit" className="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
