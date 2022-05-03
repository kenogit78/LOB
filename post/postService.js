import axios from 'axios';

const API_URL = 'https://lob-chat.herokuapp.com/api/post/new';

// Create new ppost
const createPost = async (postData) => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };

  const response = await axios.post(API_URL, postData);

  return response.data;
};

const postService = {
  createPost,
};

export default postService;
