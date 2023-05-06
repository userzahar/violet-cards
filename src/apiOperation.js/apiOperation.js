import axios from 'axios';
axios.defaults.baseURL = 'https://6454e462a74f994b334bd809.mockapi.io';

const getUsersByID = async function (id) {
  try {
    const response = await axios.get(`/users/${id}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const addNumberCurrentUsers = async function (userID) {
  try {
    const follow = await getUsersByID(userID).then(res => {
      return res.data.followers;
    });
    const response = await axios.put(`/users/${userID}`, {
      followers: follow + 1,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const removeNumberCurrentUser = async function (userID) {
  try {
    const follow = await getUsersByID(userID).then(res => {
      return res.data.followers;
    });
    const response = await axios.put(`/users/${userID}`, {
      followers: follow - 1,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
