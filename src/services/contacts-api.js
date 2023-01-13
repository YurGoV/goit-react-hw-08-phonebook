import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

export async function getContacts() {
  const response = await axios.get(`https://63bec5a9e348cb0762180cfe.mockapi.io/contacts`);
  return response.data;
}

export async function postContact(data) {
  const response = await axios.post(`https://63bec5a9e348cb0762180cfe.mockapi.io/contacts`, data);
  return response.data;
}

export async function delContact(id) {
  const response = await axios.delete(`https://63bec5a9e348cb0762180cfe.mockapi.io/contacts/${id}`);
  return response.data.id;
}

export async function signupUser(data) {
  const response = await axios.post(`users/signup`, data);
  return response;
}

export async function login(data) {
  const response = await axios.post(`users/login`, data);
  return response;
}

export async function logout() {
  const response = await axios.post(`users/logout`);
  return response;
}
