import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "redux/state";
import PostWidget from "./PostWidget";
import axios from "axios";

const PostsWidget = ({ userId, isProfile = false }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const token = useSelector((state) => state.token);

  const getPosts = async () => {
    const data = await axios(`${process.env.REACT_APP_API_URL}/posts`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch(setPosts({ posts: data }));
  };
};

export default PostsWidget;
