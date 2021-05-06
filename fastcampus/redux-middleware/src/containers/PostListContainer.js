import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../modules/post";
import PostList from "../components/PostList";

function PostListContainer() {
  const { data, loading, error } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  //처음렌더링할때 post를 불러오기 위해
  useEffect(() => {
    //다른페이지에서 뒤로가기를 눌렀을 때 postList를 다시 불러오지 않기위해
    // if (data) return;
    dispatch(getPosts());
  }, [dispatch]);

  if (loading && !data) return <div>로딩중...</div>;
  if (error) return <div>에러발생...</div>;
  if (!data) return null;

  return <PostList posts={data} />;
}

export default PostListContainer;
