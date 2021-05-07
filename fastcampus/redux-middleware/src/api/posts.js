import axios from "axios";


export const getPosts = async () => {
  //package.json에 proxy설정해서 기본값으로 사용할 수있음 백엔드에서 proxy설정안하고 가능
  const response = await axios.get("/posts");
  return response.data;
};

export const getPostById = async (id) => {
  const response = await axios.get(`/posts/${id}`);
  return response.data;
};
