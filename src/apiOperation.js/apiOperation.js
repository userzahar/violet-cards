import axios from 'axios';
axios.defaults.baseURL = 'https://6454e462a74f994b334bd809.mockapi.io';

export const getUsers = async function () {
  try {
    const response = await axios.get('/users');
    return response;
  } catch (error) {
    console.error(error);
  }
};
export const addNumberCurrentUsers = async function (userId, follow) {
  try {
    const response = await axios.put(`/users/${userId}`, {
      followers: follow + 1,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const removeNumberCurrentUser = async function (userId, follow) {
  try {
    const response = await axios.put(`/users/${userId}`, {
      followers: follow - 1,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
