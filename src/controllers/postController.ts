import { Request, Response } from 'express';

const posts = [
  { id: 1, title: 'Post 1', content: 'Content of Post 1' },
  { id: 2, title: 'Post 2', content: 'Content of Post 2' },
  { id: 3, title: 'Post 3', content: 'Content of Post 3' },
];

export const getPosts = (_req: Request, res: Response): void => {
  console.log(`[${new Date().toISOString()}] GET /posts - Retrieving all posts`);
  res.status(200).json(posts);
};

export const getPostById = (req: Request, res: Response): void => {
  const postId = req.params.id;
  console.log(`[${new Date().toISOString()}] GET /posts/${postId} - Searching for post`);

  const post = posts.find((p) => p.id === parseInt(postId));
  if (post) {
    console.log(`[${new Date().toISOString()}] Post found: ${JSON.stringify(post)}`);
    res.status(200).json(post);
  } else {
    console.log(`[${new Date().toISOString()}] Post not found with ID: ${postId}`);
    res.status(404).json({ message: 'Post not found' });
  }
};

//recive post from client and console.log request
export const createPost = (req: Request, res: Response): void => {
  const newPost = req.body;
  console.log(
    `[${new Date().toISOString()}] POST /posts - Creating new post: ${JSON.stringify(newPost)}`,
  );
  res.status(201).json(newPost);
};
