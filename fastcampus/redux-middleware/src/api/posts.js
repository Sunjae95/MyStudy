const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

//가짜 post목록
const posts = [
  {
    id: 1,
    title: "리덕스 미들웨어",
    body: "리덕스 미들",
  },
  {
    id: 2,
    title: "리덕스thunk",
    body: "리덕스 리덕스thunk",
  },
  {
    id: 3,
    title: "리덕스 saga",
    body: "리덕스 saga",
  },
];

export const getPosts = async () => {
  await sleep(500);
  return posts;
};

export const getPostById = async (id) => {
  await sleep(500);
  return posts.find((post) => post.id === id);
};
