import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`
};

export async function getContacts() {
  const response = await axios.get(`contacts`);
  return response.data;
};

export async function refresh() {
  const response = await axios.get(`users/current`);
  return response.data;
};

export async function postContact(data) {
  const response = await axios.post(`contacts`, data);
  return response.data;
};

export async function patchContact({id, contact}) {
  const response = await axios.patch(`contacts/${id}`, contact);
  return response.data;
};

export async function delContact(id) {
  const response = await axios.delete(`contacts/${id}`);
  return response.data.id;
};

export async function signupUser(data) {
  const response = await axios.post(`users/signup`, data);
  return response;
};

export async function login(data) {
  const response = await axios.post(`users/login`, data);
  return response;
};

export async function logout() {
  const response = await axios.post(`users/logout`);
  return response;
};
