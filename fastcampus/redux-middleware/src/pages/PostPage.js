import React from "react";
import PostContainer from "../containers/PostContainer";

function PostPage({ match }) {
  //url파라미터는 무조건 문자열
  const { id } = match.params;
  //숫자로 받아야되기 때문에 숫자로 바꿔줌
  const postId = parseInt(id, 10);

  return <PostContainer postId={postId} />;
}

export default PostPage;
