import axios from "axios";

export const getUser = async (userId) => {
  let userData = {};
  let userPosts = [];
  let userObject = {}
  try {
    const data1 = await axios.get(
      "https://jsonplaceholder.typicode.com/users/" + userId
    );
    userData = data1.data;

    const data2 = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?userId=" + userId
    );
    userPosts = data2.data

    userObject = {
        userData,
        userPosts
    }

    return userObject
  } catch (error) {
    console.log(error);
  }
};
