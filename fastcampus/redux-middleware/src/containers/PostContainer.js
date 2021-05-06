import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearPost, getPost } from "../modules/post";
import Post from "../components/Post";

//라우터에서 props로 받아줄것
function PostContainer({ postId }) {
  const { data, loading, error } = useSelector((state) => state.posts.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(postId));
    //이전컴포넌트가 잠시보이는 현상을 없애기위해 사용하며 이것은 컴포넌트가 사라질때 실행됨
    return () => {
      dispatch(clearPost());
    };
  }, [postId, dispatch]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러발생...</div>;
  if (!data) return null;
  return <Post post={data} />;
}

export default PostContainer;
