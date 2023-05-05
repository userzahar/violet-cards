import axios from 'axios';
axios.defaults.baseURL = 'https://6454e462a74f994b334bd809.mockapi.io';

const getUsers = async function () {
  try {
    const response = await axios.get('/users');
    console.log('🚀 ~ response:', response);

    return response;
  } catch (error) {
    console.error(error);
  }
};
export default getUsers;
