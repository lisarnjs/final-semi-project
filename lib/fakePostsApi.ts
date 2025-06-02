import { Post, User, Comment } from "@/types/posts";
import axios from "axios";

export const fetchPosts = async ({ pageParam = 1 }): Promise<Post[]> => {
  const res = await axios.get<Post[]>(
    `https://jsonplaceholder.typicode.com/posts?_page=${pageParam}&_limit=10`
  );
  return res.data;
};

export const fetchPostById = async (id: number): Promise<Post> => {
  const res = await axios.get<Post>(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return res.data;
};

export const fetchUserById = async (userId: number): Promise<User> => {
  const res = await axios.get<User>(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  return res.data;
};

export const fetchCommentsByPostId = async (
  postId: number
): Promise<Comment[]> => {
  const res = await axios.get<Comment[]>(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );
  return res.data;
};

export const createPost = async (newPost: Omit<Post, "id">): Promise<Post> => {
  const res = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    newPost
  );
  return res.data;
};

export const updatePost = async (updatedPost: Post): Promise<Post> => {
  const res = await axios.put(
    `https://jsonplaceholder.typicode.com/posts/${updatedPost.id}`,
    updatedPost
  );
  return res.data;
};

export const deletePost = async (postId: number): Promise<void> => {
  await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
};
