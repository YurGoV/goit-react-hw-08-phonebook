import axios from 'axios';

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
