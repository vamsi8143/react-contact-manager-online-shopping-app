// import { LOCAL_STORAGE_KEY } from "../const";
import axios from "axios";

// export const retriveContacts = () =>
//   JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || JSON.stringify([{}]));
// export const storageHandler = (contacts) =>
//   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));

// export const retriveContact = (id) => {
//   const contact = retriveContacts().filter((contact) => {
//     return contact.id === id;
//   });
//   return contact[0] || {};
// };

export const api = axios.create({
  baseURL: "http://localhost:3006/",
});

export const fetchAllContacts = async () => {
  return await api.get("/contacts");
};

export const addContact = async (contact) => {
  return await api.post("/contacts", contact);
};

export const updateContact = async (id, contact) => {
  return await api.put(`/contacts/${id}`, contact);
};

export const deleteContact = async (id) => {
  return await api.delete(`/contacts/${id}`);
};
